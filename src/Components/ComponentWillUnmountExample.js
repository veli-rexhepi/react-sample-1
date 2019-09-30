/* Method ComponentWillUnmountExample() */

import React, { Component } from 'react';
import styles from './../CSS/allComponentsCSS.module.css';
import ComponentWillUnmountExampleCode from './../Images/ComponentWillUnmountExampleCodeImg.png';

class ComponentWillUnmountExample extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	state: "initial values",
	      	color1: "red", 
	      	color2: "green", 
	      	color3: "blue",
	      	show: true
	    };	    
  	}  	  	

  	displayCompContent = (display) => {
  		this.setState({
  			show: display
  		});
  	}  	

  	displayCode = () => {
 		if (document.getElementById('ComponentWillUnmountExampleCode').style.display !== 'block') {
 			this.closeAllCodeElements();

 			document.getElementById('ComponentWillUnmountExampleCode').style.display = 'block';
 			document.getElementById('ComponentWillUnmountExampleDisplaybutton').textContent = 'Hide Code';
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
 		let compCont;
		if (this.state.show) {
			compCont = <ComponentContent />;
		};

		return(
			<article className={["w3-card-2", styles.displayBlock, styles.emptySpace].join(' ')}>
				<h3 className={styles.displayBlockTitle}>Method <span style={{color: 'red'}}>ComponentWillUnmount()</span></h3>
				
				{compCont}

				<div className={[styles.horizontalOrder, styles.emptySpaceMargin].join(' ')}>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} 
		            	onClick={() => this.displayCompContent(true)}>Show Content</button>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} 
		            	onClick={() => this.displayCompContent(false)}>Hide Content</button>
		            <button id='ComponentWillUnmountExampleDisplaybutton' type='button' 
		            	className={['w3-card-2 w3-button codeButton', styles.submitButton].join(' ')} 
		            	onClick={this.displayCode}>Display Code</button>
	            </div>	
          	</article>
		);
	}
}
//
class ComponentContent extends Component {
	componentWillUnmount() {
	    alert("The component is about to be unmounted.");
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

class ComponentWillUnmountExampleCodeComponent extends Component {
	render() {
		return(
			<div id="ComponentWillUnmountExampleCode" className={['w3-card-2 imageHolder', styles.codeComponentImg].join(' ')}>
				<img src={ComponentWillUnmountExampleCode} alt='setState Example Code' />
            </div>
		);
	}
}
//
export { ComponentWillUnmountExampleCodeComponent };
export default ComponentWillUnmountExample;