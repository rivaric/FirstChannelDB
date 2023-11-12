import { Artist, User } from './Artist.ts'

// Header
export type ProfileIconsProps = Pick<
  Artist,
  'full_name' | 'photo_url'
>

// Main
export type MainProps = {
  artists: Artist[],
  setValueInput: (x: string) => void,
}

export type ArtistRowProps = {
  artist: Artist
}

export type AddArtistProps = {
  open: boolean,
  setOpen: (val: boolean) => void
}

// ArtistCard

export type ArtistCardBodyProps = {
  attitude?: string,
  fieldsKeys: ({
    fieldKey: string,
    fieldValue: string
  })[]
}

export type ArtistFieldProps = {
  fieldKey: string,
  fieldValue: string
}

// Settings
export type SettingsProps = {
  artists: Artist[],
  setArtists: (artists: Artist[]) => void,
}

// AdminPanel
export type UsersListProps = {
  users: User[]
}