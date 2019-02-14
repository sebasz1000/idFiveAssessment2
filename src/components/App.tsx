import * as React from 'react';
import { Header } from './Header'
import '../styles/main.scss';
import { MainMenu } from './MainMenu';

export class App extends React.Component<any, any>{
  

  render(){
    return(
      <div id="landing-page-top">
        <div className="container">
         <Header />
          <div className="caption-text-container">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <button className="cta-button">CTA Button</button>
          </div>
        </div>
        <MainMenu />
      </div>
    );
  }
}
  
