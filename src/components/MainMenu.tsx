import * as React from 'react';

import closeIcon from '../static/svg/close-icon.svg';  
import searchIcon from '../static/svg/search.svg';  

export class MainMenu extends React.Component<IProps, IState>{
  
  constructor(props: IProps){
    super(props);
    this.state = {
      open : false
    };
  } 
  
  handleClick = (e: any) => console.log("switch open state!")
  
  render(){
    return(
        <div id="menu-container">
          <div class="close-container" onClick={this.handleClick()} >
            <p>CLOSE</p>
            <img width="30px" src={closeIcon} />
          </div>
          <ul id='site-menu'>
            <li><a href='#'>About us</a></li>
            <li><a href='#'>Our Work</a></li>
            <li><a href='#'>Meet the Team</a></li>
            <ul class="submenu">
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>Careers</a></li>
              <li><a href='#'>Blog</a></li>
            </ul>
          </ul>
          <form>
            <input type="text" placeholder="Search"/>
            <img className="search-icon" width="20px" src={searchIcon}  />
          </form>
        </div>
    );
  }
}

interface IProps{
  title: string;
}

interface IState{
  open: boolean;
}










  