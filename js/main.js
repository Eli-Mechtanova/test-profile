const button = document.getElementById('button');
const avatars = document.getElementsByClassName('js');

function spin() {
    [...avatars].map((avatar) => avatar.classList.toggle('spin'));
};

button.addEventListener("click", spin);