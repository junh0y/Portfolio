import React from 'react';
import '../../public/css/PartTime.css';
import { Link } from 'react-router-dom';

function Developer() {
    return (
        <div className='cv'>
            <div className='header'>
                <h1>Jun Hyeong Yang</h1>
                <p>Dublin 07, Dublin County, Ireland &nbsp;▪&nbsp; 083-090-2821 &nbsp;▪&nbsp; y.junh0y@gmail.com</p>
                <Link>
                    <img src={ require('../../images/QR-Code.png') } alt='Portfolio QR Code' />
                    <p>Portfolio</p>
                </Link>
            </div>
            <div className='content'>
                <div className='each'>
                    <p className='title'>Personal Summary</p>
                    <div className='description'>
                        <div className="eachDescription">
                            <div className="main">
                                <p>&nbsp;Experienced full-stack developer with around 3 years of expertise in JavaScript, jQuery, React, Vue, PHP (Laravel), and WordPress. Successfully developed and maintained multiple websites, including a pioneering cosmetic development platform with 20,000+ users. Skilled in database design, API development, and front-end technologies, currently expanding knowledge in React and node.js.</p>
                            </div>
                            <div className="main">
                                <p>&nbsp;Inspired by Ireland's culture and environment during a visit nine years ago, I returned on a working holiday visa to contribute my skills and passion in a diverse work environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Experience */}
                <div className='each'>
                    <p className='title'>Work Experience</p>
                    <div className='description'>
                        <div className="eachDescription">
                            <div className='main'>
                                <div className="info">
                                    <span>Arrow Design</span>
                                    <span>Developer (Permanent)</span>
                                    <span>Dublin, Ireland</span>
                                </div>
                                <div className='date'>
                                    <span>AUG 2024 - MAR 2025</span>
                                </div>
                            </div>
                            <div className='sub'>
                                <ul>
                                    <li>Developed WordPress-based websites and e-commerce platforms.</li>
                                    <li>Designed and developed custom WordPress themes and plugins.</li>
                                    <li>Designed and optimized databases using MySQL.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="eachDescription">
                            <div className='main'>
                                <div className="info">
                                    <span>CTK</span>
                                    <span>Developer (Permanent)</span>
                                    <span>Seoul, South Korea</span>
                                </div>
                                <div className='date'>
                                    <span>APR 2022 - APR 2024</span>
                                </div>
                            </div>
                            <div className='sub'>
                                <ul>
                                    <li>Developed and maintained web applications using PHP, Laravel, and Vue.</li>
                                    <li>Collaborated with UI/UX designers to enhance user experience.</li>
                                    <li>Developed regulatory screening functionality as a full-stack developer (planning, database design, API development).</li>
                                    <li>Communicated in English via email regarding external APIs and handled customer interactions in English at exhibitions.</li>
                                    <li>Shared information and progress related to development using Scrum methodology.</li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="eachDescription">
                            <div className='main'>
                                <div className="info">
                                    <span>Innerbottle</span>
                                    <span>Enginneer (Permanent)</span>
                                    <span>Gyengki, South Korea</span>
                                </div>
                                <div className='date'>
                                    <span>JUN 2019 - JUN 2021</span>
                                </div>
                            </div>
                            <div className='sub'>
                                <ul>
                                    <li>Designed eco-friendly cosmetic packaging and conducted compatibility and quality control tests.</li>
                                    <li className='point'>Led a full-stack project at CTK to develop a feature that analyzes cosmetic ingredient regulations, leveraging my experience in conducting development tests on cosmetic raw materials.</li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* Skills */}
                <div className='each'>
                    <p className='title'>Skills</p>
                    <div className='description'>
                        <div className="eachDescription">
                            <div className='main'>
                                <div className="info">
                                    <span>Programming</span>
                                </div>
                            </div>
                            <div className='sub'>
                                <ul>
                                    <li>Front-end : HTML, CSS, JavaScript, jQuery, Vue, React, Front-end Libraries (Bootstrap, GASP, Swiper.js)</li>
                                    <li>Back-end : PHP (Laravel), WordPress (Theme & Plugin Development), MySQL</li>
                                    <li>Others : Git, Gitlab, Docker</li>
                                </ul>
                            </div>
                        </div>
                        <div className="eachDescription">
                            <div className='main'>
                                <div className="info">
                                    <span>Language</span>
                                </div>
                            </div>
                            <div className='sub'>
                                <ul>
                                    <li>Korean (Native), English (Intermediate)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Education */}
                <div className='each'>
                    <p className='title'>Education</p>
                    <div className='description'>
                         <div className="eachDescription">
                            <div className='main'>
                                <div className="info">
                                    <span>KOSMO</span>
                                    <span>Seoul, South Korea</span>
                                </div>
                                <div className='date'>
                                    <span>SEP 2021 - MAR 2022</span>
                                </div>
                            </div>
                            <div className='sub'>
                                <ul>
                                    <li>Completed the JAVA Full Stack Expert Training Program.</li>
                                    <li>Developed a menu recommendation web application as part of the training program.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="eachDescription">
                            <div className='main'>
                                <div className="info">
                                    <span>Hongik University</span>
                                    <span>Seoul, South Korea</span>
                                </div>
                                <div className='date'>
                                    <span>MAR 2010 - FEB 2017</span>
                                </div>
                            </div>
                            <div className='sub'>
                                <ul>
                                    <li>Bachelor of Mechanical System Design Engineering</li>
                                    <li>Minor in Ceramic & Glass</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Link */}
                <div className='each'>
                    <p className='title'>Link</p>
                    <div className='description linkList'>
                        <div className="eachDescription">
                            <div className='main'>
                                <div className="info">
                                    <span>Portfolio</span>
                                    <span><Link to='https://junh0y.github.io/Portfolio/'>https://junh0y.github.io/Portfolio/</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="eachDescription">
                            <div className='main'>
                                <div className="info">
                                    <span>LinkedIn</span>
                                    <span><Link to='https://www.linkedin.com/in/jun-hyeong-yang-95246b126/'>https://www.linkedin.com/in/jun-hyeong-yang-95246b126/</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="eachDescription">
                            <div className='main'>
                                <div className="info">
                                    <span>GitHub</span>
                                    <span><Link to='https://github.com/junh0y'>https://github.com/junh0y</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Developer