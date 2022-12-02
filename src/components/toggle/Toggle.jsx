import { IoIosArrowDropupCircle } from 'react-icons/io';
import './toggle.css';
import { motion } from 'framer-motion';

function Toggle({ rotateExpand, onClickHandler }) {
	return (
		<div className='nav-toggle'>
			<motion.div
				onClick={onClickHandler}
				animate={{ rotate: rotateExpand ? 180 : 0 }}
				className='arrow-con'
			>
				<span className={rotateExpand ? 'arrow-clicked' : 'arrow-icon'}>
					<IoIosArrowDropupCircle />
				</span>
			</motion.div>
		</div>
	);
}
export default Toggle;
