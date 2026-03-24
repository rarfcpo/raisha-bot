module.exports = function handler(req, res) {
  const key = process.env.ANTHROPIC_API_KEY;
  res.json({
    working: true,
    api_key_set: !!key,
    api_key_preview: key ? key.substring(0, 10) + '...' : 'NOT SET'
  });
};
