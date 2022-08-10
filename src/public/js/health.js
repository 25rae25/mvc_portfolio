function health() {
  const inputValue = document.getElementById('health').value;

  axios
    .post('/health', {
      data: inputValue,
    })
    .then((res) => {
      const div = document.createElement('div');
      div.innerText = res.data.title;
      document.getElementById('health').appendChild(div);
    });
}
