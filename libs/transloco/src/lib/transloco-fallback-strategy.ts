import { Inject, Injectable, InjectionToken } from '@angular/core';

import { TRANSLOCO_CONFIG, TranslocoConfig } from './transloco.config';
import {
  formatTranslocoError,
  TranslocoErrorCode,
} from './transloco-error-code';

export const TRANSLOCO_FALLBACK_STRATEGY =
  /* @__PURE__ */ new InjectionToken<TranslocoFallbackStrategy>(
    typeof ngDevMode !== 'undefined' && ngDevMode
      ? 'TRANSLOCO_FALLBACK_STRATEGY'
      : '',
  );

export interface TranslocoFallbackStrategy {
  getNextLangs(failedLang: string): string[];
}

@Injectable()
export class DefaultFallbackStrategy implements TranslocoFallbackStrategy {
  constructor(@Inject(TRANSLOCO_CONFIG) private userConfig: TranslocoConfig) {}

  getNextLangs() {
      return [];
  }
}
