import { motion, AnimatePresence } from 'framer-motion';

function Menu({ menuItem }) {
	return (
		<AnimatePresence>
			<motion.div layout className='item'>
				{menuItem.map((item) => {
					return (
						<motion.div
							animate={{ opacity: 1, scale: 1 }}
							initial={{ opacity: 0, scale: 1 }}
							exit={{ opacity: 0, scale: 0.1 }}
							layout
							className='data-con'
							key={item.id}
						>
							<div className='img-con'>
								<img src={item.image} alt='' />
							</div>

							<h6>{item.title}</h6>
						</motion.div>
					);
				})}
			</motion.div>
		</AnimatePresence>
	);
}
export default Menu;
