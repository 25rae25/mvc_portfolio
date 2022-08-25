document.getElementById('getList').addEventListener('click', () => {
  fetch('/health').then(function () {
    window.location = '/health';
  });
});

// document.getElementById('update').addEventListener('click', () => {
//   fetch('/update').then(function () {
//     window.location = '/update';
//   });
// });

// function deleteOk() {
//   if (!confirm('정말로 삭제하시겠습니까?')) {
//     return false;
//   }
//   document.getElementById('cancel').addEventListener('click', () => {
//     fetch('/health').then(function () {
//       window.location = '/health';
//     });
//   });
// }

// document.getElementById('getDelete').addEventListener('click', () => {
//   const div = document.getElementById('div');
//   const URLSearch = new URLSearchParams(location.search);
//   const id = [URLSearch.get('id')];
//   const saveConfirm = confirm('게시글을 삭제하시겠습니까?');

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
//   // if (saveConfirm) {
//   //   fetch('/board_detail/:id', {
//   //     method: 'delete',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify(id),
//   //   }).then(function (data) {
//   //     div.remove(data);
//   //     window.location = '/board';
//   //   });
//   // }
//   axios
//     .delete('/health', {
//       name,
//       title,
//       email,
//       phone,
//       content,
//       position,
//       time,
//       address,
//       sport,
//     })

//     .then((res) => {
//       div.remove(res.data.name);
//       div.remove(res.data.title);
//       div.remove(res.data.email);
//       div.remove(res.data.phone);
//       div.remove(res.data.content);
//       div.remove(res.data.position);
//       div.remove(res.data.time);
//       div.remove(res.data.address);
//       div.remove(res.data.sport);
//     });

//   fetch('/health').then(function () {
//     window.location = '/health';
//   });
// });
