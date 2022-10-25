import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const ToastError = (msg) => {
  return toast.error(msg)
}

export const ToastDone = (msg) => {
  return toast.success(msg)
}

export const ToastInfo = (msg) => {
  return toast.info(msg)
}
