import { useEffect, useState } from 'react';
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

	useEffect(() => {
		if (localStorage.getItem('data')) {
			const keys = Object.keys(JSON.parse(localStorage.getItem('data')));
			const values = Object.values(JSON.parse(localStorage.getItem('data')));
			for (let i = 0; i < keys.length; i++) {
				updateData(keys[i], values[i]);
			}
		}
	}, []);

	const preferences = formdata?.preference[data?.year || 2026] || [];

	return { data, setData, initialData, updateData, preferences };
};

export default useForm;
