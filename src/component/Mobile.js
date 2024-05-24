import React from 'react';
import { useRef } from 'react';
import '../public/css/Mobile.css';

export default function Mobile( {projects, systemText} ) {
    const location1Ref = useRef();
    const location2Ref = useRef();
    const location3Ref = useRef();
    const location4Ref = useRef();
    // const location5Ref = useRef();
  
    const popup = useRef(null);
  
    const changeScroll = (location) => {
      if (location === 1) {
        location1Ref.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (location === 2) {
        location2Ref.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (location === 3) {
        location3Ref.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (location === 4) {
        location4Ref.current?.scrollIntoView({ behavior: 'smooth' });
      }
      // else if (location === 5) {
      //   location5Ref.current?.scrollIntoView({ behavior: 'smooth' });
      // }
    }
  
    const activeSkills = (project) => {
      const skills = document.getElementsByClassName('skill');
  
      for (let i = 0 ; i < skills.length ; i++) {
        if (skills[i].classList.contains('project' + project)) {
          skills[i].classList.add('active');
        } else {
          skills[i].classList.remove('active');
        }
      }
    };
  
    const inactiveSkills = () => {
      const skills = document.getElementsByClassName('skill');
      for (let i = 0 ; i < skills.length ; i++) {
        skills[i].classList.remove('active');
      }
    };
  
    const openPopup = (popupProject) => {
      // Dimmed
      let background = document.querySelector('.page');
      if (!(background.classList.contains('dimmed'))) { background.classList.add('dimmed'); }
  
      // Open Popup
      let popup = document.querySelector('.popup .inner');
      if (!(popup.classList.contains('open'))) { popup.classList.add('open'); }
  
      // Activate the Project
      let projectNav = document.querySelectorAll('.popup .nav a');
      let projectContent = document.querySelectorAll('.popup .projects .eachProject');
  
      for (let i = 0 ; i < projectNav.length ; i++) {
        if (projectNav[i].classList.contains('ctkProject' + popupProject)) {
          projectNav[i].classList.add('active');
        } else {
          projectNav[i].classList.remove('active');
        }
      }
  
      for (let j = 0 ; j < projectContent.length ; j++) {
        if (projectContent[j].classList.contains('ctkProject' + popupProject)) {
          projectContent[j].classList.add('active');
        } else {
          projectContent[j].classList.remove('active');
        }
      }
    };
  
    const closePopup = () => {
      let background = document.querySelector('.page');
      if (background.classList.contains('dimmed')) { background.classList.remove('dimmed'); }
      let popup = document.querySelector('.popup .inner');
      if (popup.classList.contains('open')) { popup.classList.remove('open'); }
    }
  
    return (
      <div className='mobile'>
        <div className='page'>
          <div className='contents'>
            <div className='leftArea'>
              <div className='header'>
                <div className='myName'>
                  <h1>{ systemText.en.myName }</h1>
                  <h2>{ systemText.en.frontEndDevloper }</h2>
                  <p>{ 'Front-end Deveoper with 2 years in a cosmectic platform. Developed 4 websites, which are 2 platforms, admin and HQ site.' }</p>
                </div>
                <div className="leftNavigation">
                  <a href={ (e) => e.preventDefault() } onClick={ () => changeScroll(1) }>{ systemText.en.profile }</a>
                  <a href={ (e) => e.preventDefault() } onClick={ () => changeScroll(2) }>{ systemText.en.workExperience }</a>
                  <a href={ (e) => e.preventDefault() } onClick={ () => changeScroll(3) }>{ systemText.en.skills }</a>
                  <a href={ (e) => e.preventDefault() } onClick={ () => changeScroll(4) }>{ systemText.en.study }</a>
                  {/* <a href={ (e) => e.preventDefault() } onClick={ () => changeScroll(5) }>{ systemText.en.awardsProjects }</a> */}
                </div>
              </div>
            </div>
            <div className='rightArea'>
              {/* Profile */}
              <div className='each' ref={ location1Ref }>
                <div className='mainTitle'>{ systemText.en.profile }</div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <p>{ 'Address' }</p>
                  </div>
                  <div className='eachDesc'>
                    <p>{ 'Seodaemun-gu, Seoul' }</p>
                  </div>
                </div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <p>{ 'Phone' }</p>
                  </div>
                  <div className='eachDesc'>
                    <p>{ '010-9164-1201' }</p>
                  </div>
                </div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <p>{ 'Email' }</p>
                  </div>
                  <div className='eachDesc'>
                    <p>{ 'y.junh0y@gmail.com' }</p>
                  </div>
                </div>
              </div>
              {/* Work Experience */}
              <div className='each' ref={ location2Ref }>
                <div className='mainTitle'>{ systemText.en.workExperience }</div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <a href='https://ctkclip.com' target='_blank' rel='noreferrer'>{ 'CTK' }</a>
                  </div>
                  <div className='eachDesc'>
                    <p>{ '04/2022 - 04/2024' }</p>
                    <p>{ 'Front End Developer / Assistant Manager' }</p>
                    <p>{ 'Developed 4 sites and Based on PHP(Laravel), vue.js in case of CTKCLIP PARTNER.' }</p>
                    <div className='linkContent' onMouseLeave={ () => inactiveSkills() }>
                      <div className='eachLink' onMouseOver={ () => activeSkills(1) }>
                        <div className='imageArea'>
                            <img src={ require('../images/CompanyLogo1.jpg') } alt={ 'CTK Cosmetics'} />
                        </div>
                        <div className='hoverChange'>
                          <a href={ (e) => e.preventDefault() } onClick={ () => openPopup(1) }>View projects</a>
                          <a href='https://ctkcosmetics.com' target='_blank' rel='noreferrer'>Go to the site</a>
                        </div>
                      </div>
                      <div className='eachLink' onMouseOver={ () => activeSkills(2) }>
                        <div className='imageArea'>
                            <img src={ require('../images/CompanyLogo2.svg').default } alt={ 'innerbottle'} />
                        </div>
                        <div className='hoverChange'>
                          <a href={ (e) => e.preventDefault() } onClick={ () => openPopup(2) }>View projects</a>
                          <a href='https://ctkclip.com' target='_blank' rel='noreferrer'>Go to the site</a>
                        </div>
                      </div>
                      <div className='eachLink' onMouseOver={ () => activeSkills(3) }>
                        <div className='imageArea'>
                            <img src={ require('../images/CompanyLogo2.svg').default } alt={ 'innerbottle'} />
                            <p>for Partner</p>
                        </div>
                        <div className='hoverChange'>
                          <a href={ (e) => e.preventDefault() } onClick={ () => openPopup(3) }>View projects</a>
                          <a href='https://partner.ctkclip.com' target='_blank' rel='noreferrer'>Go to the site</a>
                        </div>
                      </div>
                      <div className='eachLink' onMouseOver={ () => activeSkills(4) }>
                        <div className='imageArea'>
                            <img src={ require('../images/CompanyLogo2.svg').default } alt={ 'innerbottle'} />
                            <p>for Admin</p>
                        </div>
                        <div className='hoverChange'>
                          <a href={ (e) => e.preventDefault() } onClick={ () => openPopup(4) }>View projects</a>
                        </div>
                      </div>
                    </div>
                    <p className='skillSpan'>
                      <span className='skill project1 project2 project3 project4'>HTML</span>
                      <span className='skill project1 project2 project3 project4'>CSS</span>
                      <span className='skill project1 project2 project3 project4'>Javascript</span>
                    </p>
                    <p className='skillSpan'>
                      <span className='skill project3'>vue.js</span>
                      <span className='skill project1 project2 project4'>jQuery</span>
                      <span className='skill project4'>Bootstrap</span>
                      <span className='skill project1 project2 project3'>GSAP</span>
                      <span className='skill project1 project2'>swiper.js</span>
                    </p>
                    <p className='skillSpan'>
                      <span className='skill project1 project2 project3 project4'>PHP</span>
                      <span className='skill project1 project2 project3 project4'>Laravel</span>
                      <span className='skill project1 project2 project3 project4'>MySQL</span>
                    </p>
                  </div>
                </div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <a href='https://innerbottle.com' target='_blank' rel='noreferrer'>{ 'Innerbottle' }</a>
                  </div>
                  <div className='eachDesc'>
                    <p>{ '06/2019 - 06/2021' }</p>
                    <p>{ 'Engineer / Researcher' }</p>
                    <p>{ 'Researched, devloped and controled quality to cosmetic packages.' }</p>
                    <p className='skillSpan'>
                      <span>SolidWorks</span>
                      <span>AutoCad 2D</span>
                      <span>Fusion 360</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Skills */}
              <div className='each' ref={ location3Ref }>
                <div className='mainTitle'>{ systemText.en.skills }</div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <p>{ 'Front-end' }</p>
                  </div>
                  <div className='eachDesc'>
                    <p>{ 'HTML, CSS, Javascript' }</p>
                    <p>{ 'jQuery, Bootstrap' }</p>
                    <p>{ 'vue.js, swiper.js, GSAP' }</p>
                  </div>
                </div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <p>{ 'Back-end' }</p>
                  </div>
                  <div className='eachDesc'>
                    <p>{ 'PHP, Laravel, MySQL' }</p>
                  </div>
                </div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <p>{ 'Others' }</p>
                  </div>
                  <div className='eachDesc'>
                    <p>{ 'Gitlab, Slack' }</p>
                  </div>
                </div>
              </div>
              {/* Study */}
              <div className='each' ref={ location4Ref }>
                <div className='mainTitle'>{ systemText.en.study }</div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <p>{ 'KOSMO' }</p>
                  </div>
                  <div className='eachDesc'>
                    <p>{ '2021.09 - 2022.03' }</p>
                    <p>{ 'Learned programming skills and developed some projects.' }</p>
                    <p>{ 'HTML, CSS, Javascript, Java, Spring, React, Android' }</p>
                  </div>
                </div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <p>{ 'Hongik University' }</p>
                  </div>
                  <div className='eachDesc'>
                    <p>{ '2010.03 - 2017.02' }</p>
                    <p>{ 'Bachelor degree' }</p>
                    <p>{ 'Mechanical System Design Engineering' }</p>
                    <p>{ '(minor) Ceramic & Class' }</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer'>
                <div className='footerLink'>
  
                </div>
                <div className='footerText'>
                  { 'ⓒ All copyright reserved' }
                </div>
              </div>
          </div>
          <div className='popup' ref={ popup } onClick={ (e) => e.target === popup.current ? closePopup() : e.preventDefault() }>
            <div className='inner'>
              <div className='close'>
                <a href={ (e) => e.preventDefault() } onClick={ () => closePopup() }>×</a>
              </div>
              <div className='nav'>
                {
                  projects.map((project, key) => {
                    return (
                      <a
                        href={ (e) => e.preventDefault() }
                        className={ `ctkProject${ key + 1 }` }
                        onClick={ () => openPopup(key + 1) }
                        key={ `ctkProject${ key + 1 }` }
                      >
                        { project.site }
                      </a>
                    )
                  })
                }
              </div>
              <div className='projects'>
                {
                  projects.map((project, key1) => {
                    const eachProject = project.contents;
                    return (
                      <div className={`eachProject ctkProject${ key1 + 1 }`} key={ `CTKEachContent${ key1 }` }>
                        {
                          eachProject.map((content, key2) => {
                            return (
                              <ul key={ `CTKEachContent${ key1 + '-' + key2 }` }>
                                <li>{ content.title }</li>
                                <li>{ content.period }</li>
                                <li>{ content.languages }</li>
                                <li>{ content.role }</li>
                                <li>{ content.contribution }</li>
                                <li dangerouslySetInnerHTML={{ __html: content.description }}></li>
                              </ul>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
