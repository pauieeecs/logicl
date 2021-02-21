export type User = {
  uid: string
  name: string
  photoUrl: string
  email: string
  slug: string
  birthYear: number
  provider: string
}

export type UserSigninEmail = {
  email: string
  password: string
}

export type UserSignupEmail = {
  email: string
  password: string
  fullName: string
  birthYear: number
}
