import React, { useState } from 'react';
import { useRef } from 'react';
import '../public/css/PC.css';



export default function PC( {projects, systemText} ) {
  let [locale, setLocale] = useState(document.documentElement.lang);
  let text = systemText[locale];
  let CTKProject = projects[locale];

  const changeLocale = (language) => {
    setLocale(language);
    document.documentElement.lang = language;
    text = systemText[language];
    CTKProject = projects[language];
  }

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
    <div className='pc'>
      <div className='page'>
        <div className='contents'>
          <div className='localeArea'>
            <div className='inner'>
              <a href={ (e) => e.preventDefault() } onClick={ () => changeLocale('ko') } className={ locale === 'ko' ? 'active' : '' }>KO</a>
              <a href={ (e) => e.preventDefault() } onClick={ () => changeLocale('en') } className={ locale === 'en' ? 'active' : '' }>EN</a>
            </div>
          </div>
          <div className='leftArea'>
            <div className='header'>
              <div className='myName'>
                <h1>{ text.myName }</h1>
                <h2>{ text.frontEndDevloper }</h2>
                <p>{ 'Front-end Deveoper with 2 years in a cosmectic platform. Developed 4 websites, which are 2 platforms, admin and HQ site.' }</p>
              </div>
              <div className="leftNavigation">
                <a href={ (e) => e.preventDefault() } onClick={ () => changeScroll(1) }>{ text.profile }</a>
                <a href={ (e) => e.preventDefault() } onClick={ () => changeScroll(2) }>{ text.workExperience }</a>
                <a href={ (e) => e.preventDefault() } onClick={ () => changeScroll(3) }>{ text.skills }</a>
                <a href={ (e) => e.preventDefault() } onClick={ () => changeScroll(4) }>{ text.study }</a>
                {/* <a href={ (e) => e.preventDefault() } onClick={ () => changeScroll(5) }>{ systemText.awardsProjects }</a> */}
              </div>
            </div>
          </div>
          <div className='rightArea'>
            {/* Profile */}
            <div className='each' ref={ location1Ref }>
              <div className='mainTitle'>{ text.profile }</div>
              <div className='eachInfo'>
                <div className='eachTitle'>
                  <p>{ text.address }</p>
                </div>
                <div className='eachDesc'>
                  <p>{ text.myAddress }</p>
                </div>
              </div>
              <div className='eachInfo'>
                <div className='eachTitle'>
                  <p>{ text.phone }</p>
                </div>
                <div className='eachDesc'>
                  <p>{ text.myPhone }</p>
                </div>
              </div>
              <div className='eachInfo'>
                <div className='eachTitle'>
                  <p>{ text.email }</p>
                </div>
                <div className='eachDesc'>
                  <p>{ text.myEmail }</p>
                </div>
              </div>
            </div>
            {/* Work Experience */}
            <div className='each' ref={ location2Ref }>
              <div className='mainTitle'>{ text.workExperience }</div>
              <div className='eachInfo'>
                <div className='eachTitle'>
                  <a href='https://ctkclip.com' target='_blank' rel='noreferrer'>{ text.ctk }</a>
                </div>
                <div className='eachDesc'>
                  <p>{ text.ctkDate }</p>
                  <p>{ text.ctkRole }</p>
                  <p dangerouslySetInnerHTML={{ __html: text.ctkDescription }}></p>
                  <div className='linkContent' onMouseLeave={ () => inactiveSkills() }>
                    <div className='eachLink' onMouseOver={ () => activeSkills(1) }>
                      <img src={ require('../images/CompanyLogo1.jpg') } alt={ text.ctkCosmetics } />
                      <div className='hoverChange'>
                        <a href={ (e) => e.preventDefault() } onClick={ () => openPopup(1) }>{ text.viewProjects }</a>
                        <a href='https://ctkcosmetics.com' target='_blank' rel='noreferrer'>{ text.goToTheSite }</a>
                      </div>
                    </div>
                    <div className='eachLink' onMouseOver={ () => activeSkills(2) }>
                      <img src={ require('../images/CompanyLogo2.svg').default } alt={ text.ctkClip } />
                      <div className='hoverChange'>
                        <a href={ (e) => e.preventDefault() } onClick={ () => openPopup(2) }>{ text.viewProjects }</a>
                        <a href='https://ctkclip.com' target='_blank' rel='noreferrer'>{ text.goToTheSite }</a>
                      </div>
                    </div>
                    <div className='eachLink' onMouseOver={ () => activeSkills(3) }>
                      <img src={ require('../images/CompanyLogo2.svg').default } alt={ text.ctkClip + ' ' + text.forPartner } />
                      <p>{ text.forPartner }</p>
                      <div className='hoverChange'>
                        <a href={ (e) => e.preventDefault() } onClick={ () => openPopup(3) }>{ text.viewProjects }</a>
                        <a href='https://partner.ctkclip.com' target='_blank' rel='noreferrer'>{ text.goToTheSite }</a>
                      </div>
                    </div>
                    <div className='eachLink' onMouseOver={ () => activeSkills(4) }>
                      <img src={ require('../images/CompanyLogo2.svg').default } alt={ text.ctkClip + ' ' + text.forAdmin } />
                      <p>{ text.forAdmin }</p>
                      <div className='hoverChange'>
                        <a href={ (e) => e.preventDefault() } onClick={ () => openPopup(4) }>{ text.viewProjects }</a>
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
                    <span className='skill project1 project2 project3 project4'>Docker</span>
                  </p>
                </div>
              </div>
              <div className='eachInfo'>
                <div className='eachTitle'>
                  <a href='https://innerbottle.com' target='_blank' rel='noreferrer'>{ text.innerbottle }</a>
                </div>
                <div className='eachDesc'>
                  <p>{ text.innerbottleDate }</p>
                  <p>{ text.innerbottleRole }</p>
                  <p dangerouslySetInnerHTML={{ __html: text.innerbottleDescription }}></p>
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
              <div className='mainTitle'>{ text.skills }</div>
              <div className='eachInfo'>
                <div className='eachTitle'>
                  <p>{ text.frontEnd }</p>
                </div>
                <div className='eachDesc'>
                  <p>{ 'HTML, CSS, Javascript' }</p>
                  <p>{ 'jQuery, Bootstrap' }</p>
                  <p>{ 'vue.js, swiper.js, GSAP' }</p>
                </div>
              </div>
              <div className='eachInfo'>
                <div className='eachTitle'>
                  <p>{ text.backEnd }</p>
                </div>
                <div className='eachDesc'>
                  <p>{ 'PHP, Laravel, MySQL, Docker' }</p>
                </div>
              </div>
              <div className='eachInfo'>
                <div className='eachTitle'>
                  <p>{ text.others }</p>
                </div>
                <div className='eachDesc'>
                  <p>{ 'Gitlab, Slack' }</p>
                </div>
              </div>
            </div>
            {/* Study */}
            <div className='each' ref={ location4Ref }>
              <div className='mainTitle'>{ text.study }</div>
              <div className='eachInfo'>
                <div className='eachTitle'>
                  <p>{ text.kosmo }</p>
                </div>
                <div className='eachDesc'>
                  <p>{ text.kosmoDate }</p>
                  <p>{ text.kosmoDesc }</p>
                  <p>{ 'HTML, CSS, Javascript, Java, Spring, React, Android' }</p>
                </div>
              </div>
              <div className='eachInfo'>
                <div className='eachTitle'>
                  <p>{ text.hongik }</p>
                </div>
                <div className='eachDesc'>
                  <p>{ text.hongikDate }</p>
                  <p>{ text.hongikMajor }</p>
                  <p>{ text.hongikMinor }</p>
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
                CTKProject.map((project, key) => {
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
                CTKProject.map((project, key1) => {
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