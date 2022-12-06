import Title from '../Title';
import './styles.scss';

function Education() {
  return (
    <div className='education'>
      <Title>Education</Title>
                    
      <div class="education-entry">
          <p><b>Bachelor Degree in Informatics Engineering</b></p>
          <p class="location"><b>Facultad de Informática de Barcelona</b></p>
          <p>2008 - 2013</p>
      </div>
      <div class="education-entry">
          <h3>Exchange Student Program (ERASMUS)</h3>
          <h3 class="location">Metropolia University of Applied Sciences in Espoo, Finland</h3>
          <p>2012</p>
      </div>
    </div>
  );
}

export default Education;
