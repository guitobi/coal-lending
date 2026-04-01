import { useTranslation } from "react-i18next";
import TextAreaField from "../../components/forms/TextAreaField";

function OrderCommentSection({ register, errors }) {
  const { t } = useTranslation();

  return (
    <TextAreaField
      id="comment"
      label={t("order.form.comment.label")}
      optionalLabel={t("order.form.comment.optional")}
      placeholder={t("order.form.comment.placeholder")}
      register={register}
      errors={errors}
      registerOptions={{}}
      rows={4}
    />
  );
}

export default OrderCommentSection;
