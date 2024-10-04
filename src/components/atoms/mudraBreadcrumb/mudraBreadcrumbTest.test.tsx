import React from "react";
import { render, screen } from "@testing-library/react";
import MudraBreadcrumb from "./mudraBreadcrumb";
describe("mudra-breadcrumb", () => {
  it("test:1 for breadcrumb", () => {
    const links = [
      {
        label: "Home",
        relativeURL: "/iframe.html",
      },
      {
        label: "Loans",
        relativeURL: "/iframe2.html",
      },
      {
        label: "Personal Loan",
        relativeURL: "/iframe3.html",
      },
    ];
    render(<MudraBreadcrumb links={links} />);

    const breadcrumb = screen.getByTestId("mudra_breadcrumb");

    // Test:1 for breadcrumb Existence
    expect(breadcrumb).not.toBeNull();

    // Test:1 for breadcrumb Classes
    expect(breadcrumb.className.includes("mudra-breadcrumb")).toBe(true);

    // Check the length of links and content and if they are "a" tag
    const linksOnScreen = screen.getAllByTestId("mudra_breadcrumb_link");
    expect(linksOnScreen.length).toBe(links.length);

    for (let i = 0; i < links.length; i++) {
      expect(linksOnScreen[i].nodeName).toBe("A");
      expect(linksOnScreen[i].textContent).toBe(links[i].label);
      expect((linksOnScreen[i] as HTMLAnchorElement).pathname).toBe(
        links[i].relativeURL
      );
    }
  });

  it("test:2 for breadcrumb", () => {
    const links = [
      {
        label: "Home",
        relativeURL: "/iframe.html",
      },
      {
        label: "Bangalore",
        relativeURL: "/iframe2.html",
      },
      {
        label: "Loans",
        relativeURL: "/iframe3.html",
      },
      {
        label: "Car Loan",
        relativeURL: "/iframe4.html",
      },
      {
        label: "SUV",
        relativeURL: "/iframe5.html",
      },
    ];
    render(<MudraBreadcrumb links={links} />);

    const breadcrumb = screen.getByTestId("mudra_breadcrumb");

    // Test:2 for breadcrumb Existence
    expect(breadcrumb).not.toBeNull();

    // Test:2 for breadcrumb Classes
    expect(breadcrumb.className.includes("mudra-breadcrumb")).toBe(true);

    // Check the length of links and content and if they are "a" tag
    const linksOnScreen = screen.getAllByTestId("mudra_breadcrumb_link");

    expect(linksOnScreen.length).toBe(links.length);

    for (let i = 0; i < links.length; i++) {
      expect(linksOnScreen[i].nodeName).toBe("A");
      expect(linksOnScreen[i].textContent).toBe(links[i].label);
      expect((linksOnScreen[i] as HTMLAnchorElement).pathname).toBe(
        links[i].relativeURL
      );
    }
  });

  it("test:3 for custom link", () => {
    const links = [
      {
        label: "Home",
        relativeURL: "/iframe.html",
      },
      {
        label: "Bangalore",
        relativeURL: "/iframe2.html",
      },
      {
        label: "Loans",
        relativeURL: "/iframe3.html",
      },
      {
        label: "Car Loan",
        relativeURL: "/iframe4.html",
      },
      {
        label: "SUV",
        relativeURL: "/iframe5.html",
      },
    ];
    render(
      <MudraBreadcrumb
        className="test-class"
        links={links}
        renderLink={(link) => <a href={link?.relativeURL}>{link?.label}</a>}
      />
    );

    const breadcrumb = screen.getByTestId("mudra_breadcrumb");

    // Test:3 for breadcrumb Existence
    expect(breadcrumb).not.toBeNull();

    // Test:3 for breadcrumb Classes
    expect(breadcrumb.className.includes("mudra-breadcrumb")).toBe(true);
    expect(breadcrumb.className.includes("test-class")).toBe(true);
  });
});
