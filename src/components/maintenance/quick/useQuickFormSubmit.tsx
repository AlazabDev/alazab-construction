
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MaintenanceRequest } from '@/types/maintenance';
import { sendEmail } from '@/lib/emailjs';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from "@/hooks/use-toast";

export const useQuickFormSubmit = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (formData: MaintenanceRequest, resetForm: () => void) => {
    console.log('useQuickFormSubmit: بدء عملية الإرسال', formData);
    
    if (!formData.branch || !formData.serviceType || !formData.title || !formData.description) {
      console.log('useQuickFormSubmit: بيانات مفقودة', { 
        branch: formData.branch, 
        serviceType: formData.serviceType, 
        title: formData.title, 
        description: formData.description 
      });
      
      toast({
        title: "خطأ في البيانات",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      console.log('useQuickFormSubmit: بدء الحفظ في قاعدة البيانات');

      const estimatedCost = formData.estimatedCost
        ? parseFloat(formData.estimatedCost)
        : null;
      
      // إنشاء كائن البيانات المتوافق مع schema
      const requestData = {
        title: formData.title,
        client_name: 'عميل سريع',
        service_type: formData.serviceType,
        description: formData.description,
        location: formData.branch,
        priority: formData.priority,
        preferred_date: formData.requestedDate,
        estimated_cost: estimatedCost,
        status: 'pending'
      };

      console.log('useQuickFormSubmit: بيانات الطلب المرسل', requestData);
        
      const { data: insertedRequest, error: dbError } = await supabase
        .from('maintenance_requests')
        .insert(requestData)
        .select();
        
      if (dbError) {
        console.error('useQuickFormSubmit: خطأ في حفظ بيانات الطلب:', dbError);
        throw new Error('فشل في حفظ الطلب');
      }
      
      console.log('useQuickFormSubmit: تم حفظ الطلب بنجاح', insertedRequest);
      
      const requestId = insertedRequest && insertedRequest[0] ? insertedRequest[0].id : '';
      
      // رفع المرفقات إذا وجدت
      if (formData.attachments.length > 0 && requestId) {
        console.log('useQuickFormSubmit: بدء رفع المرفقات', formData.attachments.length);
        
        const uploadPromises = formData.attachments.map(async (file) => {
          const fileName = `${requestId}-${Date.now()}-${file.name}`;
          
          const attachmentData = {
            request_id: requestId,
            file_name: file.name,
            file_path: fileName,
            mime_type: file.type,
            size_bytes: file.size
          };
          
          const { error: attachError } = await supabase
            .from('request_attachments')
            .insert(attachmentData);
          
          if (attachError) {
            console.error('useQuickFormSubmit: خطأ في حفظ المرفق:', attachError);
            return null;
          }
          
          return attachmentData;
        });
        
        await Promise.all(uploadPromises);
        console.log('useQuickFormSubmit: تم حفظ المرفقات بنجاح');
      }
      
      // إرسال البريد الإلكتروني
      const emailParams = {
        request_number: requestId,
        branch: formData.branch,
        service_type: formData.serviceType,
        title: formData.title,
        description: formData.description,
        priority: formData.priority === 'low' ? 'منخفضة' : 
                  formData.priority === 'medium' ? 'متوسطة' : 
                  formData.priority === 'high' ? 'عالية' : 'حرجة',
        requested_date: new Date(formData.requestedDate).toLocaleDateString('ar-SA'),
        estimated_cost: formData.estimatedCost || 'غير محدد',
        attachments_count: formData.attachments.length
      };
      
      try {
        console.log('useQuickFormSubmit: بدء إرسال البريد الإلكتروني');
        await sendEmail(emailParams);
        console.log('useQuickFormSubmit: تم إرسال البريد الإلكتروني بنجاح');
      } catch (emailError) {
        console.error('useQuickFormSubmit: خطأ في إرسال البريد الإلكتروني:', emailError);
      }
      
      toast({
        title: "تم إرسال الطلب بنجاح",
        description: `تم إنشاء طلب الصيانة برقم ${requestId}`,
        variant: "default",
      });
      
      console.log('useQuickFormSubmit: تم إرسال الطلب بنجاح، رقم الطلب:', requestId);
      
      resetForm();
      navigate(`/maintenance-tracking?requestNumber=${requestId}`);
      
    } catch (error) {
      console.error('useQuickFormSubmit: خطأ في إرسال الطلب:', error);
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إرسال طلبك. الرجاء المحاولة مرة أخرى.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, submitForm };
};
