// function addingEventListener() {

//     const input = document.getElementById('input');

//     function clickAlert() {
//     alert('I was clicked!');
// }

// input.addEventListener();
// }

let input;

function addingEventListener() {
    input = document.getElementById('input');
    input.addEventListener('click', ()=> alert('I was clicked!'));

}
console.log(addingEventListener())

