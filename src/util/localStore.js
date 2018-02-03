export default {
	getItem: function (key) {
		// body...
		let value
		try {
			value = localStorage.getItem(key)
		} catch (ex) {
			// if (__DEV__) {
			console.error('localStorage.getItem报错', ex.message)
			// }
		} finally {
			return value
		}
	},
	setItem: function (key, value) {
		// body...
		try {
			localStorage.setItem(key, value)
		} catch (ex) {
			// if (__DEV__) {
			console.error('localStorage.setItem报错', ex.message)
			// }
		}
	}
}