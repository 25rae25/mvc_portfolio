function signUp() {
  const userId = document.getElementById('userId').value;
  const email = document.getElementById('email').value;
  const pwd = document.getElementById('pwd').value;
  const phone = document.getElementById('phone').value;

  axios
    .put('/singUp', {
      userId,
      email,
      pwd,
      phone,
    })
    .then((res) => {
      div.innerText = res.data.userId;
      div.innerText = res.data.email;
      div.innerText = res.data.pwd;
      div.innerText = res.data.phone;
    });

  fetch('/login').then(function () {
    window.location = '/login';
  });
}
