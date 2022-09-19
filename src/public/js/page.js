const pageButton = () => {
  const URLSearch = new URLSearchParams(location.search);
  const path = location.pathname;
  let pageNum;
  if (document.getElementById('pageNum').firstElementChild !== null) {
    pageNum = document
      .getElementById('pageNum')
      .firstElementChild.getAttribute('id');
  }
  const count = document.getElementById('pageNum').childElementCount;
  let getQueryString;

  document.getElementById('left').addEventListener('click', () => {
    if (URLSearch == 0 || URLSearch.get('id') == 1) {
      getQueryString = '1';
    } else {
      getQueryString = URLSearch.get('id') - 1;
    }

    document
      .getElementById('left')
      .setAttribute('href', `${path}?id=${getQueryString}`);
  });

  document.getElementById('right').addEventListener('click', () => {
    if (URLSearch == 0) {
      if (count == 1) {
        getQueryString = '1';
      } else {
        getQueryString = '2';
      }
    } else if (Number(URLSearch.get('id')) >= pageNum) {
      getQueryString = pageNum;
    } else {
      getQueryString = Number(URLSearch.get('id')) + 1;
    }
    document
      .getElementById('right')
      .setAttribute('href', `${path}?id=${getQueryString}`);
  });

  if (URLSearch.get('id') == null) {
    if (document.getElementById('pageButton1') !== null) {
      document.getElementById('pageButton1').style.border = '2px solid black';
    }
  } else {
    const query = 'pageButton' + URLSearch.get('id');
    document.getElementById(query).style.border = '2px solid black';
  }
};

pageButton();
