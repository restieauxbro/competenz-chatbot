import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import '../src/styles/typeform.scss'

const ConvoFormApp = React.lazy(() =>
  import("../components/question-tree/ConvoFormApp")
);
const SkillsMatcher = React.lazy(() =>
  import("../components/skills-matcher/SkillsMatcher")
);

const CarouselSearch = React.lazy(() =>
  import("../components/website-ui/CarouselAndSearch")
);

const App = ({ component, options }) => {
  const switchComponent = () => {
    switch (component) {
      case "convo-form":
        return (
          <Suspense fallback={null}>
            <ConvoFormApp {...options} />
          </Suspense>
        );
      case "skills-matcher":
        return (
          <Suspense fallback={null}>
            <SkillsMatcher {...options} />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={null}>
            <CarouselSearch {...options} />
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
    component: "search",
    options: {
      questionsFile: "lead-form",
    },
  });
}
