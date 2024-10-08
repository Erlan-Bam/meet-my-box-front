import logo from "@assets/logo_white.svg";
import Button from "@shared/ui/Button/ui/Footer/button";
import {
  FooterLinks,
  FooterLinksPC,
} from "@shared/ui/Link/Footer/footer-links";
import { SocialMediaLinks } from "@shared/ui/Link/Social/social-links";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <a href="#main-mob" className="w-full flex items-center justify-center">
          <img
            src={logo.src}
            alt="footer_logo"
            className={styles.footer__logo}
          />
        </a>
        <FooterLinks />
        <Button text="Вверх" buttonType="filled" />
        <SocialMediaLinks />
      </footer>
      <footer className={styles.footer_pc}>
        <div className={styles.footer_pc__nav}>
          <img
            src={logo.src}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            alt="footer_logo"
            className={`${styles.footer_pc__logo} cursor-pointer`}
          />
          <FooterLinksPC />
          <Button
            text="Вверх"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            buttonType="filled"
            margin="hover:text-white"
          />
        </div>
        <SocialMediaLinks />
      </footer>
    </>
  );
};
