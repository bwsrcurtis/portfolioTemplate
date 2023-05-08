'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSun } from 'react-icons/bi';
import { BiMoon } from 'react-icons/bi';

const Header = () => {

	const [dark, setDark] = useState(false);

	function toggleDark() {

		let html = document.getElementsByTagName('HTML')[0];
		html.classList.toggle('dark');
		setDark(!dark);
	}

	return (
		<header className='flex justify-between items-center px-12 py-1 relative h-14'>
			<Link href='/' className='flex items-center space-x-2'>
				<Image src='logo.svg' alt="logo" width={50} height={50}
					className='fill-text dark:fill-darkText'>

				</Image>
				<h1 className='text-text dark:text-darkText md:text-3xl
				text-xl leading-none tracking-tight'>John Smith</h1>
			</Link>
			<nav className='flex space-x-10 text-lg items-center'>
				<a
					href='/#work'
					className="hover:underline hidden lg:inline">
					Work
				</a>
				<a href='/#about' className="hover:underline hidden lg:inline">
					About
				</a>
				<button
					className='w-30 z-10 hover:scale-105 hover:bg-tertiary
					bg-secondary dark:hover:bg-darkTertiary dark:bg-darkPrimary
					transition delay-100 p-2 border-black border hidden md:inline'>
					<a href='/#contact'>Get in Touch</a>
				</button>
				{dark ? <button className='text-3xl' aria-label='Dark Mode Moon'
					onClick={() => toggleDark()}>
					<BiMoon />
				</button> :
					<button className='text-3xl' aria-label='Light Mode Sun'
						onClick={() => toggleDark()}>
						<BiSun />
					</button>}


			</nav>
		</header >
	);
};

export default Header;
