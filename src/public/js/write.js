document.getElementById('getWrite').addEventListener('click', () => {
  axios
    .post('/write', {})
    .then(function (response) {
      window.location = '/write';
    })
    .catch(function (error) {
      if (error) {
        alert(error.response.data.message);
        window.location = '/login';
      }
    });
});

document.getElementById('getCheck').addEventListener('click', () => {
  const title = document.getElementById('title').value.trim();
  var writer = f.writer.value.trim();
  if (title == '') {
    alert('제목을 작성해 주세요.');
    f.title.focus();
    return false;
  }
  if (writer == '') {
    alert('작성자를 기재해 주세요.');
    f.writer.focus();
    return false;
  }
  return true;
});
