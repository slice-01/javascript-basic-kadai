const btn = document.getElementById('btn');

function clickHandler() {
  document.getElementById('text').textContent = "ボタンをクリックしました";
}

btn.addEventListener('click',clickHandler);