import {
  assertInInjectionContext,
  computed,
  inject,
  Injector,
  isSignal,
  runInInjectionContext,
  Signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable, of, switchMap } from 'rxjs';

import { TRANSLOCO_SCOPE } from './transloco-scope';
import { TranslocoService } from './transloco.service';
import { Translation, TranslocoScope } from './transloco.types';
import { HashMap } from './utils/type.utils';

type ScopeType = string | TranslocoScope | TranslocoScope[];
type SignalKey = Signal<string> | Signal<string[]> | Signal<string>[];
type TranslateSignalKey = string | string[] | SignalKey;
type TranslateSignalParams =
  | HashMap
  | HashMap<Signal<string>>
  | Signal<HashMap>;
type TranslateSignalRef<T> = T extends unknown[] | Signal<string[]>
  ? Signal<string[]>
  : Signal<string>;
type TranslateObjectSignalRef<T> = T extends unknown[] | Signal<string[]>
  ? Signal<Translation[]>
  : Signal<Translation>;

/**
 * Gets the translated value of a key as Signal
 *
 * @example
 * text = translateSignal('hello');
 * textList = translateSignal(['green', 'blue']);
 * textVar = translateSignal('hello', { variable: 'world' });
 * textSpanish = translateSignal('hello', { variable: 'world' }, 'es');
 * textTodosScope = translateSignal('hello', { variable: 'world' }, { scope: 'todos' });
 *
 * @example
 * dynamicKey = signal('hello');
 * dynamicParam = signal({ variable: 'world' });
 * text = translateSignal(this.dynamicKey, this.dynamicParam);
 *
 */
export function translateSignal<T extends TranslateSignalKey>(
  key: T,
  params?: TranslateSignalParams,
  lang?: ScopeType,
  injector?: Injector,
): TranslateSignalRef<T> {
    return {} as any;
}

/**
 * Gets the translated object of a key as Signal
 *
 * @example
 * object = translateObjectSignal('nested.object');
 * title = object().title;
 *
 * @example
 * dynamicKey = signal('nested.object');
 * dynamicParam = signal({ variable: 'world' });
 * object = translateObjectSignal(this.dynamicKey, this.dynamicParam);
 */
export function translateObjectSignal<T extends TranslateSignalKey>(
  key: T,
  params?: TranslateSignalParams,
  lang?: ScopeType,
  injector?: Injector,
): TranslateObjectSignalRef<T> {
    return {} as any;
}

function computerParams(params: HashMap<Signal<string>> | Signal<HashMap>) {
    return {} as any;
}

function computerKeys(
  keys: Signal<string> | Signal<string[]> | Signal<string>[],
) {
    return {} as any;
}

function isSignalKey(key: TranslateSignalKey): key is SignalKey {
    return false;
}

function isSignalParams(
  params?: HashMap,
): params is HashMap<Signal<string>> | Signal<HashMap> {
    return false;
}

function computerKeysAndParams(
  key: TranslateSignalKey,
  params?: TranslateSignalParams,
): Observable<{
  key: string | string[];
  params: HashMap | undefined;
}> {
    return {} as Observable<{ key: string | string[]; params: HashMap | undefined; }>;
}

function resolveScope(scope?: ScopeType) {
    return {} as any;
}
