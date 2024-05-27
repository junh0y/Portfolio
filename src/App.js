import './App.css';
import { Routes, Route } from 'react-router-dom';

import PC from './component/PC.js';
import Mobile from './component/Mobile.js';

import projects from './public/js/CTKProject.js';
import systemText from './systemText.js';

const App = () => {
  const isMobile = /Mobi/i.test(window.navigator.userAgent); // "Mobi" 가 User agent에 포함되어 있으면 모바일

  return (
    <>
      <Routes>
        <Route path="/" element={
            isMobile ? <Mobile projects={ projects } systemText={ systemText } /> : <PC projects={ projects } systemText={ systemText } />
            }>
        </Route>
      </Routes>
    </>
  );
}

export default App;
