import { useState } from 'react';

const useError = () => {
	const errorData = {
		username: null,
		email: null,
		roll: null,
		phone: null,
		linkedin: null,
		branch: null,
		year: null,
		preference1: null,
		preference2: null,
		preference3: null,
		resume: null,
		q1: null,
		q2: null,
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
				if (!value.match(/^[\w-\.]+@somaiya\.edu$/)) {
					setTrue('email', 'Invalid email address');
				} else {
					setFalse('email');
				}
				break;
			case 'roll':
				if (value.length !== 11) {
					setTrue('roll', 'Roll number must be 11 digits long');
				} else {
					setFalse('roll');
				}
				break;
			case 'phone':
				if (value.length !== 10) {
					setTrue('phone', 'Phone number must be 10 digits long');
				} else {
					setFalse('phone');
				}
				break;
			case 'linkedin':
				if (!value.match(/^https?:\/\/(www\.)?linkedin\.com\/in\/.+$/)) {
					setTrue('linkedin', 'Invalid LinkedIn profile link');
				} else {
					setFalse('linkedin');
				}
				break;
			case 'branch':
				if (value === '') {
					setTrue('branch', 'Branch must be selected');
				} else {
					setFalse('branch');
				}
				break;
			case 'year':
				if (value === '') {
					setTrue('year', 'Year must be selected');
				} else {
					setFalse('year');
				}
				break;
			case 'preference1':
			case 'preference2':
			case 'preference3':
				if (value === '') {
					setTrue(key, 'Preference must be selected');
				} else {
					setFalse(key);
				}
				break;
			case 'resume':
				if (!value.startsWith('https://drive.google.com/file/')) {
					setTrue('resume', 'Invalid Google Drive file link');
				} else {
					setFalse('resume');
				}
				break;
			case 'q1':
				if (value.length < 100) {
					setTrue('q1', 'Answer must be atleast 100 characters long');
				} else {
					setFalse('q1');
				}
				break;
			case 'q2':
				if (value.length < 100) {
					setTrue('q2', 'Answer must be atleast 100 characters long');
				} else {
					setFalse('q2');
				}
				break;
		}
	};

	return { error, setError, validate };
};

export default useError;
