import firebase from "firebase"

/**
 * authorName: "Şükrü Ünal"
authorUserId: "GWUUCqkW5CSrjexwJsTulwr647c2"
authorUserName: "unallsukru"
category: "Design"
createdAt: t {seconds: 1616578397, nanoseconds: 11000000}
interactors: []
mediaUrl: ""
shortDesc: "test testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest test"
slug: "test-2-test-testtest-test-30"
teamName: ""
teamSlug: ""
title: "test 2 test testtest test"
totalVote: 0
upVote: 0
 */
export interface IdeaInteractors {
  id: string
  feeling: number
}

export interface IdeaShort {
  documentId: string
  authorName: string
  authorUserId: string
  authorUserName: string
  category: string
  createdAt: firebase.firestore.Timestamp
  interactors: IdeaInteractors[]
  mediaUrl: string
  shortDesc: string
  slug: string
  teamName: string
  teamSlug: string
  title: string
  totalVote: number
  upVote: number
}

export interface IdeaFull {
  documentId: string
  authorBio: string
  authorCity: string
  authorName: string
  authorPhotoUrl: string
  authorUserId: string
  authorUserName: string
  category: string
  createdAt: firebase.firestore.Timestamp
  fullDesc: string
  interactors: IdeaInteractors[]
  mediaUrl: string
  slug: string
  teamName: string
  teamSlug: string
  title: string
  totalVote: number
  upVote: number
}

export interface IdeaComment {
  createdAt: firebase.firestore.Timestamp
  text: string
  feeling: boolean
  upVote: number
  authorUserName: string
  interactorsId: Array<string>[]
}
