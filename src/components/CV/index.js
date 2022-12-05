import History from '../History';
import Personal from '../Personal';
import './styles.scss';

function CV() {
  return (
    <div className="cv">
      <div className="cv-right">
        <Personal/>
      </div>
      <div className="cv-left">
        <History />
      </div>
    </div>
  );
}

export default CV;
