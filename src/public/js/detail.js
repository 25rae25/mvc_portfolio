document.getElementById('getList').addEventListener('click', () => {
  fetch('/health').then(function () {
    window.location = '/health';
  });
});

document.getElementById('modify').addEventListener('click', () => {
  fetch('/update').then(function () {
    window.location = '/update';
  });
});
