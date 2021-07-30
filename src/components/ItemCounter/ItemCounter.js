import { useState } from 'react';
import './ItemCounter.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './ItemCounter.scss';
// import '../Button/Button.scss';

export const ItemCounter = ({ initialValue, maxValue, onAdd }) => {
	const [contador, setContador] = useState(initialValue);

	const addToCounter = () => {
		if (contador < maxValue) {
			setContador((prevContador) => {
				let contador = prevContador + 1;
				onAdd(contador);
				return contador;
			});
		}
	};

	const substractCounter = () => {
		if (contador > initialValue) {
			setContador((prevContador) => {
				let contador = prevContador - 1;
				onAdd(contador);
				return contador;
			});
		}
	};

	return (
		<div id='ItemCounter' className='contador'>
			<div className=' contador__buttons'>
				<p className='contador__buttons__num'> {contador} </p>
				<div className='contador__buttons__chevrons'>
					<button className='contador__buttons__counter' onClick={addToCounter}>
						<FaChevronUp />
					</button>
					<button className='contador__buttons__counter' onClick={substractCounter}>
						<FaChevronDown />
					</button>
				</div>
			</div>
		</div>
	);
};
