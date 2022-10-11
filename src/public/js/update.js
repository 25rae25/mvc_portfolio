let name1;
if (document.getElementById('name1'))
  name1 = document.getElementById('name1').innerText;
const name2 = document.getElementById('name2').value;

if (name1 !== name2 || !name1) {
  alert('유저 정보가 올바르지 않습니다.');
  window.location = '/health?id=1';
}

document.getElementById('getUpdate').addEventListener('click', () => {
  const id = document.getElementById('idid').value;
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
      id,
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
    .then(function () {
      window.location = '/health?id=1';
    });
});
