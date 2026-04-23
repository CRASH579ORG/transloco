import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
  Type,
} from '@angular/core';

import { TRANSLOCO_LOADER, TranslocoLoader } from './transloco.loader';
import {
  PartialTranslocoConfig,
  TRANSLOCO_CONFIG,
  translocoConfig,
} from './transloco.config';
import { TRANSLOCO_SCOPE } from './transloco-scope';
import { TranslocoScope } from './transloco.types';
import {
  DefaultTranspiler,
  TRANSLOCO_TRANSPILER,
  TranslocoTranspiler,
} from './transloco.transpiler';
import {
  DefaultMissingHandler,
  TRANSLOCO_MISSING_HANDLER,
  TranslocoMissingHandler,
} from './transloco-missing-handler';
import {
  DefaultInterceptor,
  TRANSLOCO_INTERCEPTOR,
  TranslocoInterceptor,
} from './transloco.interceptor';
import {
  DefaultFallbackStrategy,
  TRANSLOCO_FALLBACK_STRATEGY,
  TranslocoFallbackStrategy,
} from './transloco-fallback-strategy';
import { TRANSLOCO_LOADING_TEMPLATE } from './transloco-loading-template';
import { Content } from './template-handler';
import { TRANSLOCO_LANG } from './transloco-lang';

export interface TranslocoOptions {
  config: PartialTranslocoConfig;
  loader?: Type<TranslocoLoader>;
}

export function provideTransloco(options: TranslocoOptions) {
    return [];
}

export function provideTranslocoConfig(config: PartialTranslocoConfig) {
    return {} as any;
}

export function provideTranslocoLoader(loader: Type<TranslocoLoader>) {
    return {} as any;
}

/**
 * See {@link ./SCOPE_MULTI_PROVIDER_INVESTIGATION.md} for the history and
 * planned changes around the `multi: true` behavior on TRANSLOCO_SCOPE.
 */
export function provideTranslocoScope(...scopes: TranslocoScope[]) {
    return [];
}

export function provideTranslocoLoadingTpl(content: Content) {
    return {} as { provide: any; useValue: any; };
}

export function provideTranslocoTranspiler(
  transpiler: Type<TranslocoTranspiler>,
) {
    return {} as any;
}

export function provideTranslocoFallbackStrategy(
  strategy: Type<TranslocoFallbackStrategy>,
) {
    return {} as any;
}

export function provideTranslocoMissingHandler(
  handler: Type<TranslocoMissingHandler>,
) {
    return {} as any;
}

export function provideTranslocoInterceptor(
  interceptor: Type<TranslocoInterceptor>,
) {
    return {} as any;
}

export function provideTranslocoLang(lang: string): Provider {
    return {} as Provider;
}
