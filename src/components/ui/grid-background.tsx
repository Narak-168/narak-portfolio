/** @format */

const GridBackground = () => {
	return (
		<div className='absolute inset-0 bg-white dark:bg-gray-950'>
			<div
				className='absolute inset-0 opacity-8 dark:opacity-8'
				style={{
					backgroundImage: `
						linear-gradient(to right, rgb(156 163 175) 1px, transparent 1px),
						linear-gradient(to bottom, rgb(156 163 175) 1px, transparent 1px)
					`,
					backgroundSize: "30px 30px",
				}}
			/>
			{/* Soft edge gradients */}
			<div className='absolute inset-0 bg-linear-to-br from-gray-50/50 via-transparent to-gray-100/50 dark:from-gray-900/50 dark:via-transparent dark:to-gray-800/50' />
			<div className='absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white dark:to-gray-950' />
		</div>
	);
};

export default GridBackground;
