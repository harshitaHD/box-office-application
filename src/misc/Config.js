/*Fetching api here */
const API_BASE_URL  = 'https://api.tvmaze.com';

/*asynchronising caller function by async, await handles the promises(it handles asynchronous output) */
export async function apiGet(queryString){
const response = await fetch(`${API_BASE_URL}${queryString}`).then(r=>r.json());

return response
}
