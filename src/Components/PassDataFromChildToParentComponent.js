/* PassDataFromChildToParentComponent */

import React, { Component } from 'react';
import styles from './../CSS/allComponentsCSS.module.css';
import PassDataFromChildToParentCodeImg from './../Images/PassDataFromChildToParentCodeComponent.png';

class PassDataFromChildToParentComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};

		this.getValueFromChildComp = this.getValueFromChildComp.bind(this);
	}

	getValueFromChildComp = (evt) => {
		this.setState({
			value: evt
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
 		if (document.getElementById('PassDataFromChildToParentCodeImg').style.display !== 'block') {
 			this.closeAllCodeElements();
 			
 			document.getElementById('PassDataFromChildToParentCodeImg').style.display = 'block';
 			document.getElementById('PassDataFromChildToParentCodeImgDisplaybutton').textContent = 'Hide Code';
 		} else {
 			this.closeAllCodeElements();
 		} 		
 	}

	render() {
		return(
			<article className={["w3-card-2", styles.displayBlock, styles.emptySpace].join(' ')}>
			
				<h3 className={styles.displayBlockTitle}><span style={{color: 'red'}}>Passing Data from Child to Parent Component</span></h3>				

				<div className={styles.componentsHolder}>
					<div className={styles.componentElements}>
						<label className={styles.displayBlockLabel2}>Parent Component</label>
						<input className={styles.comInput} value={ this.state.value } disabled />
					</div>

					{ <ChildComponent func={ this.getValueFromChildComp } /> }							
				</div>

				<div className={[styles.horizontalOrder, styles.emptySpaceMargin].join(' ')}>
		            <button id='PassDataFromChildToParentCodeImgDisplaybutton' type='button' 
		            	className={['w3-card-2 w3-button codeButton', styles.submitButton].join(' ')} 
		            	onClick={this.displayCode}>Display Code</button>
	            </div>
				
          	</article>
		);
	}
}
//
class ChildComponent extends Component {

	constructor(props) {
		super(props);

		this.state = ({
			childInput: ''
		});
	}

	onChangeHandler = (evt) => {
		let name = evt.target.name;
		let value = evt.target.value;

		this.setState({
			[name]: value
		});

		this.props.func( value );
	}	

	render() {

		return(
			<div className={styles.componentElements}>			
				<label className={styles.displayBlockLabel2}>Child Component</label>
				<input name='childInput' className={styles.comInput}  
					onChange={ this.onChangeHandler }
				/>
			</div>
		);	
	}
}
//
//
class PassDataFromChildToParentCodeComponent extends Component {
	render() {
		return(
			<div id="PassDataFromChildToParentCodeImg" className={['w3-card-2 imageHolder', styles.codeComponentImg].join(' ')}>
				<img src={PassDataFromChildToParentCodeImg} alt='PassDataFromChildToParentCodeImg Example Code' />
            </div>
		);
	}
}
//
export { PassDataFromChildToParentCodeComponent };
export default PassDataFromChildToParentComponent;