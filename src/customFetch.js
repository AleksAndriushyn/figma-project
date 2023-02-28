export const customFetch = async (url, data = null) => {
	return await fetch(url, data).then(async (res) => await res.json());
};
