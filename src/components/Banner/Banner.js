import { Button } from './../index';
import fotoBanner from '../../assets/images/Home-sintexto-mobile.png';
import './Banner.scss';

export const Banner = () => {
	return (
		<div id='Banner' className='banner container'>
			<div className=' banner__content'>
				<div className='banner__titles'>
					<h1 className='banner__titles__main'>La Mamma Pedidos</h1>
					<h4 className='banner__titles__secondary'>La rica comida</h4>
				</div>
				<div className='banner__image'>
					<img src={fotoBanner} alt='la-mamma-banner' className='banner__image--mobile' />
				</div>
				<div>
					<Button path={'/categorias/'} content={'Ver Carta Completa'} className={'button__red'} />
				</div>
			</div>
		</div>
	);
};
