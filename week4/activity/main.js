//const form = document.forms[0];
//console.log(form);

const input = form.elements.searchInput;

//input.addEventListener('focus', () => alert('focused'), false);

//input.addEventListener('blur', () => alert('blurred'), false);

//input.addEventListener('change', () => alert('changed'), false);

const form = document.forms['search'];
form.addEventListener ('submit', search, false);

/* function search(event) {
    alert(' Form Submitted');
    event.preventDefault();
}*/

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}