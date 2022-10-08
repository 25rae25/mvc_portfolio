document.getElementById('add').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const nickname = document.getElementById('nickname').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const content = document.getElementById('content').value;
  const position = document.getElementById('position').value;
  const time = document.getElementById('time').value;
  const address = document.getElementById('address').value;

  const sports = document.getElementById('sports');
  const sport = sports.options[sports.selectedIndex].value;

  axios.post('/health', {
    name,
    title,
    nickname,
    email,
    phone,
    content,
    position,
    time,
    address,
    sport,
  });

  fetch('/health').then(function () {
    window.location = '/health?id=1';
  });
});
