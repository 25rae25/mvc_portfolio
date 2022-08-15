function enroll() {
  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;

  axios
    .post('/health', {
      name,
      title,
    })
    .then((res) => {
      const div = document.createElement('div');
      div.innerText = res.data.name;
      div.innerText = res.data.title;
      // document.getElementById('name').appendChild(div);
      // document.getElementById('title').appendChild(div);
    });
}
