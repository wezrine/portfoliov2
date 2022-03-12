import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import ExperienceView from './views/ExperienceView';
import LandingView from './views/LandingView';
import SkillsView from './views/SkillsView';

ReactDOM.render(
  <React.StrictMode>
    <LandingView />
    <AboutView />
    <SkillsView />
    <ExperienceView />
    <ContactView />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
