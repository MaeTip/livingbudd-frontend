const authTokenName = 'token'

export const getAuthToken = () : string | null => {
  return localStorage.getItem(authTokenName) ? localStorage.getItem(authTokenName) : null
}

export const setAuthToken = (access_token: string) : void => {
  localStorage.setItem(authTokenName, access_token)
}

export const removeAuthToken = () : void => {
  localStorage.removeItem(authTokenName);
}