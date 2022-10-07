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
