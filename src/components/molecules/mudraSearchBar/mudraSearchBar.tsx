import React from "react";
import "./styles.scss";
import { IMudraSearchBarProps } from "./types";
import { Search } from "../../../icons";
import {
  addClassNameToReactElements,
  combineClassNames,
} from "../../../utils/utilityFunctions";
import {
  MudraButton,
  MudraButtonSize,
  MudraButtonVariant,
  MudraButtonWidth,
  MudraButtonState,
} from "../../atoms/mudraButton";

const MudraSearchBar: React.FunctionComponent<IMudraSearchBarProps> = (
  props
) => {
  const {
    defaultSearchText,
    onSearch: onSearchIconClicked,
    isLoading,
    onChange,
    placeholder,
    prefix,
    results,
    searchText,
    className,
  } = props;

  const searchResultsRef = React.useRef<HTMLDivElement>(null);
  const [stateSearchText, setStateSearchText] = React.useState("");
  const [isControlled, setControllability] = React.useState<boolean>(false);
  const [isTextFieldFocussed, setTextFieldFocusState] =
    React.useState<boolean>(false);
  const [isSearchResultsVisible, toogleSearchResultsVisibility] =
    React.useState(false);

  const [visibleResultsCount, setVisibleResultsCount] = React.useState<number>(
    () => getInitialVisibleResultsCount(results)
  );

  const visibleResults = React.useMemo(() => {
    if (results) {
      const visibleSearchResults = results.slice(0, visibleResultsCount);
      return addClassNameToReactElements(visibleSearchResults, "result");
    }
    return [];
  }, [visibleResultsCount, results]);

  const placeholderText = React.useMemo(
    () => (!isTextFieldFocussed ? placeholder : ""),
    [isTextFieldFocussed, placeholder]
  );

  const isPrefixVisible = React.useMemo(() => {
    return stateSearchText?.length > 0 || isTextFieldFocussed;
  }, [stateSearchText, isTextFieldFocussed]);

  const computedClassName = React.useMemo(() => {
    return combineClassNames("searchBarWrapper", className);
  }, [className]);

  const searchIconClassName = React.useMemo(() => {
    if (isLoading) return combineClassNames("searchIcon", "loading");
    else return "searchIcon";
  }, [isLoading]);

  const isMoreBtnVisible = () => {
    if (results) {
      if (results.length > visibleResults.length) return true;
    }
    return false;
  };

  const onSearchTextChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const text = ev.target.value;
    if (!isControlled) setStateSearchText(text);
    if (typeof onChange === "function") onChange(ev, text);
  };

  const onSearch = () => {
    onSearchIconClicked(stateSearchText);
  };

  const onKeyDownOnInputField = (ev: React.KeyboardEvent) => {
    if (ev.key === "Enter") onSearchIconClicked(stateSearchText);
  };

  const onMoreButtonClicked = () => {
    setVisibleResultsCount(
      updateResultCountOnMoreBtnClicked(visibleResultsCount, results)
    );
  };

  const handleClickOutsideSearchResults = (ev) => {
    if (
      searchResultsRef.current &&
      !searchResultsRef.current.contains(ev.target)
    ) {
      toogleSearchResultsVisibility(false);
    }
  };

  React.useEffect(() => {
    if (isControlled) setStateSearchText(searchText ?? "");
  }, [searchText]);

  React.useEffect(() => {
    setVisibleResultsCount(getInitialVisibleResultsCount(results));
    if (results && results.length > 0) toogleSearchResultsVisibility(true);
    else toogleSearchResultsVisibility(false);
  }, [results]);

  React.useEffect(() => {
    if (typeof searchText === "string") {
      setControllability(true);
      setStateSearchText(searchText);
    } else {
      setControllability(false);
      setStateSearchText(defaultSearchText ?? "");
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutsideSearchResults, true);
    return () => {
      document.removeEventListener(
        "click",
        handleClickOutsideSearchResults,
        true
      );
    };
  }, []);

  return (
    <div className={computedClassName}>
      <div className="searchBar" data-testid="mudra_searchbar">
        {isPrefixVisible && <div className="prefix">{prefix}</div>}
        <input
          className="searchInput"
          value={stateSearchText}
          onChange={onSearchTextChanged}
          onFocus={() => setTextFieldFocusState(true)}
          onBlur={() => setTextFieldFocusState(false)}
          placeholder={placeholderText}
          onSubmit={onSearch}
          onKeyDown={onKeyDownOnInputField}
        />
        {!isLoading ? (
          <Search
            onClick={onSearch}
            className={searchIconClassName}
            data-testid="mudra_searchbar_searchIcon"
          />
        ) : (
          <div
            className="searchLoader"
            data-testid="mudra_searchbar_searchLoader"
          />
        )}
      </div>
      <div
        className="resultsWrapper"
        data-testid="mudra_searchbar_results"
        ref={searchResultsRef}
        style={{ visibility: isSearchResultsVisible ? "visible" : "hidden" }}
      >
        <div className="results">{visibleResults}</div>
        {isMoreBtnVisible() && (
          <div className="moreButtonWrapper">
            <MudraButton
              variant={MudraButtonVariant.Primary}
              size={MudraButtonSize.Small}
              width={MudraButtonWidth.Auto}
              state={MudraButtonState.Enabled}
              label="More..."
              onClick={onMoreButtonClicked}
            />
          </div>
        )}
      </div>
    </div>
  );
};

MudraSearchBar.defaultProps = {
  isLoading: false,
};

function getInitialVisibleResultsCount(results?: React.ReactElement[]) {
  if (results) {
    if (results.length > 5) return 5;
    else return results.length;
  }
  return 0;
}

function updateResultCountOnMoreBtnClicked(
  currentCount: number,
  results?: React.ReactElement[]
) {
  if (results) {
    if (currentCount + 5 < results.length) return currentCount + 5;
    else return results.length;
  }
  return 0;
}

export default MudraSearchBar;
