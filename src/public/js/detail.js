document.getElementById('getList').addEventListener('click', () => {
  fetch('/health').then(function () {
    window.location = '/health';
  });
});

document.getElementById('modify').addEventListener('click', () => {
  fetch('/detail_update').then(function () {
    window.location = '/detail_update';
  });
});
