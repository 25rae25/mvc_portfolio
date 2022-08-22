document.getElementById('getList').addEventListener('click', () => {
  fetch('/health').then(function () {
    window.location = '/health';
  });
});

document.getElementById('update').addEventListener('click', () => {
  fetch('/update').then(function () {
    window.location = '/update';
  });
});
