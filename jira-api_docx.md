

curl --request POST \
  --url 'https://pmcanalytics-tracking.atlassian.net/rest/api/3/issue/bulkfetch' \
  --user 'enzo.lopez@pmcanalytics.com:TOKEN' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{
  "expand": [
    "names"
  ],
  "fields": [
    "summary",
    "project",
    "assignee"
  ],
  "fieldsByKeys": false,
  "issueIdsOrKeys": [
    "EX-1",
    "EX-2",
    "10005"
  ],
  "properties": []
}'

// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

const bodyData = `{
  "expand": [
    "names"
  ],
  "fields": [
    "summary",
    "project",
    "assignee"
  ],
  "fieldsByKeys": false,
  "issueIdsOrKeys": [
    "EX-1",
    "EX-2",
    "10005"
  ],
  "properties": []
}`;

fetch('https://your-domain.atlassian.net/rest/api/3/issue/bulkfetch', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'email@example.com:<api_token>'
    ).toString('base64')}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: bodyData
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));



# Install additional dependencies
npm install axios dotenv express cors


{
  // ... existing content ...
  "dependencies": {
    "@react-pdf/renderer": "^4.1.5",
    "axios": "^1.6.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.1",
    "express": "^4.18.2",
    "cra-template": "1.2.0",
    "lucide-react": "^0.468.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^4.2.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "node server/index.js",
    "dev": "concurrently \"npm run server\" \"npm start\""
  }
  // .

environement file 

  JIRA_EMAIL=enzo.lopez@pmcanalytics.com
JIRA_API_TOKEN=your_api_token
JIRA_DOMAIN=pmcanalytics-tracking.atlassian.net
JIRA_PROJECT_KEY=your_project_key
PORT=5000


src/components/ProjectDashboard.jsx:

JAVASCRIPT

Collapse
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { fetchProjects } from '../services/api';

const ProjectDashboard = () => {
  const [projects, setProjects] = useState({
    currentProjects: [],
    completedProjects: [],
    futureProjects: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Rest of your existing component code...
};

export default ProjectDashboard;
To run the project:
BASH

# Terminal 1 - Start the server
npm run server

# Terminal 2 - Start the React app
npm start
The application will now:

Fetch issues from Jira when accessing the dashboard
Transform them into the format your dashboard expects
Categorize them based on status
Display them in your existing UI components
Remember to:

Replace the Jira field IDs (customfield_*) with the correct ones from your Jira instance
Add proper error handling and loading states
Implement caching if needed
Add authentication if required
Consider implementing WebSocket for real-time updates
Would you like me to elaborate on any particular aspect or provide additional implementation details?