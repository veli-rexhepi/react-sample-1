import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import SetStateExample, { SetStateExampleCodeComponent } from './Components/SetStateExample.js';
import GetDerivedStateFromPropsExample, { GetDerivedStateFromPropsExampleCodeComponent } from './Components/GetDerivedStateFromPropsExample.js';
import ComponentDidMountExample, { ComponentDidMountExampleCodeComponent } from './Components/ComponentDidMountExample.js';
import ShouldComponentUpdateExample, { ShouldComponentUpdateExampleCodeComponent, ReactSelectComponent } from './Components/ShouldComponentUpdateExample.js';
import GetSnapshotBeforeUpdateExample, { GetSnapshotBeforeUpdateExampleCodeComponent } from './Components/GetSnapshotBeforeUpdateExample.js';
import ComponentDidUpdateExample, { ComponentDidUpdateExampleCodeComponent } from './Components/ComponentDidUpdateExample.js';
import ComponentWillUnmountExample, { ComponentWillUnmountExampleCodeComponent } from './Components/ComponentWillUnmountExample.js';

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
                <ShouldComponentUpdateExample allowUpdate = "false" />
              </div>

              <div className="horizontalOrder">
                <GetSnapshotBeforeUpdateExample />
                <ComponentDidUpdateExample />                
              </div>

              <div className="horizontalOrder">                
                <ComponentWillUnmountExample />             
              </div>
            </div>
          </div> 

          <div className="rightSide">
            <article className="codeComponentHolder">
              <SetStateExampleCodeComponent />
              <GetDerivedStateFromPropsExampleCodeComponent />
              <ComponentDidMountExampleCodeComponent />
              {/* 
                Option 1: Create a new component with a select, on select change re-call the <ShouldComponentUpdateExampleCodeComponent />
               including a property for sending select selected option. Re-caling (re-rendering) the <ShouldComponentUpdateExampleCodeComponent />
               should display correctly slected option in select.

               Option 2: Use a button instead react-select component (Display/Hide Code button is working when ShouldComponentUpdate returns false.) 

               Option 3: Use a HTML select element instead of react-select element
              */}
              <ShouldComponentUpdateExampleCodeComponent />
              <GetSnapshotBeforeUpdateExampleCodeComponent />
              <ComponentDidUpdateExampleCodeComponent />
              <ComponentWillUnmountExampleCodeComponent />
            </article>
          </div>         
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
