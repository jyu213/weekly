import xFetch from './xFetch';

export async function getAll() {
  // return xFetch('/api/lists');
  return xFetch('/service/get-weekly-list', {
    mode: 'no-cors',
    headers: {
        // 'Accept': 'application/json',
    }
  });
}
