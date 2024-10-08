import img2 from "@assets/contact.webp";
import img1 from "@assets/help_02.webp";
import img3 from "@assets/process_3.png";
import img5 from "@assets/service2.png";

export interface IImageCardItem {
  img: ImageMetadata;
  description: string;
}

export const processHelpList: IImageCardItem[] = [
  {
    img: img1,
    description: "Собрать корзину в интернет-магазине.",
  },
  {
    img: img2,
    description: "Написать нам http://t.me/meetmbox",
  },
  {
    img: img3,
    description:
      "Мы самостоятельно выкупаем, получаем, проверяем, переупаковываем и отправляем получателю нашей логистической службой",
  },
];
export const serviceList: IImageCardItem[] = [
  {
    img: img2,
    description: "Cервис доставки посылок из Европы в Россию и страны СНГ",
  },
  {
    img: img5,
    description: "Покупки в интернет-магазина Европы",
  },
];
