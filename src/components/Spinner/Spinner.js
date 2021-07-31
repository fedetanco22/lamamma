import deco from '../../assets/images/Elemento-decorativo-3.png';
import './Spinner.scss';

export const Spinner = () => {
	return (
		<div className='spinner-cont'>
			<img src={deco} alt='Logo-la-mamma' className='spinner' />
			{/* <div className='sk-folding-cube'>
				<div className='sk-cube1 sk-cube'></div>
				<div className='sk-cube2 sk-cube'></div>
				<div className='sk-cube4 sk-cube'></div>
				<div className='sk-cube3 sk-cube'></div>
			</div> */}
			{/* <h3 className="loading">Loading</h3> */}
		</div>
	);
};
