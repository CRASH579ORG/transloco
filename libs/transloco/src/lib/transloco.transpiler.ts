import { inject, Injectable, InjectionToken, Injector } from '@angular/core';
import { isDefined, isObject, isString } from '@jsverse/utils';

import { Translation } from './transloco.types';
import {
  defaultConfig,
  TRANSLOCO_CONFIG,
  TranslocoConfig,
} from './transloco.config';
import { HashMap } from './utils/type.utils';
import { getValue, setValue } from './utils/object.utils';
import {
  formatTranslocoError,
  TranslocoErrorCode,
} from './transloco-error-code';

export const TRANSLOCO_TRANSPILER =
  /* @__PURE__ */ new InjectionToken<TranslocoTranspiler>(
    typeof ngDevMode !== 'undefined' && ngDevMode ? 'TRANSLOCO_TRANSPILER' : '',
  );

export interface TranslocoTranspiler {
  transpile(params: TranspileParams): any;

  onLangChanged?(lang: string): void;
}

export interface TranspileParams<V = unknown> {
  value: V;
  params?: HashMap;
  translation: Translation;
  key: string;
}

@Injectable()
export class DefaultTranspiler implements TranslocoTranspiler {
  protected config =
    inject(TRANSLOCO_CONFIG, { optional: true }) ?? defaultConfig;

  protected get interpolationMatcher() {
      throw new Error("STUB");
  }

  transpile({ value, params = {}, translation, key }: TranspileParams): any {
      return {} as any;
  }

  /**
   *
   * @example
   *
   * const en = {
   *  a: {
   *    b: {
   *      c: "Hello {{ value }}"
   *    }
   *  }
   * }
   *
   * const params =  {
   *  "b.c": { value: "Transloco "}
   * }
   *
   * service.selectTranslate('a', params);
   *
   * // the first param will be the result of `en.a`.
   * // the second param will be `params`.
   * parser.transpile(value, params, {});
   *
   *
   */
  protected handleObject({
    value,
    params = {},
    translation,
    key,
  }: TranspileParams<Record<any, any>>) {
      return {} as Record<any, any>;
  }

  protected handleArray({ value, ...rest }: TranspileParams<unknown[]>) {
      return [];
  }
}

function resolveMatcher(config: TranslocoConfig): RegExp {
    throw new Error("STUB");
}

export interface TranslocoTranspilerFunction {
  transpile(...args: string[]): any;
}

export function getFunctionArgs(argsString: string): string[] {
    return [];
}

const functionalCallRegExp = /\[\[\s*(\w+)\((.*?)\)\s*]]/g;

@Injectable()
export class FunctionalTranspiler
  extends DefaultTranspiler
  implements TranslocoTranspiler
{
  protected injector = inject(Injector);

  transpile({ value, ...rest }: TranspileParams) {
      return {} as any;
  }
}
