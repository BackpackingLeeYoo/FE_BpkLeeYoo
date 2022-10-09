import Swal, { SweetAlertIcon } from "sweetalert2";

// SweetAlert CustomHook
export const SweetAlertHook = (timer: number, title: string, icon: SweetAlertIcon) => {
  Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  }).fire({
    icon,
    title,
  });
};
