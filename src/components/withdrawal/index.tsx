import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FaArrowLeft } from 'react-icons/fa';

import './styles.scss';

const Withdrawal: React.FC = () => {
	return (
		<Formik
			initialValues={{ amount: '' }}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 1));
					setSubmitting(false);
				}, 500);
			}}
		>
			{props => (
				<Form className='amount-form' onSubmit={props.handleSubmit}>
					<h2>Select amount</h2>
					{/* <p>{JSON.stringify(props)}</p> */}
					<Field
						type='number'
						name='amount'
						className='amount'
						placeholder='set amount'
						onChange={props.handleChange}
					/>
					<button type='button' className='clear-one'>
						<FaArrowLeft />
					</button>
					<div className='numpad'>
						{numbers.map((n, i) => (
							<NumPadBtn
								onClick={() => (props.values.amount += n.num)}
								key={i}
								dataNumber={n.num}
							/>
						))}
					</div>
					{/* {props.errors.amount && <div id='errors'>{props.errors.amount}</div>} */}

					<button className='submit-btn' type='submit'>
						submit
					</button>
				</Form>
			)}
		</Formik>
	);
};

interface INumPadBtn {
	dataNumber: number;
	onClick: () => void;
}

const NumPadBtn: React.FC<INumPadBtn> = ({ dataNumber, onClick }) => (
	<button
		type='button'
		className={dataNumber ? `number-${dataNumber}` : 'zero'}
		data-number={dataNumber}
		onClick={onClick}
	>
		{dataNumber}
	</button>
);

const numbers = [
	{ num: 1 },
	{ num: 2 },
	{ num: 3 },
	{ num: 4 },
	{ num: 5 },
	{ num: 6 },
	{ num: 7 },
	{ num: 8 },
	{ num: 9 },
	{ num: 0 }
];

export default Withdrawal;
