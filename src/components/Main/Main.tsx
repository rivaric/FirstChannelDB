import { Settings } from './Settings/Settings.tsx'
import { Pagination } from '../Pagination/Pagination.tsx'
import { useEffect, useState } from 'react'
import { MainProps } from '../../types/props.ts'
import { ArtistRow } from './ArtistRow.tsx'

export const Main = ({ artistsRedux }: MainProps) => {
  const [artists, setArtists] = useState(artistsRedux)

  useEffect(() => {
    setArtists(artistsRedux)
  }, [artistsRedux])

  return (
    <main>
      <Settings artists={artistsRedux} setArtists={setArtists}/>
      <div className='main-list-container'>
        {
          artists.map(artist => (
            <ArtistRow artist={artist} key={artist.id}/>
          ))
        }
      </div>
      <Pagination />
    </main>
  )
}