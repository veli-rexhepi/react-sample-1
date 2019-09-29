/* PassDataBetweenComponents */

import React, { Component } from 'react';
import styles from './../CSS/allComponentsCSS.module.css';
// import PassDataBetweenComponentsCode from './../Images/PassDataBetweenComponentsCode.png';

class PassDataBetweenComponents extends Component {


	render() {
		return(
			<article className={["w3-card-2", styles.displayBlock, styles.emptySpace].join(' ')}>
			
				<h3 className={styles.displayBlockTitle}><span style={{color: 'red'}}>Passing Data between Components</span></h3>
				
				

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
export default PassDataBetweenComponents;