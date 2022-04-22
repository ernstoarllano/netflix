export interface Release {
  certification: string,
  iso_3166_1: string,
  primary: boolean,
  release_date: string
}

export interface Releases {
  [key: string]: Release[]
}