export function detectDevice() {
  const isMobile = Boolean(
    /iPhone|iPad|iPod|Android/i.test(navigator?.userAgent)
  );
  return isMobile ? "Mobile" : "Web";
}

export function detectBrowser() {
  if (
    (navigator?.userAgent.indexOf("Opera") ||
      navigator?.userAgent.indexOf("OPR")) != -1
  ) {
    return "Opera";
  } else if (navigator?.userAgent.indexOf("Chrome") != -1) {
    return "Chrome";
  } else if (navigator?.userAgent.indexOf("Safari") != -1) {
    return "Safari";
  } else if (navigator?.userAgent.indexOf("Firefox") != -1) {
    return "Firefox";
  } else if (navigator?.userAgent.indexOf("MSIE") != -1) {
    return "IE"; //crap
  } else {
    return "Unknown";
  }
}

export function detectOS() {
  const userAgent = window?.navigator?.userAgent;
  const platform = window?.navigator?.platform;
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];
  let os: string | null = null;

  if (userAgent) {
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = "Mac OS";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = "iOS";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = "Windows";
    } else if (/Android/.test(userAgent)) {
      os = "Android";
    } else if (!os && /Linux/.test(platform)) {
      os = "Linux";
    } else {
      os = "";
    }
  } else {
    os = "";
  }

  return os;
}

export const createMarkup = (html: string) => {
  return {
    __html: html,
  };
};
