import Swal from "sweetalert2";

const toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000
});

const Toast = props =>
  toast({
    type: "success",
    title: "Signed in successfully"
  });

export default Toast;
