import { NavigateFunction } from 'react-router';
import { LOCAL_STORAGE_KEY, ROUTES } from "./constants";

// clear cached token and redirect to sso login
export const loginRedirect = (navigate?: NavigateFunction) => {
  localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD);
  saveOriginalUrlBeforeLogin();

  if (navigate) {
    navigate(ROUTES.landing);
  } else {
    window.location.href = ROUTES.landing;
  }
};

export const login = (navigate: NavigateFunction) => {
  const localLogin = isTrue(process.env.REACT_APP_ENABLE_LOCAL_LOGIN);

  if (localLogin) {
    navigate(ROUTES.internalLogin);
  } else {
    window.location.href = String(process.env.REACT_APP_SSO_LOGIN_URL);
  }
};

// save current url in session storage
const saveOriginalUrlBeforeLogin = () => {
  const pathname = window.location.pathname;
  if (pathname !== '/' && pathname !== ROUTES.logout && pathname !== ROUTES.landing) {
    sessionStorage.setItem('original_url', window.location.pathname + window.location.search);
  }
};

// navigate to the original url after user login
export const getOriginalUrl = () => {
  const originalUrl = sessionStorage.getItem('original_url');
  const originalUrlType = sessionStorage.getItem('original_url_type');
  if (originalUrl || originalUrlType) {
    sessionStorage.removeItem('original_url');
    // original_url_type for external projects
    sessionStorage.removeItem('original_url_type');
  }
  return { url: originalUrl, type: originalUrlType };
};

export const hasUdfToken = () => {
  return !!localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD);
};

/**
 * Utilities to compare between two variables with same supported types: string | number | boolean
 */
export const compare = <T = string | number | boolean>(a: T, b: T) => {
  if (a === b) return 0;
  else if (a > b) return 1;
  return -1;
};

/**
 * Utilities to remove keys with value is undefined, null or empty
 * Useful for clearing parameter objects, to not display empty parameters in the url
 */
export const cleanObject = (object?: Record<string, any>) => {
  if (!object) return {};
  Object.keys(object).forEach(key => {
    const value = object[key];
    if (value === undefined || value === null || value === '') {
      delete object[key];
    }
  });
  return object;
};

export const formatUpperCaseFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/*
 * Ignore operators that handled by imperva for sql injection
 */
export const sanitizeUserSearchText = (search: string) => {
  const value = search.trim();

  // 1. single quote: if only one and it's at the last place, Imperva consider it's sql injection
  if (value.split("'").length === 2 && value.substring(value.length - 1) === "'") {
    return search.replace("'", '');
  }
  return search;
};

export const isTrue = (value?: string | number) => {
  return (typeof value === 'string' && value?.toUpperCase() === 'TRUE') || value === 1;
};