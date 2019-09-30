/* Method ShouldComponentUpdateExample() */

import React, { Component } from 'react';
import styles from './../CSS/allComponentsCSS.module.css';
import ShouldComponentUpdateExampleCode from './../Images/ShouldComponentUpdateCode.png';

class ShouldComponentUpdateExample extends Component {

	// Get allowUpdate prop value from component and convert it to the object as required for react-select component
	selectedOption = {
		value: (this.props.allowUpdate === 'true') ? true : false, label: (this.props.allowUpdate === 'true') ? 'Allowed' : 'Disallowed'
	};

	constructor(props) {
	    super(props);

	    this.state = {
	    	state: "initial values",
	      	color1: "red", 
	      	color2: "green", 
	      	color3: "blue"
	    };    
  	}

  	// Allow or disallow updating of the component
  	shouldComponentUpdate() {
  		return this.selectedOption.value;  		
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
 		if (document.getElementById('ShouldComponentUpdateExampleCode').style.display !== 'block') {
 			this.closeAllCodeElements();
 			
 			document.getElementById('ShouldComponentUpdateExampleCode').style.display = 'block';
 			document.getElementById('ShouldComponentUpdateExampleDisplaybutton').textContent = 'Hide Code';
 		} else {
 			this.closeAllCodeElements();
 		} 		
 	} 	

 	setSelectedIfTrue = () => { 		

 		var result;

 		if(this.selectedOption.value === true) { 
 			result = (
			 			<select id='selectOptionElement' className={["w3-card-2", styles.selectOptionElement].join(' ')} 
			 					onChange={ () => this.handleChange() } defaultValue={'Allowed'} >
			        		<option value='Allowed'>Allowed</option>
			        		<option value='Disallowed'>Disallowed</option>
			    		</select>
			 		); //
		} else {
			result = (
			 			<select id='selectOptionElement' className={["w3-card-2", styles.selectOptionElement].join(' ')} 
			 					onChange={ () => this.handleChange() }  defaultValue={'Disallowed'} >
			        		<option value='Allowed'>Allowed</option>
			        		<option value='Disallowed'>Disallowed</option>
			    		</select>
			 		); //
		};

		return result;
 	}

 	handleChange = () => {
 		var selectOptionElement = document.getElementById('selectOptionElement').value;

		this.selectedOption = {
			value: (selectOptionElement === 'Allowed') ? true : false, label: (selectOptionElement === 'Allowed') ? 'Allowed' : 'Disallowed'
		};

		this.render();
 	} 

 	render() {
 		return(			
			<article className={["w3-card-2", styles.displayBlock].join(' ')}>
				<h3 className={styles.displayBlockTitle}>Method <span style={{color: 'red'}}>ShouldComponentUpdate()</span></h3>

				<div className={styles.horizontalOrder}>
					<div className={styles.verticalOrder}>										
						<label className={styles.displayBlockLabel} style={{color: 'initial'}}>State: {this.state.state}</label>
			            <label className={styles.displayBlockLabel} style={{color: this.state.color1}}>Color 1: {this.state.color1}</label>
			            <label className={styles.displayBlockLabel} style={{color: this.state.color2}}>Color 2: {this.state.color2}</label>
			            <label className={styles.displayBlockLabel} style={{color: this.state.color3}}>Color 3: {this.state.color3}</label>		            
		            </div>
		            <div className={[styles.verticalOrder, styles.horizontalOrderRight].join(' ')}>										
						<label className={styles.displayBlockLabel} >Component Update</label>			            
                    	{ this.setSelectedIfTrue() }
		            </div>
	            </div>

	            <div className={[styles.horizontalOrder, styles.emptySpaceMargin].join(' ')}>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} 
		            	onClick={this.resetColor}>Reset Color</button>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} 
		            	onClick={this.changeColor}>Change Color</button>
		            <button id='ShouldComponentUpdateExampleDisplaybutton' type='button' 
		            	className={['w3-card-2 w3-button codeButton', styles.submitButton].join(' ')} 
		            	onClick={this.displayCode}>Display Code</button>	            	
	            </div>
          	</article>
		);
	}
}
//
class ShouldComponentUpdateExampleCodeComponent extends Component {
	render() {
		return(
			<div id="ShouldComponentUpdateExampleCode" className={['w3-card-2 imageHolder', styles.codeComponentImg].join(' ')}>
				<img src={ShouldComponentUpdateExampleCode} alt='setState Example Code' />
            </div>
		);
	}
}
//
export { ShouldComponentUpdateExampleCodeComponent };
export default ShouldComponentUpdateExample;