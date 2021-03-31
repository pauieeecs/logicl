import firebase from "firebase"

export interface User {
  userId: string
  fullName: string
  userName: string
  birthDate: string
  country: string
  city: string
  email: string
  logiclCoin: number
  bio: string
  photoUrl: string
  joinedAt: firebase.firestore.Timestamp
  experience: number
  level: number
  role: string
  jobTitle: string
  authProvider: string
  gitHubLink: string
  twitterLink: string
  teamName: string
  teamSlug: string
}

export interface UserComment {
  ideaShortDesc: string
  ideaTitle: string
  ideaCategory: string
  ideaCreatedAt: firebase.firestore.Timestamp
  ideaAuthorUserName: string
  commentCreatedAt: firebase.firestore.Timestamp
  commentText: string
  commentFeeling: boolean
  commentAuthorUserName: string
}
