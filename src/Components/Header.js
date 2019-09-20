import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'w3-css/4/w3pro.css';
import styles from './Header.module.css';
import companyLogo from './../Images/Sallyport Caliburn Logo 3 250x50.png';

class Header extends Component {
	render() {
		return(
			<header className={["w3-card-4", styles.header].join(' ')}>
				<div className={styles.headerContainer}>
					<a className={styles.companyLogoHolder} href="" target="_parent">
						<img src={companyLogo} alt="Company Logo" width="250" height="50" />
					</a>

					<div>
						<p className={styles.siteTitle}>React UI Samples</p>
			            <p className={styles.siteTitleDescription}>Interactive user interface developed using React components & methods</p>
			        </div>

			        <div className={styles.searchBar}>
			            {/*<input type="text" className={["w3-bar-item w3-input w3-white w3-mobile w3-border", styles.searchBarInput].join(' ')} 
			            	placeholder="Search .." />
			            <button type="button" className={["w3-bar-item w3-button w3-green w3-mobile", styles.searchBarButton].join(' ')}>Go</button>*/}
			        </div>
				</div>
			</header>
		);
	}
}

export default Header;