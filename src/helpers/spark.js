import Toast from "../components/Reusable/Toast/Toast";
import { ToastMessage } from "../components/Reusable/Toast/ToastMessage";

function fireSpark(type, message) {
	Toast.fire({
		icon: `${type}`,
		title: ToastMessage(`${type}`, `${message}`)
	});
}

export default fireSpark;
