import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'w3-css/4/w3pro.css';
import styles from './Footer.module.css';

class Footer extends Component {
	render() {
		return(
			<footer className={styles.footer}>
				<div className={styles.visitCounter}>You are visitor number 5017. Thank you for visiting us.</div>

				<div className={["w3-text-light-grey", styles.footerRights].join(' ')}>
					<small className={styles.footerCopyright}>Copyrights &copy; 2019. All rights reserved.</small>
			        <small className={styles.footerDeveloper}>Developed by&nbsp;
			        	<a className={styles.footerDeveloperAnchor} href='mailto:veli.rexhepi@sallyportglobal.com'>Veli Rexhepi</a>
		        	</small>
			    </div>
			        
			</footer>
		);
	}
}

export default Footer;