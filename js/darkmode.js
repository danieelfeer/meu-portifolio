const $html = document.querySelector('html');
const $checkbox = document.getElementById('dark-btn');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode');
});