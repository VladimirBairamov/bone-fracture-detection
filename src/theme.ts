export const pxToRem = (px: number) => `${px / 8}rem`;

export enum Color {
  Blue = 'blue',
  Green = 'green',
  Yellow = 'yellow',
  Red = 'red',
  Orange = 'orange',
  Sea = 'sea',
  Purple = 'purple',
}

export const colors = {
  [Color.Blue]: '#3D9BE9',
  [Color.Green]: '#BADA55',
  [Color.Yellow]: '#FFD75C',
  [Color.Red]: '#F25858',
  [Color.Orange]: '#FDB03E',
  [Color.Sea]: '#2CE1CB',
  [Color.Purple]: '#D783FF',

  white: '#FFFFFF',
  lightGrey: '#F9F9F9',
  grey: '#D1D1D6',
  text: '#041D32',
  textYellow: '#F2CC58',
  textBlue: '#2081D2',
  textBlueHover: '#006AC3',
  black: '#000000',
  backDrop: '#C9C9C999',
};

export const COLORS_MAP: Record<number, Color> = {
  0: Color.Blue,
  1: Color.Green,
  2: Color.Yellow,
  3: Color.Red,
  4: Color.Orange,
  5: Color.Sea,
  6: Color.Purple,
};

export const CLASSES = [
  {
    id: 0,
    label: "Elbow positive",
    color: Color.Blue,
  },
  {
    id: 1,
    label: "Fingers positive",
    color: Color.Green,
  },
  {
    id: 2,
    label: "Humerus",
    color: Color.Sea,
  },
  {
    id: 3,
    label: "Forearm fracture",
    color: Color.Yellow,
  },
  {
    id: 4,
    label: "Humerus fracture",
    color: Color.Red,
  },
  {
    id: 5,
    label: "Shoulder fracture",
    color: Color.Orange,
  },
  {
    id: 6,
    label: "Wrist positive",
    color: Color.Purple,
  },
];
