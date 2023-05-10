export const onDocumentLoaded = (cb) => {
	console.log('document.readyState', document.readyState);
	if (/comp|inter|loaded/.test(document.readyState)) {
		cb()
	} else {
		document.addEventListener('DOMContentLoaded', cb, false)
	}
}
