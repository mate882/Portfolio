
import React from "react";
import '../styles/LanguageSection.css'

import html from '../../../assets/images/HTML.png'
import css from '../../../assets/images/CSS.png'
import javascript from '../../../assets/images/javascript.png'
import react from '../../../assets/images/react.png'
import Bootstrap from '../../../assets/images/Bootstrap.png'
import tailwind from '../../../assets/images/tailwind.png'
import git from '../../../assets/images/git.png'
import python from '../../../assets/images/python.png'
import django from '../../../assets/images/django.svg'
import djangorestframework from '../../../assets/images/django rest framework.png'
import mysql from '../../../assets/images/mysql.webp'
import Postgresql from '../../../assets/images/postgres.png'
import SQLite from '../../../assets/images/SQLite.svg'

import Georgia from '../../../assets/images/Georgia.png'
import Russia from '../../../assets/images/Russia.svg'
import UnitedKingdom from '../../../assets/images/United Kingdom.webp'


function LanguageSection(){
    return(
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1rem' }} className="l" data-aos="fade-right" data-aos-delay="300">
            <p className="prl1">Tech Skills</p>
            <div className="ProgrammingLan">
                <div className="prl">
                    <p className="prlp">Programming Languages:</p>
                        <ul style={{listStyle: 'none'}}>
                            <img className="htmlimg" src={html} alt="" />
                            <img className="cssimg" src={css} alt="" />
                            <img className="jsimg" src={javascript} alt="" />
                            <img className="pythonimg" src={python} alt="" />
                            <li className="htmlp">HTML</li>
                            <li className="cssp">CSS</li>
                            <li className="jsp">JavaScript</li>
                            <li className="pythonp">Python</li>
                        </ul>
                </div> 

                <div className="libr"> 
                    <p className="lbrp">Libraries:</p>
                        <ul style={{listStyle: 'none'}}>
                            <img className="reactimg" src={react} alt="" />
                            <li className="reactp">React</li>
                        </ul>
                </div>

                <div className="frm">
                    <p className="frmp">FrameWorks:</p>
                        <ul style={{listStyle: 'none'}}>
                            <img className="bootstrapimg" src={Bootstrap} alt="" />
                            <img className="tailwindimg" src={tailwind} alt="" />
                            <img className="djangoimg" src={django} alt="" />
                            <img className="drfimg" src={djangorestframework} alt="" />
                            <li className="bootstrapp">Bootstrap 5</li>
                            <li className="tailwindp">Tailwind</li>
                            <li className="djangop">Django</li>
                            <li className="drfp">Django Rest Framework(DRF)</li>
                        </ul>
                </div>

                <div className="versco">                    
                    <p className="verp">Version Control:</p>
                        <ul style={{listStyle: 'none'}}>  
                            <img className="gitimg" src={git} alt="" />                          
                            <li className="gitp">Git</li>
                        </ul>
                </div>

                <div className="sql">
                    <p className="sqlp">SQL Databases:</p>
                        <ul style={{listStyle: 'none'}}>
                            <img className="mysqlimg" src={mysql} alt="" />
                            <img className="postgresqlimg" src={Postgresql} alt="" />
                            <img className="sqliteimg" src={SQLite} alt="" />
                            <li className="mysqlp">MySQL</li>
                            <li className="postgresqlp">PostgreSQL</li>
                            <li className="sqlitep">SQLite</li>
                        </ul>
                </div>
            </div>
            <div className="RealLan">
                <p className="genlan">Languages: </p>
                <p className="geo">Georgian(C1)</p>
                <p className="eng">English(B2)</p>
                <p className="rus">Russian(C1-C2)</p>
                <img className="geoimg" src={Georgia} alt="" />
                <img className="engimg" src={UnitedKingdom} alt="" />
                <img className="rusimg" src={Russia} alt="" />
            </div>
        </div>
    );
}

export default LanguageSection