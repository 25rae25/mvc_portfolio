document.getElementById('loginBtn').addEventListener('click', () => {
  const getId = document.getElementById('id').value;
  const getPwd = document.getElementById('pwd').value;
  if (getId === '') {
    alert('아이디를 입력해주세요.');
  }
  if (getPwd === '') {
    alert('비밀번호를 입력해주세요.');
  }
  axios
    .post('/login', {
      userId: getId,
      pwd: getPwd,
    })
    .then(function (response) {
      window.location = '/home';
    })
    .catch(function (error) {
      if (error.response.data) {
        alert(error.response.data.message);
      }
    });
});
