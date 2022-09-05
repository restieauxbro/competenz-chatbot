import { Widget } from "@typeform/embed-react";
import { useEffect } from "react";

const TypeformWidget = (props) => {
  const { id, chat, hidden_fields } = props;
  const browserWindow = typeof window !== "undefined" && window;
  useEffect(() => {
    if (browserWindow) {
      window.dataLayer = window.dataLayer || [];
    }
  }, []);

  function questionViewed({ id }) {
      browserWindow.dataLayer.push({ event: "typeform_question_view", id });
  }
  function formSubmitted({ id }) {
      browserWindow.dataLayer.push({ event: "typeform_form_submit", id });
  }

  return (
    <Widget
      id={id || "V4mLSLvr"}
      chat={chat || false}
      hidden={hidden_fields}
      onQuestionChanged={(id) => questionViewed({ id })}
      onSubmit={(id) => formSubmitted({ id })}
      style={{ width: "100%", height: "100%" }}
      className="cz-typeform-widget"
    />
  );
};

export default TypeformWidget;
