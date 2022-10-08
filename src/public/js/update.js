// document.getElementById('getUpdate').addEventListener('click', () => {
//   const id = document.getElementById('idid').value;
//   const title = document.getElementById('title').value;
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;
//   const content = document.getElementById('content').value;
//   const position = document.getElementById('position').value;
//   const time = document.getElementById('time').value;
//   const address = document.getElementById('address').value;
//   const sports = document.getElementById('sports');
//   const sport = sports.options[sports.selectedIndex].value;

//   const name1 = document.getElementById('name1').innerText;
//   const name2 = document.getElementById('name2').value;

//   console.log(name1, '11111111111111');
//   console.log(name2, '2222222222222');

//   if (name1 === name2) {
//     axios
//       .put('/update', {
//         id,
//         name,
//         title,
//         email,
//         phone,
//         content,
//         position,
//         time,
//         address,
//         sport,
//       })
//       .then(function () {
//         window.location = '/health';
//       });
//   } else {
//     alert('글쓴이만 수정 할 수 있습니다');
//   }
// });

document.getElementById('aaa').addEventListener('click', () => {
  const name1 = document.getElementById('name1').innerText;
  const name2 = document.getElementById('name2').innerText;

  console.log(name1, '111111111');
  console.log(name2, '222222222');

  if (name1 === name2) {
    window.location = '/update/<%=id%>';
  } else {
    alert('글쓴이만 수정 할 수 있습니다.');
  }
});
