import { useEffect, useState } from 'react';
import useAppContext from '../../context/useAppContext';
import { BiPlus, BiMinus } from 'react-icons/bi';
import './CartCounter.scss';

export const CartCounter = ({ inicialValue, product }) => {
	const [contador, setContador] = useState(0);
	const { handleQuantity } = useAppContext();

	const addToCounter = () => {
		if (contador < 10) {
			setContador((prevContador) => {
				let contador = prevContador + 1;
				handleQuantity(product, contador);
				return contador;
			});
		}
	};

	const substractCounter = () => {
		if (contador > 1) {
			setContador((prevContador) => {
				let contador = prevContador - 1;
				handleQuantity(product, contador);
				return contador;
			});
		}
	};

	useEffect(() => {
		setContador(inicialValue);
	}, [inicialValue]);

	return (
		<>
			<div className='CartCounter'>
				<BiMinus className='CartCounter__minus' onClick={substractCounter} />
				<p className='CartCounter__cantidad'> {contador} </p>
				<BiPlus className='CartCounter__plus' onClick={addToCounter} />
			</div>
		</>
	);
};
