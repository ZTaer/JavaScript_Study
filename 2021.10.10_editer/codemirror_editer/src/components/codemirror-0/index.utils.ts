import jsonBeautify from 'json-beautify';

export const handleUtilsCpuJsonBeautify = (data = {}) => {
	try {
		let result = data;
		result = jsonBeautify(
			typeof data === 'string' ? JSON.parse(data) : data,
			null,
			2,
			80
		);
		return result;
	} catch {
		console.warn('handleUtilsCpuJsonBeautify error');
		return data;
	}
};
