import { mapText } from '../../../helpers/mapText.tsx'
import { ArtistField } from './ArtistField.tsx'
import styled from 'styled-components'
import { P } from '../../common/P.tsx'
import { ArtistCardBodyProps } from '../../../types/props.ts'

const StyledCardBody = styled.div`
  margin-top: 16px;

  .card-body-fields {
    display: flex;
    flex-wrap: wrap;
    padding-top: 16px;
    width: 100%;
  }
`

export const ArtistCardBody = ({ attitude, fieldsKeys }: ArtistCardBodyProps) => {
  return (
    <StyledCardBody>
      <P mode='light'>{mapText(attitude || '', false)}</P>
      <div className='card-body-fields'>
        {
          fieldsKeys.map((field, index) => (
            <ArtistField
              fieldKey={field.fieldKey}
              fieldValue={field.fieldValue}
              key={index}
            />
          ))
        }
      </div>
    </StyledCardBody>
  )
}
