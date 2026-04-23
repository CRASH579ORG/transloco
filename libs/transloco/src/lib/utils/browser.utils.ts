export function isBrowser() {
    return false;
}

/**
 * Returns the language code name from the browser, e.g. "en"
 */
export function getBrowserLang(): string | undefined {
    return "";
}

/**
 * Returns the culture language code name from the browser, e.g. "en-US"
 */
export function getBrowserCultureLang(): string {
    return "";
}
