export const getAuthToken = () : string | null => {
  return localStorage.getItem('token') ? localStorage.getItem('token') : null
}