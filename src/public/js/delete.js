document.getElementById('getDelete').addEventListener('click', () => {
  const id = document.getElementById('idid').value;

  const saveConfirm = confirm('게시글을 삭제하시겠습니까?');
  if (saveConfirm) {
    axios.delete('/detail', {
      data: {
        id,
      },
    });
  }
  fetch('/health').then(function () {
    window.location = '/health';
  });
});
