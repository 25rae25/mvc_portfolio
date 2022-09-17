axios.get('/health', (req, res) => {
  const pageCount = Math.ceil(posts.length / 10);
  let page = parseInt(req.query.p);
  if (!page) {
    page = 1;
  }
  if (page > pageCount) {
    page = pageCount;
  }
  res.json({
    page: page,
    pageCount: pageCount,
    posts: posts.slice(page * 10 - 10, page * 10),
  });
});
