import React from 'react';
import Feature from './Feature.js';
import { FaBuromobelexperte } from 'react-icons/fa';
import { BsPhone, BsLightningCharge, BsSearch } from 'react-icons/bs';
import { FiTool } from 'react-icons/fi';

const Offerings = () => {
	return (
		<>
			<div id='offerings' className='flex w-5/6 mt-6 mx-auto pt-6 pb-12 justify-between'>
				<div className='text-center text-text mx-auto w-[38rem]'>
					<p className='text-5xl mb-4'>
						<span className='text-primary'>What </span>
						We Offer</p>
					<p className='text-lg text-textSecondary'>
						Every business needs a website, but it can be overwhelming building one yourself.
						That&apos;s where we come in.
						We offer fast, responsive websites built from scratch for your business.
					</p>
				</div>
			</div>
			<div className='w-3/4 mx-auto flex flex-row justify-evenly flex-wrap'>
				<Feature
					title="Netlify CMS"
					description="Freely Edit Your Own Site Content With Netlify CMS"
					Icon={<FaBuromobelexperte />}>
				</Feature>
				<Feature
					title="SEO"
					description="Improve Your Google Rankings With Keywords"
					Icon={<BsSearch />}>
				</Feature>
				<Feature
					title="Responsive Design"
					description="Your Site Will Look Great On Mobile and Desktop"
					Icon={<BsPhone />}>
				</Feature>
				<Feature
					title="Blazing Speed"
					description="Your Site Will Load Quickly Without Costly Plugins"
					Icon={<BsLightningCharge />}>
				</Feature>
				<Feature
					title="No Maintenance"
					description="Once Your Site Is Live, The Work Is Done"
					Icon={<FiTool />}>
				</Feature>
			</div>
		</>
	);
};

export default Offerings;
