/* ReactFormComponent */

import React, { Component } from 'react';
import styles from './../CSS/allComponentsCSS.module.css';
import ReactFormComponentCodeImg from './../Images/ReactFormComponentCodeComponent.png';

class ReactFormComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			fullName: '',
			age: null
		};		
	}

	onChangeHandler = (evt) => {
		let name = evt.target.name;
		let value = evt.target.value;

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
 		if (document.getElementById('ReactFormComponentCodeImg').style.display !== 'block') {
 			this.closeAllCodeElements();
 			
 			document.getElementById('ReactFormComponentCodeImg').style.display = 'block';
 			document.getElementById('ReactFormComponentCodeDisplaybutton').textContent = 'Hide Code';
 		} else {
 			this.closeAllCodeElements();
 		} 		
 	}

	render() {
		return(
			<article className={["w3-card-2", styles.displayBlock, styles.emptySpace].join(' ')}>
			
				<h3 className={styles.displayBlockTitle}><span style={{color: 'red'}}>Get data from React form inputs</span></h3>				

				<div className={styles.horizontalOrder}>
					<div className={styles.verticalOrder}>
						<div className={styles.componentElements}>
							<input name='fullName' type='text' className={styles.comInput} maxLength='15'
							onChange={ this.onChangeHandler } placeholder='React form input - Name' />
						</div>

						<div className={styles.componentElements}>
							<input name='age' type='number' className={styles.comInput}
							onChange={ this.onChangeHandler } placeholder='React form input - Age' />
						</div>
					</div>

					<div className={styles.verticalOrder}>
						<label className={styles.displayBlockLabel} >React form inputs data</label>	
						<label className={styles.displayBlockLabel} >Name: { this.state.fullName }</label>
			            <label className={styles.displayBlockLabel} >Age: { this.state.age }</label>
					</div>
				</div>

				<div className={[styles.horizontalOrder, styles.emptySpaceMargin].join(' ')}>
		            <button id='ReactFormComponentCodeDisplaybutton' type='button' 
		            	className={['w3-card-2 w3-button codeButton', styles.submitButton].join(' ')} 
		            	onClick={this.displayCode}>Display Code</button>
	            </div>
				
          	</article>
		);
	}
}
//
class ReactFormComponentCodeComponent extends Component {
	render() {
		return(
			<div id="ReactFormComponentCodeImg" className={['w3-card-2 imageHolder', styles.codeComponentImg].join(' ')}>
				<img src={ReactFormComponentCodeImg} alt='ReactFormComponentCodeImg Example Code' />
            </div>
		);
	}
}
//
export { ReactFormComponentCodeComponent };
export default ReactFormComponent;