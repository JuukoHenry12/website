import React, { Component, Fragment } from 'react';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';

import LightSpeed from 'react-reveal/LightSpeed';

import { Jumbotron, Container, Image,Card, Button, Row, Col } from 'react-bootstrap';

import './Home.css';
import { SocialMediaIconsReact } from 'social-media-icons-react'
import { Grid,Paper,makeStyles } from '@material-ui/core';
import henry from '../Images/henry.PNG';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  
    const classes = useStyles ()
    return (
      <div>
        <section className="header center">
          <Image src={henry} className ="img" alt='No Picture found' roundedCircle />
           
          <h1>JUUKO HENRY</h1>
          <h1> SoftWare Engineer</h1>
          <div className="socialMedia">
            <a>
               <SocialMediaIconsReact  icon="twitter" />
            </a>
            <a>
              <SocialMediaIconsReact className="social" icon="linkedin" />
            </a>
            <a>
              <SocialMediaIconsReact className="social" icon="github" />
            </a>
          </div>

        </section>
        <section>
          <div className={classes.root}>
            <Grid container spacing={3}>


              <Grid item xs={12} sm={6}>
                <Paper>
                  <h3 className="center">About me</h3>
                  <p className="center">
                    <strong>I am </strong>a self-taught developer specializing in JavaScript, React, Redux, and React-Native. Most of my learning has been through building and deploying apps, pushing to GitHub and getting peer code reviews on LinkedIn.
                  </p>

                  <p className="center">Because of my contagious enthusiasm and passion for learning, I was chosen as a 2019 LinkedIn Top Voice for Web Development. I love the daily challenges of web development: writing quality code, learning new technologies, and solving complex problems.</p>

                  <p className="center">I have been continuing to learn through freelance opportunities. A Squarespace site using Mailchimp and a React-Native app for sharing videos. I look forward to working on a team that is passionate about their product.

                   </p>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Paper>
                  <h3 className="center"> Skills</h3>
                  <h4 >Primary Experience</h4>
                  <p >
                    <ul>
                      <li>JavaScript</li>
                      <li> React</li>
                      <li>Redux</li>
                      <li>GitHub /Git</li>
                      <li>python</li>
                      <li>React native</li>
                    </ul>
                  </p>
                  <h4>Secondary Experience</h4>
                  <p >
                    
                    <ul>
                      <li>RESTful Api</li>
                      <li> Node .js</li>
                      <li>Express .js</li>
                      <li>Mongoose DB </li>
                      <li>Bootstrap</li>
                      <li>Flask (python)</li>
                    </ul>
                  </p>
                 </Paper>
                </Grid>

            </Grid>
          </div>  
        </section>
       
        <section className="personalProjects">
          <h1>Personal Projects</h1>
        </section>

    </div>

    );
  }



