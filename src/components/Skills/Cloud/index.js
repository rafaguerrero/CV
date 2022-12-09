import './styles.scss';

function SkillsCloud(props) {
  const columns = props.columns || 5;
  let names = props.names;

  const groups = [];
  while(names.length > 0) {
    groups.push(names.slice(0, columns));
    names = names.slice(columns);
  }

  console.log("--------------");
  console.log(groups);
  console.log("--------------");

  return (
    <div className='skills-cloud'>
      <h3>{props.title}</h3>
      <table>
        { groups.map((group, index) => <tr key={`Row_${index}`}>
          {group.map(name => <td key={`${props.title}_${name}`}>
            <span className='skills-cloud-value'>{name}</span>
          </td>)}
        </tr>)}
      </table>
    </div>
  );
}

export default SkillsCloud;
