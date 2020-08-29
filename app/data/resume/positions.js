const positions = [{
  company: 'NYC Mayor\'s Office for Economic Opportunity',
  position: 'Software Engineer',
  link: 'https://www1.nyc.gov/site/opportunity/index.page',
  daterange: 'December 2018 - August 2020',
  points: [
  <span>Built <a href="https://screeningapidocs.cityofnewyork.us/">benefit screening API</a> that allows households to screen for potential program eligibility.</span>,
  <span>Developed application that allowed NYC Health and Hospitals staff to quickly issue paid sick leave documents to New Yorkers exhibiting symptoms of COVID-19.</span>,
  <span>Created data dashboard and ingestion pipeline to help NYC Mayor's Office of Operations monitor the <a href="https://www1.nyc.gov/assets/dsny/contact/services/COVID-19FoodAssistance.shtml">GetFood COVID-19 emergency food distribution</a> program.</span>,
  <span>Led engineering team in development of a Node.js/React application that collected information on city service locations, giving the city a <a href="https://www1.nyc.gov/site/opportunity/portfolio/social-service-location.page">comprehensive picture</a> of which services are delivered where, and how different services are funded across neighborhoods</span>,
  <span>Digitized internal <a href="https://www1.nyc.gov/site/rentfreeze/index.page">SCRIE and DRIE</a> rent freeze application for NYC Public Engagement Unit outreach staff</span>
  ],
}, {
  company: 'Uber',
  position: 'Software Engineer II',
  link: 'https://www.uber.com/',
  daterange: 'August 2016 - July 2018',
  points: [
    'Developed Go web service to charge eaters for eater-at-fault undelivered orders saving $8M annually.',
    'Redesigned UberEats data models and developed React Native UI to display new models in the restaurant tablet application.',
    'Updated driver app rating system, allowing drivers to include descriptive tags about their riders (e.g. tardy, impolite).',
    'Developed tool that detects when drivers do not receive on-trip notifications and subsequently re-wrote notification code to improve message reliability.'
],
}, 
{
  company: 'Twilio',
  position: 'Software Engineering Intern',
  link: 'https://www.twilio.com/',
  daterange: 'June 2015 - September 2015',
  points: [
    'Developed library that automatically generated application metrics from server logs.',
    'Developed application with AngularJS and Elasticsearch that allowed users to interface with Twilio audio recordings. Features included transcription search and word-by-word highlighting during recording playback.'

  ],
},
{
  company: 'Sokowatch',
  position: 'Software Engineering Intern',
  link: 'https://sokowatch.com/',
  daterange: 'June 2014 - December 2014',
  points: [
    'Developed web application that allowed remote health care workers in Central America and West Africa to track inventory via phone call and SMS'

  ],
}
];

export default positions;
