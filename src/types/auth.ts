export type AuthFieldType = {
  login?: string,
  password?: string
}

export type AuthResponseSuccess = {
  access_token: string,
  token_type: string,
  is_admin: boolean,
  has_email: boolean,
}