import firebase from "../libs/firebase"

export interface Comment {
  commentId: string
  comment: string
  authorId: string
  authorFullName: string
  authorUserName: string
  authorPhotoUrl: string
  ideaId: string
  createdAt: firebase.firestore.Timestamp
  upVoters: string[]
  upVoterCount: number
  fresh: boolean
}

export interface CommentUnderUser {
  documentId: string
  ideaCategory: string
  ideaTitle: string
  ideaAuthorUserName: string
  ideaShortDesc: string
  ideaSlug: string
  comment: string
  commentAuthorUserName: string
  createdAt: firebase.firestore.Timestamp
}
