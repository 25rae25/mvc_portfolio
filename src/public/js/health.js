function health() {
  const inputValue = document.getElementById('').value;

  axios
    .post('/health', {
      data: inputValue,
    })
    .then((res) => {
      const div = document.createElement('div');
      div.innerText = res.data.data;
      document.getElementById('data').appendChild(div);
    });
}
