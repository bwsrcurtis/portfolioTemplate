import Link from 'next/link.js';

export default function Success() {
	return (
		<main className="bg-secondary h-[calc(100vh-112px)]">
			<div className="flex justify-center items-center h-full w-[32rem] mx-auto rounded-lg">
				<div className='bg-text w-fit h-fit flex flex-col items-center rounded-xl p-16'>
					<h1 className="text-7xl text-center text-primary">Thank You</h1>
					<Link href='/' className='bg-primary p-6 rounded-xl mt-8 text-2xl'>
						<button>Return Home</button>
					</Link>
				</div>
			</div>
		</main>
	);
}
