import React from 'react';
import './portfoliostyle.css';

function portfolio() {
  return (
    <>
      <div className='container' id='container'>
        <div className='intro'>
          <h1 className='head'>Muhammad Ammar Alam</h1>
          <h3>Full Stack Developer</h3>
          {/* <ul>
            <li>
              Email: <span className='email'>imammar1997@gmail.com</span>
            </li>
            <li>Contact: +971 50 178 8258</li>
            <li>Location: Dubai, United Arab Emirates</li>
          </ul> */}
          <img src='/images/Ammar AZ- 900 Badge.png' alt='' />
          <p className='summary'>
            Agile Software Engineer talented at contributing to multi-team
            development projects. Collaborative designer of exceptionally useful
            solutions and perfectly customized products. Knowledgeable in
            programming environments ranging from ASP.NET to MERN Stack and
            Power BI.
          </p>
          <br />
        </div>
        <div className='tech-skills'>
          <h3>Technical Skills</h3>
          <hr />
          <ul>
            <li>ASP.Net MVC</li>
            <li>SQL SERVER</li>
            <li>C#</li>
            <li>Data Visualization by Power BI</li>
            <li>ExpressJs</li>
            <li>ReactJs</li>
            <li>RESTful API's</li>
            <li>Github and Gitbash</li>
          </ul>
        </div>
        <br />
        <div className='experience'>
          <h3>WORK EXPERIENCE</h3>
          <hr />
          <h4>Software Engineer</h4>
          <p>
            Siemcom Telecommunications LLC (June, 2018 – July, 2021) <br />
            Job Duty
          </p>
          <ul>
            <li>
              Managing the complete software development process from conception
              to deployment.
            </li>
            <li>
              Maintaining and upgrading the software following deployment.
            </li>
            <li>
              Managing the end-to-end life cycle for the production of software
              and applications.
            </li>
            <li>
              Overseeing and guiding the analyzing, writing, building and
              deployment of software.
            </li>
            <li>
              Overseeing the automatic testing and providing feedback to
              management during the development process.
            </li>
            <li>
              Modifying and testing changes to previously developed programs.
            </li>
            <li>
              Working with Microsoft Entity Framework and SQL Server to maintain
              and enhance data Framework.
            </li>
            <li>
              Define Development tasks and provides time estimates to aid in
              scheduling. Monitors progress against task estimates to provide
              status.
            </li>
            <li>
              Developing and maintaining web-based applications written in
              traditional ASP.net and MVC 5 as well as heavily utilizing Windows
              Workflow Foundation.
            </li>
            <li>
              Designs, develops and maintains a set of enterprise className web
              applications in ASP.NET technologies- both frontend and backend
              (jQuery, AJAX, ASP.NET, HTML, CSS, C#).
            </li>
          </ul>
          <br />
          <h4>Internship</h4>
          <p>
            Siemcom Telecommunications LLC (May, 2018 – July, 2021) <br />
            Job Duty
          </p>
          <ul>
            <li>Handling IT equipment such as servers, sound controls.</li>
            <li>Organizing campus-based events.</li>
            <li>Member ID: 94500596</li>
          </ul>
        </div>
        <br />
        <h3>SKILLS</h3>
        <hr />
        <div className='skills'>
          <ul>
            <li>
              Data visualization with Power BI. Generating Reports, visualizing
              data based on results provided by PowerBI.
            </li>
            <li>Can create robust user-friendly web front end pages.</li>
            <li>Familiar with Microsoft IIS Server.</li>
            <li>
              Familiar with WCF service client calls for data acquisition.
            </li>
            <li>Debug skills for HTML, JavaScript and C# code.</li>
            <li>SQL debug skills.</li>
            <li>Understand cursors and temporary tables.</li>
            <li>Understand database normalization.</li>
            <li>Understand Inner and Outer joins to tables.</li>
          </ul>
        </div>
        <br />
        <h3>EDUCATION</h3>
        <hr />
        <div className='education'>
          <h3>Bachelors of Computer Science (BSCS)</h3>
          <p>
            Szabist - Shaheed Zulfikar Ali Bhutto Institute of Science and
            Technology (September, 2016 – July, 2020)
          </p>
          <br />
          <h3>Intermediate Computer Science – ICS</h3>
          <p>
            Pakistan Higher Secondary School (September, 2009 – July, 2016).
          </p>
        </div>
        <br />
        <h3>PERSONAL PROJECTS</h3>
        <hr />
        <div className='projects'>
          <h4>DevConnector</h4>
          <p>(March, 2021 – May, 2021)</p>
          <ul>
            <li>
              MERN stack (Mongoose, ExpressJS, ReactJS and NodeJS) based
              project. Connecting the developers from all over the world.
            </li>
            <li>Deployment on Heroku server.</li>
            <li>
              Project Link:{' '}
              <a
                href='https://afternoon-lake-19718.herokuapp.com/.'
                target='_blank'
              >
                DevConnector (Click to view)
              </a>
            </li>
            <li>
              Git Repository:{' '}
              <a
                href='https://github.com/venom-afk/Social-network-for-Developers/tree/master.'
                target='_blank'
              >
                DevConnector Repository (Click to view)
              </a>
            </li>
          </ul>
        </div>
        <br />
        <h3>CERTIFICATIONS</h3>
        <hr />
        <div className='certifications'>
          <h4>AZ-900 Microsoft Certified Azure Fundamentals</h4>
          <p>November, 2020 - Completed</p>
          <p>Certification Number: H579-1970</p>
        </div>
        <br />
        <br />
        <h3 className='contact'>Contact Me</h3>
        <hr />
        <div className='contact-me'>
          <ul>
            <li>
              Email: <span className='email'>imammar1997@gmail.com</span>
            </li>
            <li>Contact: +971 50 178 8258</li>
            <li>Location: Dubai, United Arab Emirates</li>
          </ul>
        </div>
        <br />
        <hr />
        <div className='pdf'>
          <a href='/content/Ammar Resume.pdf' target='_blank'>
            Download PDF Version
          </a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default portfolio;
