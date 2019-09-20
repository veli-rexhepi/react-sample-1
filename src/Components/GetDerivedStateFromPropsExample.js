/* Method getDerivedStateFromProps() */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './allComponentsCSS.module.css';
import GetDerivedStateFromPropsExampleCode from './../Images/setStateExampleCode.png';

class GetDerivedStateFromPropsExample extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	state: "initial values",
	      	color1: "red", 
	      	color2: "green", 
	      	color3: "blue"
	    };	    
  	}

  	static getDerivedStateFromProps(props, state) {  		
  		return (  			 	
			{ 
  				//color1: props.favCol,
  				color2: props.favCol,
  				color3: props.favCol
			}
  		);
  	}

  	changeColor = () => {
  		alert('getDerivedStateFromProps() is called right before rendering and it set\'s (overwrites) the last two properties ' + 
  			'of the state object as shown in the getDerivedStateFromProps() method, see the code. So, that\'s why Color 2 & 3 remains in maroon.');

	    this.setState({
	    	state: "updated values",
	      	color1: "brown",
	      	color2: "purple",
	      	color3: "indigo"
	    });
  	}

	resetColor = () => {
	  	if (this.state.state !== "initial values") {
	  		alert('getDerivedStateFromProps() is called right before rendering and it set\'s (overwrites) the last two properties ' + 
  				'of the state object as shown in the getDerivedStateFromProps() method, see the code. So, that\'s why Color 2 & 3 remains in maroon.');

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
 		if (document.getElementById('GetDerivedStateFromPropsExampleCode').style.display != 'block') {
 			this.closeAllCodeElements();

 			document.getElementById('GetDerivedStateFromPropsExampleCode').style.display = 'block';
 			document.getElementById('GetDerivedStateFromPropsExampleDisplaybutton').textContent = 'Hide Code';
 		} else {
 			this.closeAllCodeElements();	
 		} 		
 	}

 	render() {
		return(
			<article className={["w3-card-2", styles.displayBlock].join(' ')}>
				<h3 className={styles.displayBlockTitle}>Method <span style={{color: 'red'}}>getDerivedStateFromProps()</span></h3>

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
		            <button id='GetDerivedStateFromPropsExampleDisplaybutton' type='button' className={['w3-card-2 w3-button codeButton', styles.submitButton].join(' ')} 
		            	onClick={this.displayCode}>Display Code</button>
	            </div>
          	</article>
		);
	}
}

class GetDerivedStateFromPropsExampleCodeComponent extends Component {
	render() {
		return(
			<div id="GetDerivedStateFromPropsExampleCode" className={['w3-card-2 imageHolder', styles.codeComponentImg].join(' ')}>
				<img src={GetDerivedStateFromPropsExampleCode} alt='GetDerivedStateFromProps Example Code' />
            </div>
		);
	}
}

export { GetDerivedStateFromPropsExampleCodeComponent };
export default GetDerivedStateFromPropsExample;