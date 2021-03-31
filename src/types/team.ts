import firebase from "firebase"

export interface Team {
  teamId: string
  teamSlug: string
  teamName: string
  teamCategory: string
  teamShortDesc: string
  teamMembersId: Array<string>[]
  teamAppliersId: Array<string>[]
  teamCreatorId: string
  teamCreatedAt: firebase.firestore.Timestamp
}

export interface TeamFullInfo {
  teamId: string
  teamSlug: string
  teamName: string
  teamCategory: string
  teamFullDesc: string
  teamMembersId: Array<string>[]
  teamAppliersId: Array<string>[]
  teamCreatorId: string
  teamCreatedAt: firebase.firestore.Timestamp
  teamOpenPositions: Array<string>[]
  ideaTitle: string
  ideaSlug: string
}

export interface TeamApplier {
  applierName: string
  applierUserName: string
  applierPhotoUrl: string
  applierCountry: string
  applierCity: string
  applierMail: string
  applierPhone: string
  applyText: string
  applyPosition: string
  appliedAt: firebase.firestore.Timestamp
}