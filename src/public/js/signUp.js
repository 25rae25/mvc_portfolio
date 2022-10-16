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

function checkId() {
  const nickname = document.getElementById('nickname').value;

  axios
    .post('/checkId', {
      nickname,
    })
    .then((res) => {
      if (res.data) {
        alert('사용가능한 아이디입니다.');
        document.getElementById('signupBtn').style.color = 'black';
        document.getElementById('signupBtn').removeAttribute('disabled');
      } else {
        alert('사용불가한 아이디입니다.');
      }
    });
}
