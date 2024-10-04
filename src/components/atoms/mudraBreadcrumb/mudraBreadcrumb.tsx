import React, { ReactNode } from "react";
import { ILink } from "./propTypes";
import { ChevronRight } from "../../../icons";
import "./styles.scss";

export interface IMudraBreadcrumbProps {
  links: ILink[];
  className?: string;
  renderLink?: (link: ILink, index: number) => ReactNode;
}

const MudraBreadcrumb: React.FunctionComponent<IMudraBreadcrumbProps> = (
  props
) => {
  const { links, className, renderLink: RenderCustomLink } = props;

  const renderLinks = () => {
    return (
      <>
        {links.map((link: ILink, index: number) => {
          return (
            <div className="link-wrapper" key={link.relativeURL}>
              {renderLink(link, index, RenderCustomLink)}
              {renderChevron(index, links.length)}
            </div>
          );
        })}
      </>
    );
  };

  const renderChevron = (index: number, linksLength: number) => {
    return canRenderChevron(index, linksLength) ? (
      <ChevronRight className="links-separator" />
    ) : (
      <></>
    );
  };

  return (
    <nav
      className={`mudra-breadcrumb ${className ? className : ""}`}
      data-testid="mudra_breadcrumb"
    >
      {renderLinks()}
    </nav>
  );
};

function canRenderChevron(linkIndex, linksCount) {
  return linkIndex !== linksCount - 1;
}

function renderLink(
  link: ILink,
  index: number,
  RenderCustomLink?: (link: ILink, index: number) => ReactNode
) {
  return (
    <>
      {RenderCustomLink ? (
        RenderCustomLink(link, index)
      ) : (
        <a
          href={link.relativeURL}
          className={`link-label`}
          data-testid="mudra_breadcrumb_link"
        >
          {link.label}
        </a>
      )}
    </>
  );
}

const defaultProps = {
  links: [],
};

MudraBreadcrumb.defaultProps = defaultProps;

export default MudraBreadcrumb;
