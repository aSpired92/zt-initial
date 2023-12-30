export const apiFetch = (request: any, opts: any) => {
    return useFetch(request, { baseURL: 'https://127.0.0.1:7282/api', ...opts })
}