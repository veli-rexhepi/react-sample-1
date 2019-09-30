/* PassDataFromParentToChildComponent */

import React, { Component } from 'react';
import styles from './../CSS/allComponentsCSS.module.css';
import PassDataFromParentToChildCodeImg from './../Images/PassDataFromParentToChildCodeComponent.png';

class PassDataFromParentToChildComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			parentInput: ''
		};		
	}

	onChangeHandler = (evt2) => {
		let name = evt2.target.name;
		let value = evt2.target.value;

		this.setState({
			[name]: value
		});
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
 		if (document.getElementById('PassDataFromParentToChildCodeImg').style.display !== 'block') {
 			this.closeAllCodeElements();
 			
 			document.getElementById('PassDataFromParentToChildCodeImg').style.display = 'block';
 			document.getElementById('PassDataFromParentToChildComponentDisplaybutton').textContent = 'Hide Code';
 		} else {
 			this.closeAllCodeElements();
 		} 		
 	}

	render() {
		return(
			<article className={["w3-card-2", styles.displayBlock, styles.emptySpace].join(' ')}>
			
				<h3 className={styles.displayBlockTitle}><span style={{color: 'red'}}>Passing Data from Parent to Child Component</span></h3>				

				<div className={styles.componentsHolder}>
					<div className={styles.componentElements}>
						<label className={styles.displayBlockLabel2}>Parent Component</label>
						<input name='parentInput' className={styles.comInput} onChange={ this.onChangeHandler } />
					</div>

					{ <ChildComponent parentInputValue={ this.state.parentInput } /> }							
				</div>

				<div className={[styles.horizontalOrder, styles.emptySpaceMargin].join(' ')}>
		            <button id='PassDataFromParentToChildComponentDisplaybutton' type='button' 
		            	className={['w3-card-2 w3-button codeButton', styles.submitButton].join(' ')} 
		            	onClick={this.displayCode}>Display Code</button>
	            </div>
				
          	</article>
		);
	}
}
//
class ChildComponent extends Component {

	render() {
		return(
			<div className={styles.componentElements}>			
				<label className={styles.displayBlockLabel2}>Child Component</label>
				<input name='childInput' className={styles.comInput} value={ this.props.parentInputValue } disabled />
			</div>
		);
	}
}
//
class PassDataFromParentToChildCodeComponent extends Component {
	render() {
		return(
			<div id="PassDataFromParentToChildCodeImg" className={['w3-card-2 imageHolder', styles.codeComponentImg].join(' ')}>
				<img src={PassDataFromParentToChildCodeImg} alt='PassDataFromParentToChildCodeImg Example Code' />
            </div>
		);
	}
}
//
export { PassDataFromParentToChildCodeComponent };
export default PassDataFromParentToChildComponent;