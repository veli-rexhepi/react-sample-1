/* Method ComponentDidMountExample() */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './allComponentsCSS.module.css';
import ComponentDidMountExampleCode from './../Images/setStateExampleCode.png';

class ComponentDidMountExample extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	state: "initial values",
	      	color1: "red", 
	      	color2: "green", 
	      	color3: "blue"
	    };	    
  	}

  	componentDidMount() {
		setTimeout(() => {
			this.setState({
				state: "component is mounted",
				color1: "blue",
				color2: "blue",
				color3: "blue"
			});

			alert('componentDidMount() executed. Component was mounted successfully.');
		}, 2000)
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
 		if (document.getElementById('ComponentDidMountExampleCode').style.display != 'block') {
 			this.closeAllCodeElements();

 			document.getElementById('ComponentDidMountExampleCode').style.display = 'block';
 			document.getElementById('ComponentDidMountExampleDisplaybutton').textContent = 'Hide Code';
 		} else {
 			this.closeAllCodeElements();	
 		} 		
 	}

 	render() {
		return(
			<article className={["w3-card-2", styles.displayBlock].join(' ')}>
				<h3 className={styles.displayBlockTitle}>Method <span style={{color: 'red'}}>ComponentDidMount()</span></h3>

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
		            <button id='ComponentDidMountExampleDisplaybutton' type='button' className={['w3-card-2 w3-button codeButton', styles.submitButton].join(' ')} 
		            	onClick={this.displayCode}>Display Code</button>
	            </div>
          	</article>
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

export { ComponentDidMountExampleCodeComponent };
export default ComponentDidMountExample;