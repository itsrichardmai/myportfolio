import React from 'react';
import './App.css';

// Components 
import MyNavbar from "../src/components/my-navbar/mynavbar.component";
import MyCarousal from "../src/components/my-carousal/my-carousal.component";
import TitleMessage from './components/title-message/title-message.component';
import ScrollDown from './components/scroll-down/scroll-down.component';

const App = () => {
  return ( <div>
    <MyNavbar/>
    <MyCarousal/>
    <TitleMessage/>
    </div> 
  
  );

}

export default App;
