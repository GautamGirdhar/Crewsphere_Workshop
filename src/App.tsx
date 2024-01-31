// import { AE_AMOUNT_FORMATS } from '@aeternity/aepp-sdk';
import React from 'react';

import './App.css';
import Connect from './components/Connect.js';
// import Questions from './Questions.js';
// import Table from './Table';
import Services from './Services';
import Box from './Box';
import Navbar from './Navbar';

const App = () => {
	return (
		<div className='bg-#FFF8E3 m-8 p-8 text-center'>
			<Navbar/>
		< Services/>
		<Box/>
		<Connect/>
		{/* < Table/> */}

		</div>
	
	);
};

export default App;
