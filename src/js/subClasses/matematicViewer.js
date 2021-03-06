class matematicViewer extends Viewer {
	constructor(id, result, namesArray) {
		super(id, result, namesArray);

		$body.addEventListener('keypress', this.handleKeypress.bind(this));
	}

	handleKeypress(e) {
		const value = String.fromCharCode(e.keyCode).replace(/[^0-9\+\-\*\/\.]/, '');

		if (value) {
			this.emmit('keypress', value);
		}

	}

	saveNumber(value){
		const ID_TARGET = '#remember-number';

		$document.querySelector(ID_TARGET).textContent = value;
	}
}
