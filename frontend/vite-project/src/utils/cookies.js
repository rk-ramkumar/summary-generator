export function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";").map((cookie) => cookie.trim());
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

export function setCookie(name, value, options = {}) {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (options.expires) {
    const expires = new Date(options.expires).toUTCString();
    cookieString += `; expires=${expires}`;
  }
  if (options.path) {
    cookieString += `; path=${options.path}`;
  }
  document.cookie = cookieString;
}

export function deleteCookie(name) {
  document.cookie = `${encodeURIComponent(
    name
  )}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}
