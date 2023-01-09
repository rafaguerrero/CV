import Entry from '../Entry';
import Company from '../Company';
import './styles.scss';
import Title from '../Title';

function History() {
  return (
    <div className="history">
      <Title>Work History</Title>

      <Company name='Shellock'>
        <Entry title='CTO & Co-Founder'
                date='2020 - 2022'
                description={<>
                  Developing the solution from 0 to MVP. <br/>
                  Architecturing and implementing all the product features while leading the tech team.
                </>}/>
      </Company>

      <Company name='Marfeel'>
        <Entry title='Principal Solutions Architect (BCN & NY)'
                date='Sep 2018 - Feb 2021'
                description={<>
                  Responsible for all Marfeel client's customizations and their correct configurations inside the Marfeel platform.
                </>}/>
        
        <Entry title='Tech Lead (BCN)'
                date='Jun 2016 - Sep 2018'
                description={<>
                  Leading the team responsible for solving the problems related to existing customers.<br/>
                  Developing the most complext implementations.
                </>}/>
        
        <Entry title='Full-stack Developer (BCN)'
                date='Jan 2013 - Jun 2016'
                description={<>
                  Developing features inside Marfeel for all our clients involving both Front and BackEnd.
                </>}/>
      </Company>

      <Company name='“YouTest” App'>
        <Entry title='Creator'
                date='2012'
                description={<>
                  Creation of an app for student selfevaluation. <br/>
                  Application sold to Metropolia University of Applied Sciences.
                </>}/>
      </Company>

      <Company name='Kopelia'>
        <Entry title='Junior FrontEnd Developer'
                date='2008 - 2013'
                description={<>
                  Creator of content and developer of small functionalities via CMS plugins and javascript.
                </>}/>
      </Company>
    </div>
  );
}

export default History;
