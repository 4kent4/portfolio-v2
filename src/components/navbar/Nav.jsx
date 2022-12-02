import './nav.css';
import { AiFillHome } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { AiFillProject } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function Nav({ rotateExpand }) {
	const [activeNav, setActiveNav] = useState('#');

	const container = {
		hidden: {
			borderRadius: '50$',
			y: '-50%',
			scale: 0.1,
			opacity: 0,
			transition: { delay: 0.6 },
		},
		show: { y: 0, scale: 1, opacity: 1 },
	};

	const item = {
		hidden: { y: '-50%', scale: 0.1, opacity: 0, rotate: 360 },
		show: { y: 0, scale: 1, opacity: 1, rotate: -360 },
	};

	return (
		<AnimatePresence>
			{rotateExpand && (
				<motion.nav
					key='container'
					initial='hidden'
					animate='show'
					exit='hidden'
					variants={container}
					className='nav'
				>
					<motion.a
						key='icon1'
						initial='hidden'
						animate='show'
						exit='hidden'
						transition={{ duration: 0.1 }}
						variants={item}
						onClick={() => {
							setActiveNav('#');
						}}
						className={activeNav === '#' ? 'active' : 'nav-icon'}
						href='#'
					>
						<AiFillHome />
					</motion.a>
					<motion.a
						key='icon2'
						initial='hidden'
						animate='show'
						exit='hidden'
						transition={{ duration: 0.2 }}
						variants={item}
						onClick={() => {
							setActiveNav('#about');
						}}
						className={activeNav === '#about' ? 'active' : 'nav-icon'}
						href='#about'
					>
						<FaUserAlt />
					</motion.a>
					<motion.a
						key='icon3'
						initial='hidden'
						animate='show'
						exit='hidden'
						transition={{ duration: 0.3 }}
						variants={item}
						onClick={() => {
							setActiveNav('#skill');
						}}
						className={activeNav === '#skill' ? 'active' : 'nav-icon'}
						href='#skills'
					>
						<GiSkills />
					</motion.a>
					<motion.a
						key='icon4'
						initial='hidden'
						animate='show'
						exit='hidden'
						transition={{ duration: 0.4 }}
						variants={item}
						onClick={() => {
							setActiveNav('#portfolio');
						}}
						className={activeNav === '#portfolio' ? 'active' : 'nav-icon'}
						href='#portfolio'
					>
						<AiFillProject />
					</motion.a>
					<motion.a
						key='icon5'
						initial='hidden'
						animate='show'
						exit='hidden'
						transition={{ duration: 0.5 }}
						variants={item}
						onClick={() => {
							setActiveNav('#contact');
						}}
						className={activeNav === '#contact' ? 'active' : 'nav-icon'}
						href='#contact'
					>
						<ImPhone />
					</motion.a>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}
export default Nav;
