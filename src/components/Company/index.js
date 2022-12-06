import './styles.scss';

function Company(props) {
  return (
    <div className="company">
      <h3>{props.name}</h3>
      <ul>
        { props.children }
      </ul>
    </div>
  );
}

export default Company;
