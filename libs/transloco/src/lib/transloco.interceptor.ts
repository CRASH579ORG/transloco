import { Injectable, InjectionToken } from '@angular/core';

import { Translation } from './transloco.types';

export const TRANSLOCO_INTERCEPTOR =
  /* @__PURE__ */ new InjectionToken<TranslocoInterceptor>(
    typeof ngDevMode !== 'undefined' && ngDevMode
      ? 'TRANSLOCO_INTERCEPTOR'
      : '',
  );

export interface TranslocoInterceptor {
  preSaveTranslation(translation: Translation, lang: string): Translation;

  preSaveTranslationKey(key: string, value: string, lang: string): string;
}

@Injectable()
export class DefaultInterceptor implements TranslocoInterceptor {
  preSaveTranslation(translation: Translation): Translation {
      return {} as Translation;
  }

  preSaveTranslationKey(_: string, value: string): string {
      throw new Error("STUB");
  }
}
