import { useState } from 'react';
import formdata from '../data/form/form.json';

const useForm = () => {
	const initialData = {
		username: '',
		email: '',
		roll: '',
		phone: '',
		linkedin: '',
		branch: '',
		year: '',
		preference1: '',
		preference2: '',
		preference3: '',
		resume: '',
		q1: '',
		q2: '',
	};

	const [data, setData] = useState(initialData);

	const updateData = (key, value) => {
		setData((prev) => {
			return { ...prev, [key]: value };
		});
	};

	const preferences = formdata?.preference[data?.year || 2026] || [];

	return { data, setData, initialData, updateData, preferences };
};

export default useForm;
