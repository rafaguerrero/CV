import './styles.scss';

function Title(props) {
  return (
    <h3 className='title'>
      {props.children}
    </h3>
  );
}

export default Title;
