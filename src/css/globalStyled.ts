import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --c-primary-normal: #0757a8;
    --c-primary-hover: #306ecc;
    
    --container-width: 1260px;
    --settings-align: row;
    --header-display: flex;
    --header-padding: 16px 32px;
    
    --add-button-text-display: block;
    --add-button-padding: 6px 16px 6px 10px;
    --add-button-icon-margin: 6px;
    --add-button-border-radius: 8px;

    --settings-filter-width: 150px;
    --settings-filter-input-display: flex;
    --settings-filter-icon-margin: 8px;
    
    --artist-row-photo-width: 80px;
    --artist-card-breadcrumb-display: block;
    --artist-card-avatar-width: 120px;
    --artist-card-header-align: center;
    --artist-card-header-display: none;
    
    --artist-field-direction: column;
    --artist-field-width: 25%;
    --artist-field-text-align: left;
    --artist-field-justify: start;
    --artist-field-box-shadow: none;
    --artist-field-key-padding: 10px 0 0;
    --artist-field-value-padding: 0 0 10px;
    
    @media screen and (max-width: 1260px) {
      --container-width: 100%;
    }
    
    @media screen and (max-width: 600px) {
      --settings-align: column;
      --header-display: none;
      --header-padding: 8px 32px;
      
      --add-button-text-display: none;
      --add-button-padding: 6px;
      --add-button-icon-margin: 0;
      --add-button-border-radius: 50%;
      
      --settings-filter-width: max-content;
      --settings-filter-input-display: none;
      --settings-filter-icon-margin: 0;
      
      --artist-row-photo-width: 60px;
      --artist-card-breadcrumb-display: none;
      --artist-card-avatar-width: 100px;
      --artist-card-header-align: start;
      --artist-card-header-display: flex;
      
      --artist-field-direction: row;
      --artist-field-width: 100%;
      --artist-field-text-align: right;
      --artist-field-justify: space-between;
      --artist-field-box-shadow: rgba(31, 41, 55, 0.08) 0 1px 1px;
      --artist-field-key-padding: 10px 0;
      --artist-field-value-padding: 10px 0;
    }
  }
`