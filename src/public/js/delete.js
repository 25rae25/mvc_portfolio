document.getElementById('getDelete').addEventListener('click', () => {
  const id = document.getElementById('idid').value;
  const name1 = document.getElementById('name1').innerText;
  const name2 = document.getElementById('name2').innerText;

  if (name1 === name2) {
    axios
      .delete('/detail', {
        data: {
          id,
        },
      })
      .then(function () {
        window.location = '/health?id=1';
      });
  } else {
    alert('글쓴이만 삭제 할 수 있습니다');
  }
});
