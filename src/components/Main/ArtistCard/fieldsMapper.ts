import { Artist } from '../../../types/Artist.ts'

type ArtistFields = keyof Artist
type ArtistFieldsToExclude = 'id' | 'full_name' | 'activity' | 'attitude' | 'photo_url' | 'created_at'
export type ArtistFieldsToMap = Omit<ArtistFields, ArtistFieldsToExclude>

export const fieldsNamesMapper = (fieldName: ArtistFieldsToMap) => {
  switch (fieldName) {
    case 'input_date':
      return 'Дата внесения'
    case 'date_of_birth':
      return 'Дата рождения'
    case 'commercial_activity':
      return 'Коммерческая активность'
    case 'status':
      return 'Статус'
    case 'social_networks':
      return 'Соцсети'
    case 'mentions_count':
      return 'Количество упоминаний'
    case 'is_media':
      return 'Медийность'
    case 'phone_numbers':
      return 'Номера телефонов'
    case 'education':
      return 'Образование'
    case 'in_contacts':
      return 'В записных книжках контактов'
    case 'psy_character':
      return 'Психологическая характеристика'
    case 'nicknames':
      return 'Никнеймы'
    case 'email':
      return 'Электронная почта'
    case 'work_exp':
      return 'Опыт работы'
    case 'negative_info':
      return 'Негативная информация'
    case 'media_mentions':
      return 'Упоминания в медиа'
    case 'publications':
      return 'Публикации'
    default:
      return 'Неизвестное поле'
  }
}

export const fieldsMapper = (artist: Artist) => {
  const fields = [
    'date_of_birth', // 1
    'email', // 2
    'status', // 3
    'is_media', // 4
    'phone_numbers', // 5
    'education', // 6
    'social_networks', // 7
    'media_mentions', // 8
    'mentions_count', // 9
    'work_exp', // 10
    'psy_character', // 11
    'in_contacts', // 12
    'commercial_activity', // 13
    'negative_info', // 14
    'nicknames', // 15
    'input_date', // 16
    'publications' // 17
  ] as ArtistFieldsToMap[]

  const filteredFields = fields.filter(
    field => artist[field as ArtistFields]
  )

  const fieldsKeys = filteredFields.map(field  => ({
    fieldKey: fieldsNamesMapper(field),
    fieldValue: artist[field as ArtistFields] as string,
    key: field
  }))

  return fieldsKeys
}