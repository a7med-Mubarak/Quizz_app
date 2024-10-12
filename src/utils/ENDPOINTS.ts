const BASE_URL = "https://upskilling-egypt.com:3005";

const AUTH = `${BASE_URL}/api/auth`
export const IMG_BASE_URL="https://upskilling-egypt.com:3000"

const AUTH_ADMIN_ENDPOINTS = {
  LOGIN: `${AUTH}/login`,
  FORGOT_PASSWORD: `${AUTH}/forgot-password`,
  RESET_PASSWORD: `${AUTH}/reset-password`,
  CHANGE_PASSWORD: `${AUTH}/change-password`
}
export {
  AUTH_ADMIN_ENDPOINTS,
};
