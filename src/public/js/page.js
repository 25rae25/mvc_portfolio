router.get('/', async function (req, res) {
  // 1
  var page = Math.max(1, parseInt(req.query.page));
  var limit = Math.max(1, parseInt(req.query.limit));
  page = !isNaN(page) ? page : 1;
  limit = !isNaN(limit) ? limit : 10;

  var skip = (page - 1) * limit;
  var count = await Post.countDocuments({});
  var maxPage = Math.ceil(count / limit);
  var posts = await Post.find({})
    .populate('author')
    .sort('-createdAt')
    .skip(skip)
    .limit(limit)
    .exec();

  res.render('health/{id}', {
    posts: posts,
    currentPage: page,
    maxPage: maxPage,
    limit: limit,
  });
});
