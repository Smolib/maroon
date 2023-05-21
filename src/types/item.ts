type TypeOfItem = {
  for: "face" | "body";
  name: "Крем" | "Сыворотка" | "Маска" | "Пенка" | "Тоник" | "Пудра" | "Масло" | "Скраб" | "Мыло" | "Бомбочка" | "Соль";
}

export type Item = {
  id: number;
  name: string;
  type: TypeOfItem;
  skin: "Нормальная" | "Сухая" | "Жирная" | "Комбинированная";
  volume: number[];
  price: number[];
  units: "ml" | "g",
  description: string[];
  instruction: string[];
  composition: string;
  image: string;
};
