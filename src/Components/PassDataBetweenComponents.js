/* PassDataBetweenComponents */

import React, { Component } from 'react';
import styles from './../CSS/allComponentsCSS.module.css';
// import PassDataBetweenComponentsCode from './../Images/PassDataBetweenComponentsCode.png';

class PassDataBetweenComponents extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: '',
			parentInput: ''
		};

		this.getValueFromChildComp = this.getValueFromChildComp.bind(this);
	}

	getValueFromChildComp = (evt) => {
		this.setState({
			value: evt
		});
	}

	onChangeHandler = (evt2) => {
		let name = evt2.target.name;
		let value = evt2.target.value;

		this.setState({
			[name]: (/*this.state.parentInput + */value)
		});
	}

	render() {
		return(
			<article className={["w3-card-2", styles.displayBlock, styles.emptySpace].join(' ')}>
			
				<h3 className={styles.displayBlockTitle}><span style={{color: 'red'}}>Passing Data between Components</span></h3>				

				<div className={styles.componentsHolder}>
					<div className={styles.componentElements}>
						<label className={styles.displayBlockLabel2}>Parent Component</label>
						<input name='parentInput' className={styles.comInput} value={ this.state.value } onChange={ this.onChangeHandler } />
					</div>

					{ <ChildComponent func={ this.getValueFromChildComp } parentInputValue={ this.state.parentInput } /> }							
				</div>

				<div className={[styles.horizontalOrder, styles.emptySpaceMargin].join(' ')}>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} 
		            	onClick={() => this.displayCompContent(true)}>Show Content</button>
		            <button type="button" className={["w3-card-2 w3-button", styles.submitButton].join(' ')} 
		            	onClick={() => this.displayCompContent(false)}>Hide Content</button>
		            <button id='ComponentDidMountExampleDisplaybutton' type='button' className={['w3-card-2 w3-button codeButton', styles.submitButton].join(' ')} 
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
			// childInput: ''
		});
	}

	onChangeHandler = (evt) => {
		let name = evt.target.name;
		let value = evt.target.value;

		this.setState({
			[name]: (/*this.state.childInput + */value)
		});

		this.props.func( /*this.state.childInput + */value );
	}	

	render() {

		if ( this.props.parentInputValue === '') {
			return(
				<div className={styles.componentElements}>			
					<label className={styles.displayBlockLabel2}>Child Component</label>
					<input name='childInput' className={styles.comInput}  
						onChange={ this.onChangeHandler }
					/>
				</div>
			);
		} else {
			return(
				<div className={styles.componentElements}>			
					<label className={styles.displayBlockLabel2}>Child Component</label>
					<input name='childInput' className={styles.comInput}  
						onChange={ this.onChangeHandler } value={ this.props.parentInputValue }
					/>
				</div>
			);
		}		
	}
}
//
export default PassDataBetweenComponents;