const btn = document.getElementById('btn');
const msg = document.getElementById('text');

function clickHandler() {
  msg.textContent = "ボタンをクリックしました";
}

btn.addEventListener('click', function() {
setTimeout (clickHandler, 2000);
});
