export type Artist = {
  id: number; // -
  attitude?: string; // -
  created_at?: string; // -
  photo_url?: string; // -

  patronymic?: string;
  first_name?: string;
  last_name?: string;

  full_name: string; // -
  activity?: string; // -
  psy_character?: string | null; // +
  status?: "Гость" | "Соискатель" | "Сотрудник"; // +
  social_networks?: string; // +
  email?: null | string; // +
  mentions_count?: number; // +
  education?: null | string; // +
  phone_numbers?: string; // +
  nicknames?: null | string; // +
  is_media?: boolean; // +
  in_contacts?: null | string; // +
  input_date?: string; // +
  date_of_birth?: string; // +
  work_exp?: null | string; // +
  commercial_activity?: null | string; // +
  media_mentions?: null | string; // +
  publications?: null | string; // +
  negative_info?: null | string; // +
  comment?: string;
};

export type ArtistList = {
  comment?: string,
  files?: any;
}

export type User = {
  login: string;
};

export type HelpFormField = {
  name?: string;
  message?: string;
};

export type AddEmailFormField = {
  email?: string,
}

export type AuthData = {
  has_email: boolean,
  is_admin: boolean,
}
