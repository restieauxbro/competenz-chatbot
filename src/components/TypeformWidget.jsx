import { Widget } from "@typeform/embed-react";
import { useEffect } from "react";

const TypeformWidget = (props) => {
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
    <>
      <Widget
        {...{
          ...props,
          onQuestionChanged: (id) => questionViewed({ id }),
          onSubmit: (id) => formSubmitted({ id }),
          style: {
            width: "100%",
            height: props.height || props.chat ? "100%" : 600,
          },
        }}
      />
    </>
  );
};

export default TypeformWidget;
