const express = require('express');
const router = express.Router();
const jiraMiddleware = require('../middleware/jiraMiddleware');

router.get('/projects', jiraMiddleware, (req, res) => {
  res.json(req.jiraIssues);
});

module.exports = router;