import { Trans, useTranslation } from "react-i18next";
import { ReactComponent as GiftIcon } from "../assets/icons/gift.svg";

export const AuthorPage = () => {
  const { t } = useTranslation();
  return (
    <div className="px-1 mb-2">
      <h1 className="text-md mt-1 font-bold text-center z-10 text-transparent marshmelow uppercase">
        Хто я такий і що це за марафон?
      </h1>
      <p className="text-gray-200 text-[14px] font-semibold mx-2 mt-2 text-justify whitespace-pre-line">
        {t("authorPage.description")}
      </p>
    </div>
  );
};
