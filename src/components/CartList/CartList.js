import useAppContext from '../../context/useAppContext';
import { Button, CartItem } from './../index';
import './CartList.scss';

export const CartList = ({ products }) => {
	return (
		<div id='CartList' className='CartList col-12 col-lg-8 '>
			{products.map((product, key) => (
				<CartItem key={key} product={product} />
			))}
		</div>
	);
};
