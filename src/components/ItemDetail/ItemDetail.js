import { useState } from 'react';
import { ItemCounter } from '../index';
import useAppContext from '../../context/useAppContext';
import Sello from '../../assets/images/Elemento-decorativo-1.png';
import { BiShoppingBag } from 'react-icons/bi';
import './ItemDetail.scss';

export const ItemDetail = ({ product }) => {
	const [quantity, setQuantity] = useState(1);
	const { addProduct } = useAppContext();

	const handleCounter = (contador) => {
		setQuantity(contador);
	};

	const addToCart = () => {
		addProduct(product, quantity);
	};

	return (
		<div id='Detail' className='container '>
			<div className='item '>
				<div className='item__imageContainer'>
					<img className='item__imageContainer__img' src={product.image} alt={`img-${product.id}`} />
					<div className='item__imageContainer__sello'>
						<img className='' src={Sello} alt={`img`} />
					</div>
				</div>
				<div className='item__detail'>
					<div className='item__detail__txt'>
						<p className='item__detail__titulo'>{product.title} </p>
						<p className='item__detail__descrip'>{product.description} </p>
						<p className='item__detail__precio'>${product.price} </p>
					</div>
					<ItemCounter initialValue={1} maxValue={15} onAdd={handleCounter} />
					<button className='button__red item__detail__btn' onClick={addToCart}>
						<BiShoppingBag />
						<p>Añadir</p> {/* ({quantity}) */}
					</button>
				</div>
			</div>
		</div>
	);
};
