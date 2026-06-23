const TOKEN_KEY = 'access_token'

export const getAccessToken = () => localStorage.getItem(TOKEN_KEY)
export const setAccessToken = (token: string) => localStorage.setItem(TOKEN_KEY, token)