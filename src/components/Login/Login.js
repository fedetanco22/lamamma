import useAppContext from '../../context/useAppContext';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { FormPayment } from '../index';

export const Login = ({ submitForm }) => {
	const { uiConfig, isSignedIn } = useAppContext();

	return (
		<>
			{!isSignedIn ? (
				<div className='checkout__sections checkout__sections--login'>
					<h6 className='nocheckout__login__titulo'>Para finalizar la compra deberás iniciar sesión</h6>

					<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
				</div>
			) : (
				<div className='checkout__sections checkout__sections--pago'>
					<h6 className='checkout__titulo'>
						Bienvenido <span className='checkout__titulo--weight'>{firebase.auth().currentUser.displayName}</span>! Finalizá tu compra!
					</h6>
					{/* Formulario de pago */}
					<div className='form-container'>
						<FormPayment submitForm={submitForm} />
					</div>
				</div>
			)}
		</>
	);
};
