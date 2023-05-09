'use client';

import matter from 'gray-matter'; import React from 'react';

const Footer = async () => {
	const content = await import('../../../content/pages/Footer/Footer.md');
	const local = matter(content.default);
	const data = local.data;

	return (
		<footer className='w-full flex items-center bg-secondary
		dark:bg-darkSecondary px-12 py-1 h-14 mt-8'>
			<h1 className='text-black text-right'>
				{data.footer_text}
			</h1>
		</footer>
	);
};

export default Footer;
