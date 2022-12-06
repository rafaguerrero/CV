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
                  Creation of an app for student selfevaluation. <br/>
                  Application sold to Metropolia University of Applied Sciences.
                </>}/>
      </Company>

      <Company name='Marfeel'>
        <Entry title='Principal Solutions Architect (BCN & NY)'
                date='Sep 2018 - Mar 2021'
                description={<>
                  Responsible for all new client customizations and their correct configurations inside the Marfeel platform.
                </>}/>

        <Entry title='Full-stack Developer (BCN & NY)'
                date='Jan 2013 - Mar 2021'
                description={<>
                  Developing features inside Marfeel for all our clients involving both Front and BackEnd.
                </>}/>
        
        <Entry title='Project Owner (NY)'
                date='Sep 2018 - Jun 2020'
                description={<>
                  Responsible for the activation of all Marfeel US and LATAM clients.
                  Defining the project, managing the tech teams priorities and providing support to live clients during the first weeks of activation.
                </>}/>
        <Entry title='Brand Ambassador (NY)'
                date='Sep 2018 - Jun 2020'
                description={<>
                  Representing Marfeel in several events including presentations at Google and Prebid.org.  
                </>}/>
        <Entry title='Tech Lead (BCN)'
                date='Jun 2016 - Sep 2018'
                description={<>
                  Responsible for the solution of tech problems for the existing clients. 
                </>}/>
        <Entry title='Project Manager (BCN)'
                date='Jun 2016 - Sep 2018'
                description={<>
                  Managing the team providing support to our existing clients.  
                </>}/>
        <Entry title='AdTech Specialist (BCN)'
                date='Jan 2015 - Jun 2016'
                description={<>
                  Responsible for communication and implementation of several adnetworks inside the Marfeel platform. 
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
                  Creator of content and developer of small functionalities 
                  via CMS plugins and javascript.
                </>}/>
      </Company>
    </div>
  );
}

export default History;
