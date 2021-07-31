import { Button } from './../../components/index';
import useAppContext from '../../context/useAppContext';
import './CartResume.scss';

export const CartResume = ({ products }) => {
	const { totalPrice } = useAppContext();
	return (
		<div id='CartResume' className='CartResume col-12 col-lg-4 '>
			<h3>Resumen</h3>
			<div className='CartResume__itemList col-12  '>
				{products.map((product, key) => (
					<div className='CartResume__itemList__item'>
						<p>{product.title}</p>
						<h3>{product.price * product.quantity}</h3>
					</div>
				))}
			</div>
			<div className='CartResume__buyTotal container'>
				<h5 className='CartResume__buyTotal__title '>
					Total
					<span className='CartResume__buyTotal__title--bold'>${totalPrice()}</span>
				</h5>
				<Button path={'/checkout/'} className={'button__red'} content={'Comprar'} />
			</div>
		</div>
	);
};
