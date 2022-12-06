import './styles.scss';

function Entry(props) {
  return (
    <li className='entry'>
      <p className="entry-title">{props.title}</p>
      <p className="entry-date">{props.date}</p>
      <p className="entry-desc">{props.description}</p>
    </li>
  );
}

export default Entry;
