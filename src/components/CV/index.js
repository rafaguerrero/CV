import Education from '../Education';
import History from '../History';
import Personal from '../Personal';
import Skills from '../Skills';
import './styles.scss';

function CV() {
  return (
    <div className="cv">
      <div className="cv-right">
        <Personal/>
      </div>
      <div className="cv-left">
        <History />
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default CV;
