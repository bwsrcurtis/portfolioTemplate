import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {

	return (
		<header className='flex justify-between items-center px-12 py-1 relative bg-primary h-14'>
			<Link href='/' className='flex items-center space-x-2'>
				<Image src='logo.svg' alt="logo" width={50} height={50} className=' fill-text'></Image>
				<h1 className='text-text md:text-3xl text-xl'>Your Portfolio</h1>
			</Link>
			<nav className='space-x-10 text-lg'>
				<a
					href='/#offerings'
					className="hover:underline hidden lg:inline">
					What We Offer
				</a>
				<a href='/#work' className="hover:underline hidden lg:inline">
					Templates
				</a>

				<button
					className='w-30 z-10 hover:bg-tertiary bg-secondary
					p-2 rounded-lg hidden md:inline'>
					<a href='/#getstarted'>Build Now</a>
				</button>

			</nav>
		</header>
	);
};

export default Header;
