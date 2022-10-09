document.getElementById('getList').addEventListener('click', () => {
  fetch('/health').then(function () {
    window.location = '/health?id=1';
  });
});

const checkUser = () => {
  let name1;
  if (document.getElementById('name1'))
    name1 = document.getElementById('name1').innerText;
  const name2 = document.getElementById('name2').innerText;
  const id = window.location.pathname.replace('/detail/', '');

  if (name1 === name2) {
    window.location = `/update/${id}`;
  } else {
    alert('글쓴이만 수정 할 수 있습니다');
  }
};
