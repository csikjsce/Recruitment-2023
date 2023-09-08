import { useState, useEffect } from 'react';

const useError = () => {
	const errorData = {
		username: null,
		email: null,
		phone: null,
		branch: null,
		preference: null,
		resume: null,
		question: null,
	};

	const [error, setError] = useState(errorData);

	const setTrue = (key, dikkat) => {
		setError((prev) => {
			return { ...prev, [key]: dikkat };
		});
	};

	const setFalse = (key) => {
		setError((prev) => {
			return { ...prev, [key]: false };
		});
	};

	const validate = (key, value) => {
		switch (key) {
			case 'username':
				if (value.length < 2) {
					setTrue('username', 'Name must not be empty');
				} else {
					setFalse('username');
				}
				break;
			case 'email':
				if (!value.match(/^[\w-/.]+@somaiya\.edu$/)) {
					setTrue('email', 'Invalid email address');
				} else {
					setFalse('email');
				}
				break;
			case 'phone':
				if (value.length !== 10) {
					setTrue('phone', 'Phone number must be 10 digits long');
				} else {
					setFalse('phone');
				}
				break;
			case 'branch':
				if (value === '') {
					setTrue('branch', 'Branch must be selected');
				} else {
					setFalse('branch');
				}
				break;
			case 'preference':
				if (value === '') {
					setTrue(key, 'Preference must be selected');
				} else {
					setFalse(key);
				}
				break;
			case 'resume':
				if (!value.match(/(drive\.google\.com\/file\/|docs\.google\.com\/document\/)/)) {
					setTrue('resume', 'Invalid Google Drive file link');
				} else {
					setFalse('resume');
				}
				break;
			case 'question':
				if (value.length < 100) {
					setTrue('question', 'Answer must be atleast 100 characters long');
				} else {
					setFalse('question');
				}
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		if (localStorage.getItem('data')) {
			const entries = Object.entries(JSON.parse(localStorage.getItem('data'))).filter(([key, value]) => value !== '');
			const keys = entries.map(([key, value]) => key);
			const values = entries.map(([key, value]) => value);
			for (let i = 0; i < keys.length; i++) {
				validate(keys[i], values[i]);
			}
		}
		// eslint-disable-next-line
	}, []);

	return { error, setError, validate };
};

export default useError;
