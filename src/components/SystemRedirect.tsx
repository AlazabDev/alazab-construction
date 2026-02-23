import { useEffect } from "react";

interface SystemRedirectProps {
  to: string;
}

const SystemRedirect = ({ to }: SystemRedirectProps) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
};

export default SystemRedirect;
