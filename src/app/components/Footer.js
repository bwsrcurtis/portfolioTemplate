import React from 'react';

const Footer = ({ footerText }) => {
	return (
		<footer className='w-full flex items-center bg-secondary
		dark:bg-darkSecondary px-12 py-1 h-14 mt-8'>
			<h1 className='text-black text-right'>
				{footerText}
			</h1>
		</footer>
	);
};

export default Footer;
