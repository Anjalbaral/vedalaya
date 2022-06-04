export const ToastMessage = (type, message) => {
	if (type === "error") {
		return `<div class='errormsg' >${message}</div>`;
	}
	if (type === "success") {
		return `<div class='successmsg' >${message}</div>`;
	}
	if (type === "warning") {
		return `<div class='warningmsg' >${message}</div>`;
	}
	if (type === "info") {
		return `<div class='infomsg' >${message}</div>`;
	} else {
		return `<div class='othermsg' >${message}</div>`;
	}
};
