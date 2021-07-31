import useAppContext from '../../context/useAppContext';
import { CartCounter } from '../index';
import { IoCloseCircleOutline } from 'react-icons/io5';
import './CartItem.scss';

export const CartItem = ({ product }) => {
	const { deleteProduct } = useAppContext();

	const deleteItem = (id) => {
		deleteProduct(id);
	};

	return (
		<div className='CartItem'>
			<div className='CartItem__detail '>
				<div className='CartItem__img'>
					<img src={product.image} alt={`img-${product.id}`} className='CartItem__img-imagen' />
				</div>
				<div className='CartItem__item'>
					<h5> {product.title} </h5>
					<p>{product.description}</p>
				</div>
				<div className='CartItem__counter'>
					<CartCounter inicialValue={product.quantity} product={product} />
				</div>
				<div className='CartItem__price'>
					<p className='CartItem__price'> ${product.price} </p>
				</div>
				<div className='CartItem__delete'>
					<IoCloseCircleOutline className='CartItem__delete__btn' onClick={() => deleteItem(product.id)} />
				</div>
			</div>
		</div>
	);
};
