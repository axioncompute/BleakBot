const memoryComments = {};

export function getComments(req, res) {
  const { slug } = req.query;
  if (!slug) return res.status(400).json({ error: 'Missing slug query parameter' });
  return res.json({ comments: memoryComments[slug] || [] });
}

export function createComment(req, res) {
  const { slug, author, location, text, date } = req.body;
  if (!slug || !author || !text) {
    return res.status(400).json({ error: 'slug, author, and text are required' });
  }
  const comment = {
    id: 'srv-' + Date.now(),
    author,
    location: location || 'US Homeowner',
    date: date || new Date().toLocaleDateString('en-US'),
    text,
  };
  if (!memoryComments[slug]) memoryComments[slug] = [];
  memoryComments[slug].push(comment);
  return res.status(201).json({ comment });
}
