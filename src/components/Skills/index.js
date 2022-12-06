import Title from '../Title';
import SkillsCloud from './Cloud';
import './styles.scss';

function Skills() {
  return (
    <div className='skills'>
      <Title>Skills</Title>
                    
      <SkillsCloud title='Web Development' names={[
        'HTML', 'CSS', 'SASS',
        'JavaScript', 'ES6', 'jQuery',
        'React', 'Node', 'PhantomJS',
        'PHP', 'JSP', 'Jasmine',
        'Typescript', 'RequireJS'
      ]}/>
      <SkillsCloud title='Programming' names={[
        'Java', 'jUnit', 'Spring',
        'C', 'C++', 'C#',
        'Mongo', 'SQL', 'Cordova',
        'Bash', 'Unix', 'Python',
        'Nginx', 'Tomcat'
      ]}/>
      <SkillsCloud title='Tooling' names={[
        'Jenkings', 'AWS', 'Git',
        'GitHub', 'Wordpress'
      ]}/>
      <SkillsCloud title='Soft Skils' columns='3' names={[
        'Scrum', 'Agile methodologies', 'Team Lead',
        'Project Management', 'Public Speaking'  
      ]}/>
    </div>
  );
}

export default Skills;
