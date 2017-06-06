const READY_STATE_UNINITIALIZED = 0;
const READY_STATE_LOADING = 1;
const READY_STATE_LOADED = 2;
const READY_STATE_INTERACTIVE = 3;
const READY_STATE_COMPLETE = 4;

window.onload = function () {
	//new App().controller()
	new Formulario().controller()
}