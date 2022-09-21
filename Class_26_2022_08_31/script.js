let btn = document.querySelector('#btn');

function display() {
    alert('It was clicked!');
}

btn.addEventListener('click',display);

/* btn.addEventListener('click', function(event) {
    console.log(event.type);
});

*/
