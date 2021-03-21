import firebase from "firebase"

export interface IdeaShort {
  ideaTitle: string
  ideaShortDesc: string
  ideaUpVote: number
  ideaDownVote: number
  ideaInteractorsId: Array<string>[]
  ideaCreatedAt: firebase.firestore.Timestamp
  ideaSlug: string
  ideaAuthorUserName: string
  ideaAuthorSlug: string
}

export interface IdeaFull {
  ideaTitle: string
  ideaFullDesc: string
  ideaUpVote: number
  ideaDownVote: number
  ideaInteractorsId: Array<string>[]
  ideaCreatedAt: firebase.firestore.Timestamp
  ideaSlug: string
  ideaAuthorUserName: string
  ideaAuthorSlug: string
  ideaMediaUrl: string
  ideaAuthorBio: string
  ideaAuthorCity: string
  ideaAuthorPhotoUrl: string
  teamName: string
  teamSlug: string
}

export interface IdeaComment {
  commentCreatedAt: firebase.firestore.Timestamp
  commentText: string
  commentFeeling: boolean
  commentUpVote: number
  commentAuthorUserName: string
  commentInteractorsId: Array<string>[]
}
