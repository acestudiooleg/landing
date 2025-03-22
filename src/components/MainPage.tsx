import { Trans, useTranslation } from "react-i18next";
import { ReactComponent as GiftIcon } from "../assets/icons/gift.svg";

export const MainPage = () => {
  const { t } = useTranslation();
  // 1999 = 100%
  // 299 =  x
  //  x = 299 * 100 / 1999
  //  x = 100 - 14.96 = 85.04
  return (
    <div className="relative">
      <section className="p-1">
        <div className="text-gray-200 text-[12px] px-1">
          <Trans
            i18nKey="mainPage.marathon"
            components={{
              bold: <b />,
            }}
          />
        </div>
        <div className="flex justify-between mx-2 items-center mt-1">
          <div className="bg-accent px-1 py-[3px] rounded-sm w-max font-bold min-w-[140px] mr-1 text-center text-[]">
            {t("mainPage.startDate", { date: "25 березня" })}
          </div>
          <div className="text-white font-semibold">{t("mainPage.places")}</div>
        </div>
      </section>
      <section className="relative h-[500px]">
        <div className="absolute w-full z-20 top-[15px] px-1 flex flex-col items-center">
          <h1 className="text-lg font-bold text-center z-10">
            <Trans
              i18nKey="mainPage.offer.title"
              components={{
                icon: <b />,
                text: <span className="text-transparent marshmelow" />,
              }}
            />
          </h1>
          <h2
            style={{
              textShadow: "1px 1px 1px rgba(0,0,0,1)",
            }}
            className="text-gray-200 text-[14px] font-semibold mx-2 mt-2 text-center whitespace-pre-line"
          >
            {t("mainPage.offer.description")}
          </h2>
          <div className="text-center mt-6">
            <strong className="text-bubblegum text-lg">{t('mainPage.price')}{' '}</strong>
            <del className="text-white text-md">{t('mainPage.oldPrice')}</del>
          </div>
          <button className="peach-gradient h-4 rounded-full flex justify-between items-center pl-3 py-1 mt-1">
            <div className="text-[16px] mr-2 font-bold">{t("mainPage.join")}</div>
            <div className="bg-[#222] h-4 w-[52px] rounded-full text-white flex justify-center items-center font-bold">
              -85%
            </div>
          </button>
          <div className="accent h-4 rounded-full flex justify-between items-center px-2 py-1 mt-5">
            <div>
              <GiftIcon className="text-[26px] mr-1" />
            </div>
            <div className="flex flex-col">
              <Trans
                i18nKey="mainPage.bonus"
                components={{
                  bold: <b className="text-[13px]" />,
                  text: <span className="" />,
                }}
              />
            </div>
          </div>
        </div>
        <div className="bg-black h-[500px]  absolute top-0 w-full z-10 opacity-60"></div>
        <div className="bg-main h-[500px] absolute w-full z-0 top-0 border-t border-b-4 border-t-[#4eff2b] border-b-darkBlue"></div>
      </section>
    </div>
  );
};
