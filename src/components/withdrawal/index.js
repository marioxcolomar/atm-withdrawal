import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FaArrowLeft } from 'react-icons/fa';

import './styles.scss';

export default function Withdrawal() {
	return (
		<Formik
			initialValues={{ amount: '' }}
			validate={values => {
				const errors = {};

				if (!values.amount) {
					errors.amount = 'Required';
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 1));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({ isSubmitting }) => (
				<Form className='amount-form'>
					<h2>Select amount</h2>
					<Field type='number' name='amount' className='amount' />
					<button className='clear-one'>
						<FaArrowLeft />
					</button>
					<div className='numpad'>
						{numbers.map((n, i) => (
							<NumPadBtn key={i} dataNumber={n.num} />
						))}
					</div>
					<button className='submit-btn' type='submit' disabled={isSubmitting}>
						submit
					</button>
				</Form>
			)}
		</Formik>
	);
}

const NumPadBtn = ({ dataNumber }) => (
	<button className='number' data-number={dataNumber}>
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