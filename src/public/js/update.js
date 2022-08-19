function modify() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  axios
    .post('/update', {
      title,
      content,
    })

    .then((res) => {
      div.innerText = res.data.title;
      div.innerText = res.data.content;
    });

  fetch('/health').then(function () {
    window.location = 'health';
  });
}
