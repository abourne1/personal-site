// TODO: Add Athletic Skills, Office Skills,
// Data Science, Data Science, ML Engineering, DevOps... ?

const skills = [{
  title: 'Javascript',
  competency: 4,
  category: ['Web Development', 'Languages'],
},
{
  title: 'Node.JS',
  competency: 4,
  category: ['Web Development'],
},
{
  title: 'React',
  competency: 4,
  category: ['Web Development'],
},
{
  title: 'Bash',
  competency: 3,
  category: ['DevOps', 'Languages'],
},
{
  title: 'Amazon Web Services',
  competency: 5,
  category: ['Web Development', 'DevOps'],
},
{
  title: 'Nginx',
  competency: 3,
  category: ['Web Development', 'DevOps'],
},
{
  title: 'Heroku',
  competency: 2,
  category: ['Web Development', 'DevOps',],
},
{
  title: 'MongoDB/DynamoDB/NoSQL',
  competency: 3,
  category: ['Web Development', 'Databases'],
},
{
  title: 'PostgreSQL/SQLite3/SQL',
  competency: 4,
  category: ['Web Development', 'Databases', 'Languages'],
},
{
  title: 'Redis',
  competency: 3,
  category: ['Web Development', 'Databases'],
},
{
  title: 'Express.JS',
  competency: 3,
  category: ['Web Development'],
},
{
  title: 'Flask',
  competency: 5,
  category: ['Web Development', 'Python'],
},
{
  title: 'Django',
  competency: 3,
  category: ['Web Development', 'Python'],
},
{
  title: 'Git',
  competency: 4,
  category: ['DevOps'],
},
{
  title: 'Google Data Studio',
  competency: 3,
  category: ['DevOps', 'Data Science'],
},
{
  title: 'Numpy',
  competency: 3,
  category: ['Data Science', 'Data Science', 'Python'],
},
{
  title: 'Terraform',
  competency: 3,
  category: ['DevOps'],
},
{
  title: 'AWS Elastic Container Service',
  competency: 4,
  category: ['DevOps', 'Web Development'],
},
{
  title: 'AWS Lambda',
  competency: 5,
  category: ['DevOps', 'Web Development'],
},
{
  title: 'Docker',
  competency: 4,
  category: ['DevOps', 'Web Development'],
},
{
  title: 'Jupyter',
  competency: 3,
  category: ['Data Science', 'Python'],
},
{
  title: 'HTML + SASS/SCSS/CSS',
  competency: 4,
  category: ['Web Development', 'Languages'],
},
{
  title: 'Python',
  competency: 5,
  category: ['Languages', 'Python'],
},
{
  title: 'Ruby',
  competency: 4,
  category: ['Languages'],
},
{
  title: 'Golang',
  competency: 4,
  category: ['Languages'],
},
{
  title: 'Java',
  competency: 2,
  category: ['Languages'],
},
{
  title: 'GraphQL',
  competency: 2,
  category: ['Web Development', 'Databases'],
},
{
  title: 'Pandas',
  competency: 4,
  category: ['Data Science', 'Data Science', 'Python'],
},
{
  title: 'Scikit-Learn',
  competency: 3,
  category: ['Data Science', 'Data Science', 'Python'],
},
{
  title: 'Spark',
  competency: 2,
  category: ['Data Science', 'Data Science'],
}
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
