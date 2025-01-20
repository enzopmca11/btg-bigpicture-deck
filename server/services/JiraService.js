const axios = require('axios');
const config = require('../config/jiraConfig');

class JiraService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: `https://${config.domain}/rest/api/3`,
      headers: {
        'Authorization': `Basic ${config.auth}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  async fetchIssues() {
    try {
      const jql = `project = "${config.projectKey}" AND issuetype in (Story, Epic) ORDER BY created DESC`;
      
      const response = await this.axiosInstance.post('/search', {
        jql,
        maxResults: 100,
        fields: [
          'summary',
          'description',
          'status',
          'priority',
          'assignee',
          'created',
          'updated',
          'duedate',
          'customfield_10014', // Story points
          'parent',
          'labels',
          'components',
          'customfield_10015', // Sprint
          'customfield_10016', // Epic Link
        ]
      });

      return this.transformIssues(response.data.issues);
    } catch (error) {
      console.error('Error fetching Jira issues:', error);
      throw error;
    }
  }

  transformIssues(issues) {
    return issues.map(issue => ({
      id: issue.id,
      key: issue.key,
      category: issue.fields.components[0]?.name || 'Uncategorized',
      name: issue.fields.summary,
      status: issue.fields.status.name,
      priority: issue.fields.priority.name,
      priorTwoWeeks: '0%', // You'll need to calculate this
      upcomingTwoWeeks: '0%', // You'll need to calculate this
      commercialHours: issue.fields.customfield_10014 || 0,
      totalCost: '-',
      comments: issue.fields.description
        ? issue.fields.description.content[0].content[0].text
        : ''
    }));
  }

  categorizeIssues(issues) {
    return {
      currentProjects: issues.filter(issue => 
        ['In Progress', 'In Review'].includes(issue.status)
      ),
      completedProjects: issues.filter(issue => 
        ['Done', 'Closed'].includes(issue.status)
      ),
      futureProjects: issues.filter(issue => 
        ['Backlog', 'Open'].includes(issue.status)
      )
    };
  }
}

module.exports = JiraService;