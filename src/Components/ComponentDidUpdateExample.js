/* Method ComponentDidUpdateExample() */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './allComponentsCSS.module.css';
import ComponentDidUpdateExampleCode from './../Images/ComponentDidUpdateCode.png';

class ComponentDidUpdateExample extends Component {

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

  	componentDidUpdate() {
  		alert('This component has been updated');
  	}

  	changeColor = () => {
	    this.setState({
	    	state: "updated values",
	      	color1: "brown",
	      	color2: "purple",
	      	color3: "indigo"
	    });
  	}

	resetColor = () => {
	  	if (this.state.state !== "initial values") {
	  		this.setState({
		 		state: "restored values",
		 		color1: "red", 
		      	color2: "green", 
		      	color3: "blue"
		 	});
	  	} 	
 	}

 	closeAllCodeElements = () => {
 		var codeElements, codeButtons;

 		codeElements = document.getElementsByClassName('imageHolder');
 		codeButtons = document.getElementsByClassName('codeButton');

 		for (let i = 0; i < codeElements.length; i ++) {
 			if (codeElements[i].style.display != 'none') { 				
 				codeElements[i].style.display = 'none';
 			} 			
 		}

 		for (let i = 0; i < codeButtons.length; i ++) {
	 		if (codeButtons[i]) {
	 			codeButtons[i].textContent = 'Display Code';
	 		}
 		}
 	}

 	displayCode = () => {
 		if (document.getElementById('ComponentDidUpdateExampleCode').style.display != 'block') {
 			this.closeAllCodeElements();
 			
 			document.getElementById('ComponentDidUpdateExampleCode').style.display = 'block';
 			document.getElementById('ComponentDidUpdateExampleDisplaybutton').textContent = 'Hide Code';
 		} else {
 			this.closeAllCodeElements();
 		} 		
 	}
 	
 	render() {
 		return(
			<article className={["w3-card-2", styles.displayBlock].join(' ')}>
				<h3 className={styles.displayBlockTitle}>Method <span style={{color: 'red'}}>componentDidUpdate()</span></h3>

				<div className={styles.horizontalOrder}>
					<div className={styles.verticalOrder}>										
						<label className={styles.displayBlockLabel} style={{color: 'initial'}}>State: {this.state.state}</label>
			            <label className={styles.displayBlockLabel} style={{color: this.state.color1}}>Color 1: {this.state.color1}</label>
			            <label className={styles.displayBlockLabel} style={{color: this.state.color2}}>Color 2: {this.state.color2}</label>
			            <label className={styles.displayBlockLabel} style={{color: this.state.color3}}>Color 3: {this.state.color3}</label>		            
		            </div>
	            </div>

	            <div className={styles.horizontalOrder}>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} onClick={this.resetColor}>Reset Color</button>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} onClick={this.changeColor}>Change Color</button>
		            <button id='ComponentDidUpdateExampleDisplaybutton' type='button' className={['w3-card-2 w3-button codeButton', styles.submitButton].join(' ')} 
		            	onClick={this.displayCode}>Display Code</button>
	            </div>
          	</article>
		);
	}
}
//
class ComponentDidUpdateExampleCodeComponent extends Component {
	render() {
		return(
			<div id="ComponentDidUpdateExampleCode" className={['w3-card-2 imageHolder', styles.codeComponentImg].join(' ')}>
				<img src={ComponentDidUpdateExampleCode} alt='setState Example Code' />
            </div>
		);
	}
}
//
export { ComponentDidUpdateExampleCodeComponent };
export default ComponentDidUpdateExample;