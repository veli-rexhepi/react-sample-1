/* Method ShouldComponentUpdateExample() */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import styles from './allComponentsCSS.module.css';
import ShouldComponentUpdateExampleCode from './../Images/ShouldComponentUpdateCode.png';

const options = [
 		{value: true, label: 'Allowed'},
 		{value: false, label: 'Disallowed'}
	];

class ShouldComponentUpdateExample extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	state: "initial values",
	      	color1: "red", 
	      	color2: "green", 
	      	color3: "blue",
	      	allowUpdate: props.allowUpdate
	    };	    

	    //console.log('this.props.allowUpdate: ', this.props.allowUpdate, 'this.state.allowUpdate: ', this.state.allowUpdate);
  	}

  	// Allow or disallow updating of the component on react-select change
  	shouldComponentUpdate() {
  		console.log('shouldComponentUpdate() this.props.allowUpdate: ', this.props.allowUpdate, 'this.state.allowUpdate: ', this.state.allowUpdate);
  		return this.state.allowUpdate
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
 		if (document.getElementById('ShouldComponentUpdateExampleCode').style.display != 'block') {
 			this.closeAllCodeElements();
 			
 			document.getElementById('ShouldComponentUpdateExampleCode').style.display = 'block';
 			document.getElementById('ShouldComponentUpdateExampleDisplaybutton').textContent = 'Hide Code';
 		} else {
 			this.closeAllCodeElements();
 		} 		
 	}

 	// Defining the react-select component initial state
 	updateCompState = {
 		//selectedOption: {value: this.props.allowUpdate, label: (this.props.allowUpdate == 'true') ? 'Allowed' : 'Disallowed'},
 		//selectedOption: {value: this.state.allowUpdate, label: (this.state.allowUpdate == 'true') ? 'Allowed' : 'Disallowed'},
 		selectedOption: null,
 	}

 	// Passing the react-select selected value to object state
 	handleChange = (selectedOption) => {
 		this.setState({ 
 			selectedOption,
 			allowUpdate: selectedOption.value	
 		});
 	}

 	render() {
 		// Initializing react-select
		const { selectedOption } = this.updateCompState;
		console.log('this.props.allowUpdate: ', this.props.allowUpdate, 'this.state.allowUpdate: ', this.state.allowUpdate);

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
		            <div className={styles.verticalOrder}>										
						<label id="beforeUpdateState" className={styles.displayBlockLabel} >Updating Component</label>			            
                    	<Select 
                    		value = {selectedOption}
                    		onChange = {this.handleChange}
                    		options = {options} 
                		/>
		            </div>
	            </div>

	            <div className={styles.horizontalOrder}>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} onClick={this.resetColor}>Reset Color</button>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} onClick={this.changeColor}>Change Color</button>
		            <button id='ShouldComponentUpdateExampleDisplaybutton' type='button' className={['w3-card-2 w3-button codeButton', styles.submitButton].join(' ')} 
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