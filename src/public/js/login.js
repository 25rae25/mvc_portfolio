// document.getElementById('loginBtn').addEventListener('click', () => {
//   const getId = document.getElementById('id').value;
//   const getPwd = document.getElementById('pwd').value;

//   if (getId === '') {
//     alert('아이디를 입력해주세요.');
//   }
//   if (getPwd === '') {
//     alert('비밀번호를 입력해주세요.');
//   }

// axios
//   .post('/login', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     userId: getId,
//     pwd: getPwd,
//   })
//   .then((res) => console.log(res.data))
//   .catch((error) => console.log(error.message));
//});
document.getElementById('loginBtn').addEventListener('click', () => {
  const getId = document.getElementById('id').value;
  const getPwd = document.getElementById('pwd').value;

  if (getId === '') {
    alert('아이디를 입력해주세요.');
  }
  if (getPwd === '') {
    alert('비밀번호를 입력해주세요.');
  }

  try {
    axios.post('/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      userId: getId,
      pwd: getPwd,
    });
    // alert(`${getId}님 안녕하세요!!`);
    // window.location = '/';
  } catch (error) {
    console.log(error.message);
  }
});
