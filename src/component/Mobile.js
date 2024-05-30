import React, { useState } from 'react';
import { useRef } from 'react';
import '../public/css/Mobile.css';
import { Link } from 'react-router-dom';



export default function Mobile( {projects, systemText} ) {
  let [locale, setLocale] = useState(document.documentElement.lang);
  let [email, setEmail] = useState('');
  let [content, setContent] = useState('');

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
    const location5Ref = useRef();
    const location6Ref = useRef();
  
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
      } else if (location === 5) {
        location5Ref.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (location === 6) {
        location6Ref.current?.scrollIntoView({ behavior: 'smooth' });
      }
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


    const alert = useRef(null);
    const openAlert = (alertText) => {
      // Dimmed
      let background = document.querySelector('.page');
      if (!(background.classList.contains('dimmed'))) { background.classList.add('dimmed'); }
  
      // Open Popup
      let alert = document.querySelector('.alert .inner');
      if (!(alert.classList.contains('open'))) { alert.classList.add('open'); }
  
      let text = document.querySelector('.alert .inner .description .text');
      text.innerHTML = alertText;
    }
    const closeAlert = () => {
      let background = document.querySelector('.page');
      if (background.classList.contains('dimmed')) { background.classList.remove('dimmed'); }
      let alert = document.querySelector('.alert .inner');
      if (alert.classList.contains('open')) { alert.classList.remove('open'); }
    }
    const sendEmail = () => {
      if (email === '') {
        openAlert(text.emailAlert);
        // let emailInput = document.getElementById('email');
        // emailInput.focus();
      } else if (content === '') {
        openAlert(text.contentAlert);
        // let contentTextarea = document.getElementById('content');
        // contentTextarea.focus();
      } else {
        openAlert(text.sendSuccess);
        setEmail('');
        setContent('');
      }
    }
  
    return (
      <div className='mobile'>
        <div className='page'>
          <div className='contents'>
            <div className='localeArea'>
              <div className='inner'>
                <Link to={ (e) => e.preventDefault() } onClick={ () => changeLocale('ko') } className={ locale === 'ko' ? 'active' : '' }>KO</Link>
                <Link to={ (e) => e.preventDefault() } onClick={ () => changeLocale('en') } className={ locale === 'en' ? 'active' : '' }>EN</Link>
              </div>
            </div>
            <div className='leftArea'>
              <div className='header'>
                <div className='myName'>
                  <h1>{ text.myName }</h1>
                  <h2>{ text.frontEndDevloper }</h2>
                  <div>
                    <p>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARRJREFUSEvtlLFOwzAURc/9CgaGAoIFhJAYixi7deRz2PmZrmxsFUxILC0SQoJ26NCveMiRE6XBjZ8R3eolSvR8jp99HbHjoR3zcQvM7AB4BAwYS1p7FucSRPgLcBKhX8DQI8kKInwKnAHLKBgAn8BtTtIr6Kx8BdxEwTNwCGQ72SpIwSVVHZhZ6MAlSQr64PXBeiW/BB54iWRDUAL3ShpBJy1h/rGkhSfrZnYEfMfajXRVAjMLzzfgqgZKyka4LTezcAHrMZN0GV7aglfg+p8ET5JGjSC1kr920J2XSlHV6l7QnGU3hnUa9lvUt0Vz4NxzgxM175Iu2t9TMb0DHoDTQskHcC9p0isohGbLi/43WVqi4AcdgqsZWC8YwQAAAABJRU5ErkJggg==" alt={ text.address } />
                      { text.myAddress }
                    </p>
                    <p>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXVJREFUSEvdlS9IZFEUxn8fIgaDySALghh0w/YtNuOCMFoVbIJJMLhlkU0KgmnBtuDW3bWIyWYxa9AkowgGk8Egsn7rGe6TmdF5vpnHlLnlhnPv+Z3vO/eP6PJQl/PTQwDbM8AGMFnStjNgVdJB5HmxyPY18KFk8mz7haTxZoBT9KOk805AtkN9KEBSrfh6BRngHliQ9LcdiO0KsAsMvgfI8m4Ba5L+5YFs96Xerdavy1OwCOwAA8ARMCvp9i2I7WHgDzAFPABLwM9cBUG2/QnYB0aBG6Ai6bgeYvszEDaOAFfAF0mntmtWt1SQBWwPAb+BaeARWJH0IzbbXga2gX7gEJiTdJdixQBpcRyCdeBbqv5XmufTHLHvITpTV1hBkx2hItSEqhhRbVQd1TeMjgBJzRiw96zmKfWk2qLxxS1q5x6UsqgdUMcWFYXkAS7TuS+aK29dVVL0rOEtiud6E5goSTh5vtVfXz3XJZO23N5DX2a3LPoPOrOrGWF3AyAAAAAASUVORK5CYII=" alt={ text.email }/>
                      { text.myEmail }
                    </p>
                </div>
                </div>
                <div className="leftNavigation">
                  <Link to={ (e) => e.preventDefault() } onClick={ () => changeScroll(1) }>{ text.profile }</Link>
                  <Link to={ (e) => e.preventDefault() } onClick={ () => changeScroll(2) }>{ text.workExperience }</Link>
                  <Link to={ (e) => e.preventDefault() } onClick={ () => changeScroll(3) }>{ text.projects }</Link>
                  <Link to={ (e) => e.preventDefault() } onClick={ () => changeScroll(4) }>{ text.skills }</Link>
                  <Link to={ (e) => e.preventDefault() } onClick={ () => changeScroll(5) }>{ systemText.en.study }</Link>
                  <Link to={ (e) => e.preventDefault() } onClick={ () => changeScroll(6) }>{ text.contact }</Link>
                </div>
              </div>
            </div>
            <div className='rightArea'>
              {/* About */}
              <div className='each' ref={ location1Ref }>
                <div className='mainTitle'>{ text.profile }</div>
                <div className='eachInfo'>
                  <div className='eachDesc'>
                    <p dangerouslySetInnerHTML={{ __html: text.aboutMe }}></p>
                  </div>
                </div>
              </div>
              {/* Work Experience */}
              <div className='each' ref={ location2Ref }>
                <div className='mainTitle'>{ text.workExperience }</div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <Link to='https://ctkclip.com' target='_blank' rel='noreferrer'>{ text.ctk }</Link>
                  </div>
                  <div className='eachDesc'>
                    <p>{ text.ctkDate }</p>
                    <p>{ text.ctkRole }</p>
                    <p dangerouslySetInnerHTML={{ __html: text.ctkDescription }}></p>
                    <div className='linkContent' onMouseLeave={ () => inactiveSkills() }>
                      <div className='eachLink' onMouseOver={ () => activeSkills(1) }>
                        <div className='imageArea'>
                            <img src={ require('../images/CompanyLogo1.jpg') } alt={ text.ctkCosmetics } />
                        </div>
                        <div className='hoverChange'>
                          <Link to={ (e) => e.preventDefault() } onClick={ () => openPopup(1) }>{ text.viewProjects }</Link>
                          <Link to='https://www.ctkcosmetics.com/' target='_blank' rel='noreferrer'>{ text.goToTheSite }</Link>
                        </div>
                      </div>
                      <div className='eachLink' onMouseOver={ () => activeSkills(2) }>
                        <div className='imageArea'>
                            <img src={ require('../images/CompanyLogo2.svg').default } alt={ text.ctkClip } />
                        </div>
                        <div className='hoverChange'>
                          <Link to={ (e) => e.preventDefault() } onClick={ () => openPopup(2) }>{ text.viewProjects }</Link>
                          <Link to='https://ctkclip.com' target='_blank' rel='noreferrer'>{ text.goToTheSite }</Link>
                        </div>
                      </div>
                      <div className='eachLink' onMouseOver={ () => activeSkills(3) }>
                        <div className='imageArea'>
                            <img src={ require('../images/CompanyLogo2.svg').default } alt={ text.ctkClip + ' ' + text.forPartner } />
                            <p>for Partner</p>
                        </div>
                        <div className='hoverChange'>
                          <Link to={ (e) => e.preventDefault() } onClick={ () => openPopup(3) }>{ text.viewProjects }</Link>
                          <Link to='https://partner.ctkclip.com' target='_blank' rel='noreferrer'>{ text.goToTheSite }</Link>
                        </div>
                      </div>
                      <div className='eachLink' onMouseOver={ () => activeSkills(4) }>
                        <div className='imageArea'>
                            <img src={ require('../images/CompanyLogo2.svg').default } alt={ text.ctkClip + ' ' + text.forAdmin } />
                            <p>for Admin</p>
                        </div>
                        <div className='hoverChange'>
                          <Link to={ (e) => e.preventDefault() } onClick={ () => openPopup(4) }>{ text.viewProjects }</Link>
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
                    <Link to='https://innerbottle.com' target='_blank' rel='noreferrer'>{ text.innerbottle }</Link>
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
              {/* Projects */}
              <div className='each' ref={ location3Ref }>
                <div className='mainTitle'>{ text.projects }</div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                  <Link to='https://junh0y.github.io/Portfolio/' target='_blank' rel='noreferrer'>{ text.portfolio }</Link>
                  </div>
                  <div className='eachDesc'>
                    <p>{ text.portfolioDesc }</p>
                    <p className='skillSpan'>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>Javascript</span>
                      <span>React</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Skills */}
              <div className='each' ref={ location4Ref }>
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
              <div className='each' ref={ location5Ref }>
                <div className='mainTitle'>{ text.study }</div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <p>{ text.kosmo }</p>
                  </div>
                  <div className='eachDesc'>
                    <p>{ text.kosmoDate }</p>
                    <p>{ text.kosmoDesc }</p>
                    <p className='skillSpan'>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>Javascript</span>
                      <span>JAVA</span>
                      <span>Spring</span>
                      <span>React</span>
                      <span>Android</span>
                    </p>
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
              {/* Contact */}
              <div className='each' ref={ location6Ref }>
                <div className='mainTitle'>{ text.contact }</div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                  <label htmlFor='email'>{ text.email }</label>
                  </div>
                  <div className='eachDesc'>
                    <input name='email' id='email' value={ email } onChange={ (e) => setEmail(e.target.value) }  />
                  </div>
                </div>
                <div className='eachInfo'>
                  <div className='eachTitle'>
                    <label htmlFor='content'>{ text.content }</label>
                  </div>
                  <div className='eachDesc'>
                  <textarea name='content' id='content' value={ content } onChange={ (e) => setContent(e.target.value) }></textarea>
                  </div>
                </div>
                <div className='eachInfo'>
                  <div className='eachDesc'>
                    <Link to={ (e) => e.preventDefault() }className='button' onClick={ () => sendEmail() }>{ text.sendEmail}</Link>
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
                <Link to={ (e) => e.preventDefault() } onClick={ () => closePopup() }>×</Link>
              </div>
              <div className='nav'>
                {
                  CTKProject.map((project, key) => {
                    return (
                      <Link
                        to={ (e) => e.preventDefault() }
                        className={ `ctkProject${ key + 1 }` }
                        onClick={ () => openPopup(key + 1) }
                        key={ `ctkProject${ key + 1 }` }
                      >
                        { project.site }
                      </Link>
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
          <div className='alert' ref={ alert } onClick={ (e) => e.target === alert.current ? closeAlert() : e.preventDefault() }>
          <div className='inner'>
            <div className='close'>
              <Link to={ (e) => e.preventDefault() } onClick={ () => closeAlert() }>×</Link>
            </div>
            <div className='description'>
              <p className='text'></p>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}
