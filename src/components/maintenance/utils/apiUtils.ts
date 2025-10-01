
import { supabase } from '@/integrations/supabase/client';
import { MaintenanceRequestDetails, AttachmentDetails } from '@/types/maintenance';

export const fetchMaintenanceRequest = async (requestNumber: string) => {
  const { data: requestData, error: requestError } = await supabase
    .from('maintenance_requests')
    .select('*')
    .eq('id', requestNumber)
    .single();
  
  if (requestError) {
    throw new Error('لم يتم العثور على الطلب');
  }
  
  // تحويل البيانات للصيغة المطلوبة
  const details: MaintenanceRequestDetails = {
    id: requestData.id,
    request_number: requestNumber,
    title: requestData.title,
    description: requestData.description || '',
    branch: requestData.location || 'غير محدد',
    service_type: requestData.service_type,
    priority: requestData.priority || 'medium',
    status: requestData.status || 'pending',
    scheduled_date: requestData.preferred_date,
    estimated_cost: requestData.estimated_cost ? String(requestData.estimated_cost) : null,
    actual_cost: requestData.actual_cost ? String(requestData.actual_cost) : null,
    created_at: requestData.created_at,
    completion_date: requestData.actual_completion
  };
  
  return details;
};

export const fetchAttachments = async (requestNumber: string) => {
  const { data: attachmentsData, error: attachmentsError } = await supabase
    .from('request_attachments')
    .select('*')
    .eq('request_id', requestNumber);
  
  if (attachmentsError) {
    return [];
  }
  
  return (attachmentsData || []).map(att => ({
    id: att.id,
    file_url: att.file_path,
    description: att.file_name || 'مرفق'
  })) as AttachmentDetails[];
};

export const updateRequestStatus = async (requestId: string, newStatus: string) => {
  const updateData: any = { status: newStatus };
  
  // إذا تم تعيين الحالة كمكتمل، قم بتعيين تاريخ الاكتمال
  if (newStatus === 'completed') {
    updateData.actual_completion = new Date().toISOString();
  }
  
  const { error } = await supabase
    .from('maintenance_requests')
    .update(updateData)
    .eq('id', requestId);
  
  if (error) throw error;
  
  // إضافة سجل تغيير الحالة - تأكد من تطابق الأنواع
  const statusValue = newStatus as 'draft' | 'awaiting_vendor' | 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  
  await supabase
    .from('request_status_history')
    .insert({
      request_id: requestId,
      to_status: statusValue,
      note: `تم تغيير الحالة إلى ${getStatusText(newStatus)}`,
    });
};

export const getStatusText = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'pending':
      return 'قيد الانتظار';
    case 'in progress':
    case 'in-progress':
      return 'قيد التنفيذ';
    case 'completed':
      return 'مكتمل';
    case 'cancelled':
      return 'ملغي';
    default:
      return status || 'غير معروف';
  }
};
