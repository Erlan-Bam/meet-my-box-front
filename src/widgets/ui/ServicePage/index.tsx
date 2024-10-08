import bg_face from "@assets/bg_face.svg";
import { ServiceList } from "@entities/ServiceList";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import styles from "./styles.module.scss";

export const ServicePage = () => {
  return (
    <section className={styles.service}>
      <img src={bg_face.src} alt="" className={styles.service__img} />
      <h1 className={styles.service__heading}>Услуги</h1>
      <Paragraph margin="mt-4" width="w-3/4" isCentered={true}>
        Мы предлагаем комплексные логистические услуги, оптимизируя ваши
        процессы и обеспечивая своевременную доставку. Доверяйте нам организацию
        всех этапов транспортировки.
      </Paragraph>
      <ServiceList />
    </section>
  );
};
