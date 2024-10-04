import React from "react";

export function combineClassNames(...args: (string | undefined)[]) {
  const classNames = args;
  return classNames.filter((val) => val).join(" ");
}

export function addClassNameToReactElements(
  elements: React.ReactElement[],
  className: string
): React.ReactElement[] {
  return elements.map((element) =>
    React.cloneElement(element, {
      className: combineClassNames(element.props.className, className),
    })
  );
}
