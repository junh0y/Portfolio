import React from 'react';
import '../../public/css/PartTime.css';

function Developer() {
    return (
        <div className='cv'>
            <div className='header'>
                <h1>Jun Hyeong Yang</h1>
                <p>Bonham Street, Dublin, D08 R596 &nbsp;▪&nbsp; 083-090-2821 &nbsp;▪&nbsp; y.junh0y@gmail.com &nbsp;▪&nbsp; <a href="https://junh0y.github.io/Portfolio/">https://junh0y.github.io/Portfolio/</a></p>
            </div>
            <div className='content'>
                <div className='each'>
                    <p className='title'>Personal Summary</p>
                    <ul className='description'>
                        <div className="eachDescription">
                            <div className="main">
                                <p>&nbsp;As a frontend developer with over 2 years of web development experience, I am proficient in JavaScript, jQuery, and PHP (Laravel). I have developed and maintained 4 websites, one of which is the world's first cosmetic development platform with over 20,000 customers. Utilizing my previous experience in the cosmetics industry, I planned, designed the database, and developed the API for a system that screens ingredient regulations by country, demonstrating full-stack capabilities. As a developer who believes in the importance of learning various languages, I am currently studying React and have developed my portfolio site using React (SPA).</p>
                            </div>
                            <div className="main">
                                <p>&nbsp;I first traveled to Ireland eight years ago and was deeply impressed by its culture and environment. This experience motivated me to return to Ireland on a working holiday visa. I am eager to experience the diverse culture and work environment here, and I believe my skills and passion will make a meaningful contribution.</p>
                            </div>
                        </div>
                    </ul>
                </div>
                {/* Experience */}
                <div className='each'>
                    <p className='title'>Work Experience</p>
                    <div className='description'>
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
                                    <li>Developed and maintained web applications using PHP, Laravel, and vue.js.</li>
                                    <li>Collaborated with UI/UX designers to enhance user experience.</li>
                                    <li>Developed regulatory screening functionality as a full-stack developer (planning, database design, API development)</li>
                                    <li>Communicated in English via email regarding external APIs and handled customer interactions in English at exhibitions</li>
                                    <li>Managed development outsourcing vendors</li>
                                </ul>
                            </div>
                        </div>
                        <div className="eachDescription">
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
                                    <li>Planned and designed eco-friendly cosmetic packaging.</li>
                                    <li>Managed production processes and developed manufacturing technologies.</li>
                                    <li>Conducted compatability testing and performed quality control tasks.</li>
                                    <li>Handled customer interactions in English at exhibitions</li>
                                </ul>
                            </div>
                        </div>
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
                                    <li>Front-end : HTML, CSS, JavaScript, jQuery, vue.js, React</li>
                                    <li>Back-end : PHP (Laravel)</li>
                                    <li>Liabrary : Bootstrap, GASP, swiper.js</li>
                                    <li>Others : MySQL, Docker</li>
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
                                    <li>Minor of Ceramic & Glass</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Developer