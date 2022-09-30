console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Successfully Submitted!');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);