

let title = document.querySelector('.title')
let keyCodeElem = document.querySelector('.keycode')
let keyElem = document.querySelector('.key')
let locationElem = document.querySelector('.location')
let whichElem = document.querySelector('.which')
let codeElem = document.querySelector('.code')

document.body.addEventListener('keydown', function (event) {

	event.preventDefault()

	let eventKeyCode = event.keyCode
	let eventKey = event.key
	let eventLocation = event.location
	let eventWhich = event.which
	let eventCode = event.code

	keyCodeElem.innerHTML = eventKeyCode
	keyElem.innerHTML = eventKey
	locationElem.innerHTML = eventLocation
	whichElem.innerHTML = eventWhich
	codeElem.innerHTML = eventCode

})