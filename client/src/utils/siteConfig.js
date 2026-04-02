const DEFAULT_SITE_URL = "https://vanshare.pl";

const SITE_URL_FROM_ENV = import.meta.env?.VITE_SITE_URL?.replace(/\/+$/, "");

export const SITE_URL =
  SITE_URL_FROM_ENV || DEFAULT_SITE_URL;

export const SITE_NAME = "VAN SHARE";
