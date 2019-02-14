import * as React from 'react';
import siteLogo from '../static/svg/idfive-logo.svg';  
import headerNavIcon from '../static/svg/hamburguer-icon.svg';  

//console.log(url);
export class Header extends React.Component{

  render(){
    return(
        <header id="site-header">
          <img width="220px" id="header-logo" src={siteLogo} />
          <nav id="header-nav" className="right">
            <div id="nav-menu-btn">
              <span>MENU</span><img src={headerNavIcon} />
           </div>
          </nav>
        </header>
    );
  }
}
  
