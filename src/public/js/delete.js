document.getElementById('getDelete').addEventListener('click', () => {
  const URLSearch = new URLSearchParams(location.search);
  const id = [URLSearch.get('id')];
  const saveConfirm = confirm('게시글을 삭제하시겠습니까?');
  if (saveConfirm) {
    fetch('/detail/id', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    }).then(function () {
      //   window.location = '/health';
    });
  }
});
