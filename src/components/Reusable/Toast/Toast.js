import Swal from "sweetalert2";

const Toast = Swal.mixin({
	toast: true,
	position: "top",
	showConfirmButton: false,
	timer: 2500,
	iconColor: "rgba(0,0,0,0)",
	timerProgressBar: true,
	showCloseButton: true,
	customClass: {
		popup: "colored-toast",
		container: "toastClass",
		title: "titleClass",
		icon: "iconClass"
	},
	onOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	}
});

export default Toast;
