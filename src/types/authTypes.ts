export type User = {
  email: string
  userId: string
  fullName: string
  photoUrl: string
  authProvider: string
  country: string
  city: string
  birthDate: string
  userName: string
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
  birthMonth: number
  birthDay: number
}
