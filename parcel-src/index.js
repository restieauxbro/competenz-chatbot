import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import '../src/styles/typeform.scss'

const Chatbot = React.lazy(() =>
  import("../src/components/chatbot")
);
const TypeformWidget = React.lazy(() =>
  import("../src/components/TypeformWidget")
);

const App = ({ component, options }) => {
  const switchComponent = () => {
    switch (component) {
      case "chatbot":
        return (
          <Suspense fallback={null}>
            <Chatbot {...options} />
          </Suspense>
        );
      case "skills-matcher":
        return (
          <Suspense fallback={null}>
            <TypeformWidget {...options} />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={null}>
            <TypeformWidget {...options} />
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
    component: "chatbot",
    options: {
      questionsFile: "lead-form",
    },
  });
}
