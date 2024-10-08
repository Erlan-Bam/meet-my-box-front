import styles from "./styles.module.scss";
import bg_face from "@assets/bg_face.svg";
import { RegistrationForm } from "@features/RegistrationForm";
export const RegistrationPage = () => {
  return (
    <>
      <div className={styles.register}>
        <img src={bg_face.src} alt="" className={styles.register__img} />
        <h2 className={styles.register__heading}>Создать аккаунт</h2>
        <RegistrationForm />
      </div>
      <div className={styles.register_pc}>
        <img src={bg_face.src} alt="" className={styles.register_pc__img} />
        <h2 className={styles.register_pc__heading}>Создать аккаунт</h2>
        <RegistrationForm />
      </div>
    </>
  );
};
