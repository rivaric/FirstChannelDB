import styled from 'styled-components'
import { mapText } from '../../../helpers/mapText.tsx'
import { P } from '../../common/P.tsx'
import { ArtistFieldProps } from '../../../types/props.ts'

const StyledArtistField = styled.div`
  display: flex;
  flex-direction: var(--artist-field-direction);
  justify-content: var(--artist-field-justify);
  width: var(--artist-field-width);

  &:not(:last-child) {
    box-shadow: var(--artist-field-box-shadow);
  }
  
  .field-key {
    padding: var(--artist-field-key-padding);
  }
  
  .field-value {
    overflow: hidden;
    padding: var(--artist-field-value-padding);
    text-align: var(--artist-field-text-align);
  }
`

export const ArtistField = ({ fieldKey, fieldValue }: ArtistFieldProps) => {
  let newValue
  switch (fieldKey) {
    case 'Медийность':
      newValue = fieldValue ? 'Медийный' : 'Немедийный'
      break
    default:
      newValue = mapText(String(fieldValue))
  }

  return (
    <StyledArtistField>
      <P mode='light' className='field-key'>{fieldKey}</P>
      <P className='field-value'>{newValue}</P>
    </StyledArtistField>
  )
}