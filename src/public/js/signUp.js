function signUp() {
  const nickname = document.getElementById('nickname').value;
  const email = document.getElementById('email').value;
  const pwd = document.getElementById('pwd').value;
  const phone = document.getElementById('phone').value;

  axios.post('/signUp', {
    nickname,
    email,
    pwd,
    phone,
  });

  fetch('/login').then(function () {
    window.location = '/login';
  });
}
