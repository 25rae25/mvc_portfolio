function test() {
  const inputValue = document.getElementById('test').value;

  axios
    .post('/test', {
      data: inputValue,
    })
    .then((res) => {
      const div = document.createElement('div');
      div.innerText = res.data.data;
      document.getElementById('data').appendChild(div);
    });
}
