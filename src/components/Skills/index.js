import Title from '../Title';
import SkillsCloud from './Cloud';
import './styles.scss';

function Skills() {
  return (
    <div className='skills'>
      <Title>Skills</Title>

      <SkillsCloud title='Programming Languajes' names={[
        'HTML', 'JavaScript', 'Java', 'C', 'Mongo',
        'CSS', 'Typescript', 'PHP', 'C++', 'SQL',
        'SASS', 'AMP', 'Python', 'C#'
      ]}/>

      <SkillsCloud title='Frameworks' columns={4} names={[
        'ReactJS', 'Jest', 'PWA', 'Spring',  
        'Express', 'jUnit', 'Push Not', 'Web Crawlers'
      ]}/>

      <SkillsCloud title='Infrastructure' columns={3} names={[
        'GCP', 'Node', 'Jenkings',
        'AWS', 'Nginx', 'Git' , 
        'Serverless Architecture', 'Tomcat', 'Bash', 
        'Wordpress', 'Unix'
      ]}/>

      <SkillsCloud title='Soft Skils' columns='3' names={[
        'Scrum', 'Agile methodologies', 'Team Lead',
        'Project Management', 'Public Speaking', 'Mentoring'
      ]}/>
    </div>
  );
}

export default Skills;
