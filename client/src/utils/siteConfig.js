const DEFAULT_SITE_URL = "https://vanshare.pl";

export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/+$/, "") || DEFAULT_SITE_URL;

export const SITE_NAME = "VAN SHARE";
