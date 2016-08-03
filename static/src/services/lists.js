import xFetch from './xFetch';

const BASE_PATH = `${location.protocol}//${location.host}`;
const GET_WEEKLY_LIST = '/service/get-weekly-list';

export async function getAll(options) {
    let url = new URL(GET_WEEKLY_LIST, BASE_PATH);
    Object.keys(options).forEach(key => url.searchParams.append(key, options[key]));

	return xFetch(url.href, {
	    mode: 'no-cors',
        headers: {
            // 'Accept': 'application/json',
        }
    });
}
