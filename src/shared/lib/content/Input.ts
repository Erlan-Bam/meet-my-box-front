export interface ICalculateInput {
  placeholder: string;
  margin?: string;
}
export interface IContactInput {
  placeholder: string;
  margin?: string;
}
export const calculateInputs: ICalculateInput[] = [
  {
    placeholder: "Вес",
  },
  {
    placeholder: "Ширина",
  },
  {
    placeholder: "Длина",
  },
  {
    placeholder: "Высота",
  },
];

export const contactInputs: IContactInput[] = [
  {
    placeholder: "Ваше имя",
  },
  {
    placeholder: "Ваш телефон",
  },
  {
    placeholder: "Ваш вопрос",
  },
];