import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/typeform.scss";

const Chatbot = React.lazy(() => import("../src/components/chatbot"));
const TypeformWidget = React.lazy(() =>
  import("../src/components/TypeformWidget")
);
const Button = React.lazy(() => import("../src/components/Button"));

const App = ({ component, options }) => {
  const typeformProps = { ...options, id: options.id || "V4mLSLvr" };
  const switchComponent = () => {
    switch (component) {
      case "chatbot":
        return (
          <Suspense fallback={null}>
            <Chatbot {...typeformProps} />
          </Suspense>
        );
      case "widget":
        return (
          <Suspense fallback={null}>
            <TypeformWidget {...typeformProps} />
          </Suspense>
        );
      case "button":
        return (
          <Suspense fallback={null}>
            <Button {...typeformProps} />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={null}>
            <TypeformWidget {...typeformProps} />
          </Suspense>
        );
    }
  };
  return switchComponent();
};

window.loadCzTypeform = function (el, { component, options }) {
  const root = ReactDOM.createRoot(document.getElementById(el));
  root.render(<App component={component} options={options} />);
};

if (process.env.NODE_ENV === "development") {
  loadCzTypeform("intelligent-nav-root", {
    component: "button",
    options: {
      id: "i0j6V70F",
      button_classes: "button-standard spacing w-button",
      button_text: "Register interest",
    },
  });
}
