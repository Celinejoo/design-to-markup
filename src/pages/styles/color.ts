export type BackgroundColor = 'lightBackground' | 'greenBackground';

export type AccentColor =
  | 'black'
  | 'gray'
  | 'lightGray'
  | 'white'
  | 'lightGreen'
  | 'green'
  | 'darkGreen'
  | 'red';

export type TextColor = 'headline' | 'paragraph' | 'captions' | 'link' | 'lightText';

export type ColorToken = BackgroundColor | AccentColor | TextColor;
