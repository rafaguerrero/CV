import './styles.scss';

function Personal() {
  return (
    <div className="personal">
      <div className='personal-photo-wrapper'>
        <img className='personal-photo' src='/assets/profile.png' alt='profile'/>
      </div>

      <h1 className='personal-name'>Rafael Guerrero Clemente</h1>

      <div className='personal-box'>
        <h2>Contact</h2>
        <p>C/ Hurtado 6 4o 4a ESC A, Barcelona, 08023, SPAIN</p>
        <p>+34 696 06 74 84</p>
        <p>rguerreroclemente@gmail.com</p>
        <p><a href="https://www.linkedin.com/in/rafagcl/">LinkedIn</a></p>
        <p><a href="https://github.com/rafaguerrero/">GitHub</a></p>
      </div>

      <div className="personal-box">
          <h2>Languages</h2>
          <p>Spanish - Native</p>
          <p>Catalan - Native</p>
          <p>English - Proficient</p>
      </div>
    
    </div>
  );
}

export default Personal;
