function Button({ filter, button }) {
	return (
		<div className='btn-con'>
			{button.map((cat) => {
				return (
					<button
						className='btn'
						onClick={() => {
							filter(cat);
						}}
					>
						{cat}
					</button>
				);
			})}
		</div>
	);
}
export default Button;
