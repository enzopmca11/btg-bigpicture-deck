

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
