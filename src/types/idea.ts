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
