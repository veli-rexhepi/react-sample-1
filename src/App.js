import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import SetStateExample, { SetStateExampleCodeComponent } from './Components/SetStateExample.js';
import GetDerivedStateFromPropsExample, { GetDerivedStateFromPropsExampleCodeComponent } from './Components/GetDerivedStateFromPropsExample.js';
import ComponentDidMountExample, { ComponentDidMountExampleCodeComponent } from './Components/ComponentDidMountExample.js';
import ShouldComponentUpdateExample, { ShouldComponentUpdateExampleCodeComponent } from './Components/ShouldComponentUpdateExample.js';
import GetSnapshotBeforeUpdateExample, { GetSnapshotBeforeUpdateExampleCodeComponent } from './Components/GetSnapshotBeforeUpdateExample.js';
import ComponentDidUpdateExample, { ComponentDidUpdateExampleCodeComponent } from './Components/ComponentDidUpdateExample.js';
import ComponentWillUnmountExample, { ComponentWillUnmountExampleCodeComponent } from './Components/ComponentWillUnmountExample.js';

import PassDataFromParentToChildComponent, { PassDataFromParentToChildCodeComponent } from './Components/PassDataFromParentToChildComponent.js';
import PassDataFromChildToParentComponent, { PassDataFromChildToParentCodeComponent } from './Components/PassDataFromChildToParentComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <div className="appBody">
          <div className="leftSide">
            <div className="verticalOrder">
              <div className="horizontalOrder">
                <SetStateExample />
                <GetDerivedStateFromPropsExample favCol="maroon" />                
              </div>

              <div className="horizontalOrder">
                <ComponentDidMountExample favCol="maroon" />
                <ShouldComponentUpdateExample allowUpdate = "true" />
              </div>

              <div className="horizontalOrder">
                <GetSnapshotBeforeUpdateExample />
                <ComponentDidUpdateExample />                
              </div>

              <div className="horizontalOrder">                
                <ComponentWillUnmountExample />  
                          
              </div>

              <div className="horizontalOrder">                
                <PassDataFromParentToChildComponent />  
                <PassDataFromChildToParentComponent />           
              </div>
            </div>
          </div> 

          <div className="rightSide">
            <article className="codeComponentHolder">
              <SetStateExampleCodeComponent />
              <GetDerivedStateFromPropsExampleCodeComponent />
              <ComponentDidMountExampleCodeComponent />
              <ShouldComponentUpdateExampleCodeComponent />
              <GetSnapshotBeforeUpdateExampleCodeComponent />
              <ComponentDidUpdateExampleCodeComponent />
              <ComponentWillUnmountExampleCodeComponent />  
              <PassDataFromParentToChildCodeComponent />  
              <PassDataFromChildToParentCodeComponent />         
            </article>
          </div>         
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
