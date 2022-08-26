function modify() {
  const title = document.getElementById('title').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const content = document.getElementById('content').value;
  const position = document.getElementById('position').value;
  const time = document.getElementById('time').value;
  const address = document.getElementById('address').value;

  const sports = document.getElementById('sports');
  const sport = sports.options[sports.selectedIndex].value;

  axios
    .put('/update', {
      name,
      title,
      email,
      phone,
      content,
      position,
      time,
      address,
      sport,
    })
    .then((res) => {
      div.innerText = res.data.name;
      div.innerText = res.data.title;
      div.innerText = res.data.email;
      div.innerText = res.data.phone;
      div.innerText = res.data.content;
      div.innerText = res.data.position;
      div.innerText = res.data.time;
      div.innerText = res.data.address;
      div.innerText = res.data.sport;
    });

  fetch('/health').then(function () {
    window.location = 'http://localhost:3000/health';
  });
}