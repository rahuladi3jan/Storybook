import React from "react";
import * as renderer from "react-test-renderer";
import ThemeProvider from "../styles/styledComponents/ThemeProvider";

const customRenderer = (Component: () => JSX.Element) => {
  const component = renderer.create(
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
  return component.toJSON();
};

export default (tests: any) => {
  describe(tests.default.title, () => {
    Object.keys(tests).forEach((story) => {
      if (story !== "default") {
        it(story, () => {
          expect(customRenderer(tests[story])).toMatchSnapshot();
        });
      }
    });
  });
};
