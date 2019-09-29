/* Method ComponentDidMountExample() */

import React, { Component } from 'react';
import styles from './../CSS/allComponentsCSS.module.css';
import ComponentDidMountExampleCode from './../Images/ShouldComponentUpdateCode.png';

class ComponentDidMountExample extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	state: "initial values",
	      	color1: "red", 
	      	color2: "green", 
	      	color3: "blue",
	      	show: true,
	      	firstTime: true,
	    };

	    this.storeState = this.storeState.bind(this);
  	}  	  	

  	storeState = (evt) => {
  		this.setState({
  			firstTime: evt
  		});
  	}

  	// Sets the object state show to true or false. Through this it mount's (display's) / unmount's (hide's) the component
  	displayCompContent = (display) => {
  		this.setState({
  			show: display
  		});
  	}  	
  	
  	displayCode = () => {
 		if (document.getElementById('ComponentDidMountExampleCode').style.display !== 'block') {
 			this.closeAllCodeElements();

 			document.getElementById('ComponentDidMountExampleCode').style.display = 'block';
 			document.getElementById('ComponentDidMountExampleDisplaybutton').textContent = 'Hide Code';
 		} else {
 			this.closeAllCodeElements();	
 		} 		
 	}
 	
 	closeAllCodeElements = () => {
 		var codeElements, codeButtons;

 		codeElements = document.getElementsByClassName('imageHolder');
 		codeButtons = document.getElementsByClassName('codeButton');

 		for (let i = 0; i < codeElements.length; i ++) {
 			if (codeElements[i].style.display !== 'none') { 				
 				codeElements[i].style.display = 'none';
 			} 			
 		}

 		for (let i = 0; i < codeButtons.length; i ++) {
	 		if (codeButtons[i]) {
	 			codeButtons[i].textContent = 'Display Code';
	 		}
 		}
 	}

 	render() {  		
  		// Based to the object state show value changes the component called from { compCont }
 		let compCont;
		if (this.state.show) {
			compCont = <ComponentContent firstTime={ this.state.firstTime } currentState={ this.storeState } />;
		};

		return(
			<article className={["w3-card-2", styles.displayBlock, styles.emptySpace].join(' ')}>
			
				<h3 className={styles.displayBlockTitle}>Method <span style={{color: 'red'}}>ComponentDidMount()</span></h3>
				
				{ compCont }

				<div className={[styles.horizontalOrder, styles.emptySpaceMargin].join(' ')}>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} 
		            	onClick={() => this.displayCompContent(true)}>Show Content</button>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} 
		            onClick={() => this.displayCompContent(false)}>Hide Content</button>
		            <button id='ComponentDidMountExampleDisplaybutton' type='button' className={['w3-card-2 w3-button codeButton', styles.submitButton].join(' ')} 
		            	onClick={this.displayCode}>Display Code</button>
	            </div>	
          	</article>
		);
	}
}
//
class ComponentContent extends Component {

	// This is called after the component is rendered. Use this to run statements that requires the component is alrady placed in the DOM.
	componentDidMount() {
		// Call storeState through currentState props
		this.props.currentState(false);
		//
    	if (this.props.firstTime === false) {
    		alert("The component has been mounted.");
    	};
  	}

	render() {		
		return(
			<div className={styles.horizontalOrder}>
				<div className={styles.verticalOrder}>										
					<label className={styles.displayBlockLabel} style={{color: "initial"}}>State: {"initial"}</label>
		            <label className={styles.displayBlockLabel} style={{color: "green"}}>Color 1: {"green"}</label>
		            <label className={styles.displayBlockLabel} style={{color: "blue"}}>Color 2: {"blue"}</label>
		            <label className={styles.displayBlockLabel} style={{color: "red"}}>Color 3: {"red"}</label>		            
	            </div>
            </div>
		);
	}
}

class ComponentDidMountExampleCodeComponent extends Component {

	render() {
		return(
			<div id="ComponentDidMountExampleCode" className={['w3-card-2 imageHolder', styles.codeComponentImg].join(' ')}>
				<img src={ComponentDidMountExampleCode} alt='setState Example Code' />
            </div>
		);
	}
}
//
export { ComponentDidMountExampleCodeComponent };
export default ComponentDidMountExample;