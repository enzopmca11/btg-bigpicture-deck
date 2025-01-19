const axios = require('axios');
const JiraService = require('../services/JiraService');

const jiraMiddleware = async (req, res, next) => {
  try {
    const jiraService = new JiraService();
    const issues = await jiraService.fetchIssues();
    const categorizedIssues = jiraService.categorizeIssues(issues);
    
    req.jiraIssues = categorizedIssues;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = jiraMiddleware;