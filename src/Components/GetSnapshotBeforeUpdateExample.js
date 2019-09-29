/* Method GetSnapshotBeforeUpdateExample() */

import React, { Component } from 'react';
import styles from './../CSS/allComponentsCSS.module.css';
import GetSnapshotBeforeUpdateExampleCode from './../Images/GetSnapshotBeforeUpdateCode.png';

class GetSnapshotBeforeUpdateExample extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	state: "initial values",
	      	color1: "red", 
	      	color2: "green", 
	      	color3: "blue"
	    };	    
  	}  	

  	getSnapshotBeforeUpdate(prevProps, prevState) {
  		document.getElementById("beforeUpdateState").innerHTML = "Prior state: " + prevState.state;  
  		document.getElementById("beforeUpdateState").style.color = "initial";		
  		document.getElementById("beforeUpdateColor1").innerHTML = "Prior color 1: " + prevState.color1;
  		document.getElementById("beforeUpdateColor1").style.color = prevState.color1;
  		document.getElementById("beforeUpdateColor2").innerHTML = "Prior color 2: " + prevState.color2;
  		document.getElementById("beforeUpdateColor2").style.color = prevState.color2;
  		document.getElementById("beforeUpdateColor3").innerHTML = "Prior color 3: " + prevState.color3;
  		document.getElementById("beforeUpdateColor3").style.color = prevState.color3;

  		return null;
  	}

  	componentDidUpdate() {    
	}

  	changeColor = () => {
  		alert("Every time you change the colors their prior values are stored and shown as Prior State, see below");

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

 	displayCode = () => {
 		if (document.getElementById('GetSnapshotBeforeUpdateExampleCode').style.display !== 'block') {
 			this.closeAllCodeElements();
 			
 			document.getElementById('GetSnapshotBeforeUpdateExampleCode').style.display = 'block';
 			document.getElementById('GetSnapshotBeforeUpdateExampleDisplaybutton').textContent = 'Hide Code';
 		} else {
 			this.closeAllCodeElements();	
 		} 		
 	}

 	render() {
		return(
			<article className={["w3-card-2", styles.displayBlock].join(' ')}>
				<h3 className={styles.displayBlockTitle}>Method <span style={{color: 'red'}}>getSnapshotBeforeUpdate()</span></h3>

				<div className={styles.horizontalOrder}>
					<div className={styles.verticalOrder}>										
						<label className={styles.displayBlockLabel} style={{color: 'initial'}}>State: {this.state.state}</label>
			            <label className={styles.displayBlockLabel} style={{color: this.state.color1}}>Color 1: {this.state.color1}</label>
			            <label className={styles.displayBlockLabel} style={{color: this.state.color2}}>Color 2: {this.state.color2}</label>
			            <label className={styles.displayBlockLabel} style={{color: this.state.color3}}>Color 3: {this.state.color3}</label>		            
		            </div>
		            <div className={styles.verticalOrder}>										
						<label id="beforeUpdateState" className={styles.displayBlockLabel} >Prior state: Not defined</label>
			            <label id="beforeUpdateColor1" className={styles.displayBlockLabel} >Prior color 1: Not defined</label>
			            <label id="beforeUpdateColor2" className={styles.displayBlockLabel} >Prior color 2: Not defined</label>
			            <label id="beforeUpdateColor3" className={styles.displayBlockLabel} >Prior color 3: Not defined</label>		            
		            </div>
	            </div>

	            <div className={[styles.horizontalOrder, styles.emptySpaceMargin].join(' ')}>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} onClick={this.resetColor}>Reset Color</button>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} onClick={this.changeColor}>Change Color</button>
		            <button id='GetSnapshotBeforeUpdateExampleDisplaybutton' type='button' className={['w3-card-2 w3-button codeButton', styles.submitButton].join(' ')} 
		            	onClick={this.displayCode}>Display Code</button>
	            </div>
          	</article>
		);
	}
}

class GetSnapshotBeforeUpdateExampleCodeComponent extends Component {
	render() {
		return(
			<div id="GetSnapshotBeforeUpdateExampleCode" className={['w3-card-2 imageHolder', styles.codeComponentImg].join(' ')}>
				<img src={GetSnapshotBeforeUpdateExampleCode} alt='setState Example Code' />
            </div>
		);
	}
}
//
export { GetSnapshotBeforeUpdateExampleCodeComponent };
export default GetSnapshotBeforeUpdateExample;