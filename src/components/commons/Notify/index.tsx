
import { toast } from 'react-toastify';

export const Notify_error = (data: string) => toast.error(data, {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  theme: "colored",
});

export const Notify_success = (data: string) => toast.success(data, {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  theme: "colored",
});