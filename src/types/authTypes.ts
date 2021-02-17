export type User = {
  uid: string
  name: string
  photoUrl: string
  email: string
  slug: string
  birthYear: number
}

export type UserSignin = {
  email: string
  password: string
}

export type UserSignup = {
  email: string
  password: string
  fullName: string
  birthYear: number
}
