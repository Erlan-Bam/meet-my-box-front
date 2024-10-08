import bg_logo from "@assets/bg_face.svg";
import main_img from "@assets/canvas.webp";
import group from "@assets/clients_group.png";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Button from "@shared/ui/Button/ui/button";
import { IconButton } from "@shared/ui/IconButton/ui/icon-button";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { baseUrl, useGetBlock } from "@shared/lib/hooks/useGetBlock";

export const MainScreen = () => {
  const [main, setMain] = useState<any>();
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const block = await useGetBlock("/api/main-blocks/1");
        setMain(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchBlock();
  }, []);
  return (
    <>
      {main ? (
        <>
          <main className={styles.main_screen} id="main-mob">
            <img
              src={baseUrl + main.img.data.attributes.formats.small.url}
              alt="bg_logo"
              className={styles.main_screen__logo}
            />
            <Fade>
              <h1 className={styles.main_screen__heading}>{main.heading}</h1>
            </Fade>
            <Fade delay={0.2}>
              <Paragraph isCentered margin="mt-4">
                {main.paragraph}
              </Paragraph>
            </Fade>
            <Button
              text="Оформить заявку"
              buttonType="filled"
              margin="mt-8"
              onClick={() => (window.location.href = "#calculate-mob")}
            />
            <IconButton
              text="Процесс доставки"
              icon={faChevronRight}
              margin="mt-4"
              onClick={() => (window.location.href = "#process-mob")}
            />
            <div className={styles.main_screen__clients}>
              <img src={group.src} alt="clients" />
              <Paragraph margin="ml-2">200+ Довольных клиентов</Paragraph>
            </div>
            <img
              src={main_img.src}
              alt=""
              className={styles.main_screen__img}
            />
          </main>
          <main className={styles.main_screen_pc} id="main-pc">
            <div className="w-full flex justify-between">
              <div className="flex items-start flex-col">
                <Fade>
                  <h1 className={styles.main_screen_pc__heading}>
                    {main.heading}
                  </h1>
                </Fade>
                <Fade delay={0.2}>
                  <Paragraph margin="mt-4" width="w-[60%]">
                    {main.paragraph}
                  </Paragraph>
                </Fade>
                <div className="flex items-center gap-4 mt-8">
                  <Button
                    text="Оформить заявку"
                    buttonType="filled"
                    onClick={() => (window.location.href = "#calculate-pc")}
                  />
                  <IconButton
                    text="Процесс доставки"
                    icon={faChevronRight}
                    onClick={() => (window.location.href = "#process-pc")}
                  />
                </div>
                <div className={styles.main_screen__clients}>
                  <img src={group.src} alt="clients" />
                  <Paragraph margin="ml-2">200+ Довольных клиентов</Paragraph>
                </div>
              </div>
              <div className="w-full flex">
                <Fade className="w-full flex justify-end">
                  <img
                    src={baseUrl + main.img.data.attributes.formats.small.url}
                    className={styles.main_screen_pc__img}
                  />
                </Fade>
              </div>
            </div>
          </main>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
