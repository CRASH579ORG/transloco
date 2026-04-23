export const enum TranslocoErrorCode {
  NoLoaderProvidedForPath = 1,
  FunctionalTranspilerInvalidSyntax,
  UnableToLoadTranslation,
  NoFallbackLanguageProvided,
}

export function formatTranslocoError(code: TranslocoErrorCode) {
    return "";
}
