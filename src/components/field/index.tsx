import React, { ChangeEvent, FC } from 'react';

interface IProps {
	id: string;
	label: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	value: string;
}

const Field: FC<IProps> = ({ id, label, onChange, type, value }) => (
	<div>
		<label htmlFor={id}>{label}</label>
		<input id={id} onChange={onChange} type={type} value={value} />
	</div>
);

export default Field;
