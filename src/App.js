import './App.css';
import { Outlet, Routes, Route } from 'react-router-dom';

import PC from './component/PC.js';
import Mobile from './component/Mobile.js';
import PartTime from './component/CV/PartTime';
import Developer from './component/CV/Developer';
import Error from './component/Error';

import projects from './public/js/CTKProject.js';
import systemText from './systemText.js';

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
};

const App = () => {
  const isMobile = /Mobi/i.test(window.navigator.userAgent); // "Mobi" 가 User agent에 포함되어 있으면 모바일

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={ isMobile ? <Mobile projects={ projects } systemText={ systemText } /> : <PC projects={ projects } systemText={ systemText } /> } />
          <Route path='PartTime' element={ <PartTime /> } />
          <Route path='Developer' element={ <Developer /> } />
          <Route path='*' element={ <Error systemText={ systemText } /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
