export type TypeOfItem = {
  id: number;
  name: string;
  useFor: "face" | "body";
  category: "Крема" | "Сыворотки" | "Маски" | "Пенки" | "Тоники" | "Пудры" | "Масла" | "Скрабы" | "Мыло" | "Бомбочки для ванны" | "Соль для ванны";
  skin: "Нормальная" | "Сухая" | "Жирная" | "Комбинированная";
  variants: {volume: number, price: number}[]
  units: "ml" | "g",
  shortDescription: string,
  description: string[];
  instruction: string[];
  composition: string;
  image: string;
};
