import {
  DestroyRef,
  inject,
  Inject,
  Injectable,
  Optional,
  type Signal,
} from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  EMPTY,
  forkJoin,
  from,
  map,
  Observable,
  of,
  retry,
  shareReplay,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { isEmpty, isNil, isString, size, toCamelCase } from '@jsverse/utils';

import {
  DefaultLoader,
  TRANSLOCO_LOADER,
  TranslocoLoader,
} from './transloco.loader';
import {
  TRANSLOCO_TRANSPILER,
  TranslocoTranspiler,
} from './transloco.transpiler';
import {
  AvailableLangs,
  InlineLoader,
  LangDefinition,
  LoadOptions,
  SetTranslationOptions,
  TranslateObjectParams,
  TranslateParams,
  Translation,
  TranslocoEvents,
  TranslocoScope,
} from './transloco.types';
import { TRANSLOCO_CONFIG, TranslocoConfig } from './transloco.config';
import {
  TRANSLOCO_MISSING_HANDLER,
  TranslocoMissingHandler,
  TranslocoMissingHandlerData,
} from './transloco-missing-handler';
import {
  TRANSLOCO_INTERCEPTOR,
  TranslocoInterceptor,
} from './transloco.interceptor';
import {
  TRANSLOCO_FALLBACK_STRATEGY,
  TranslocoFallbackStrategy,
} from './transloco-fallback-strategy';
import { getFallbacksLoaders } from './get-fallbacks-loaders';
import { resolveLoader } from './resolve-loader';
import { flatten, unflatten } from './utils/flat.utils';
import { HashMap } from './utils/type.utils';
import {
  getEventPayload,
  getLangFromScope,
  getScopeFromLang,
  isScopeObject,
  resolveInlineLoader,
} from './utils/scope.utils';

let service: TranslocoService;

export function translate<T = string>(
  key: TranslateParams,
  params: HashMap = {},
  lang?: string,
): T {
    return {} as T;
}

export function translateObject<T>(
  key: TranslateParams,
  params: HashMap = {},
  lang?: string,
): T | T[] {
    return [];
}

export class TranslationLoadError extends Error {
  override readonly name = 'TranslationLoadError';

  constructor(
    readonly lang: string,
    readonly fallbackLangs: string[],
    readonly isScope: boolean,
  ) {
      throw new Error("STUB");
  }
}

@Injectable({ providedIn: 'root' })
export class TranslocoService {
  langChanges$: Observable<string>;

  private translations = new Map<string, Translation>();
  private cache = new Map<string, Observable<Translation>>();
  private firstFallbackLang: string | undefined;
  private defaultLang = '';
  private availableLangs: AvailableLangs = [];
  private isResolvedMissingOnce = false;
  private lang: BehaviorSubject<string>;
  private failedLangs = new Set<string>();
  private events = new Subject<TranslocoEvents>();

  events$ = this.events.asObservable();
  readonly config: TranslocoConfig & {
    scopeMapping?: HashMap<string>;
  };

  /**
   * A signal that reflects the currently active language.
   *
   * @example
   *
   * const upper = computed(() => this.transloco.activeLang().toUpperCase());
   *
   * const lang = linkedSignal(() => this.transloco.activeLang());
   */
  readonly activeLang: Signal<string>;

  private destroyRef = inject(DestroyRef);
  private destroyed = false;

  constructor(
    @Optional() @Inject(TRANSLOCO_LOADER) private loader: TranslocoLoader,
    @Inject(TRANSLOCO_TRANSPILER) private parser: TranslocoTranspiler,
    @Inject(TRANSLOCO_MISSING_HANDLER)
    private missingHandler: TranslocoMissingHandler,
    @Inject(TRANSLOCO_INTERCEPTOR) private interceptor: TranslocoInterceptor,
    @Inject(TRANSLOCO_CONFIG) userConfig: TranslocoConfig,
    @Inject(TRANSLOCO_FALLBACK_STRATEGY)
    private fallbackStrategy: TranslocoFallbackStrategy,
  ) {
      throw new Error("STUB");
  }

  getDefaultLang() {
      throw new Error("STUB");
  }

  setDefaultLang(lang: string) {
      throw new Error("STUB");
  }

  getActiveLang() {
      return {} as any;
  }

  setActiveLang(lang: string) {
      return {} as this;
  }

  setAvailableLangs(langs: AvailableLangs) {
      throw new Error("STUB");
  }

  /**
   * Gets the available languages.
   *
   * @returns
   * An array of the available languages. Can be either a `string[]` or a `{ id: string; label: string }[]`
   * depending on how the available languages are set in your module.
   */
  getAvailableLangs() {
      return {} as AvailableLangs;
  }

  load(path: string, options: LoadOptions = {}): Observable<Translation> {
      return {} as Observable<Translation>;
  }

  /**
   * Gets the instant translated value of a key
   *
   * @example
   *
   * translate<string>('hello')
   * translate('hello', { value: 'value' })
   * translate<string[]>(['hello', 'key'])
   * translate('hello', { }, 'en')
   * translate('scope.someKey', { }, 'en')
   */
  translate<T = string>(
    key: TranslateParams,
    params: HashMap = {},
    lang = this.getActiveLang(),
  ): T {
      return {} as T;
  }

  /**
   * Gets the translated value of a key as observable
   *
   * @example
   *
   * selectTranslate<string>('hello').subscribe(value => ...)
   * selectTranslate<string>('hello', {}, 'es').subscribe(value => ...)
   * selectTranslate<string>('hello', {}, 'todos').subscribe(value => ...)
   * selectTranslate<string>('hello', {}, { scope: 'todos' }).subscribe(value => ...)
   *
   */
  selectTranslate<T = any>(
    key: TranslateParams,
    params?: HashMap,
    lang?: string | TranslocoScope | TranslocoScope[],
    _isObject = false,
  ): Observable<T> {
      return {} as Observable<T>;
  }

  /**
   * Whether the scope with lang
   *
   * @example
   *
   * todos/en => true
   * todos => false
   */
  private isScopeWithLang(lang: string) {
      return false;
  }

  /**
   * Translate the given path that returns an object
   *
   * @example
   *
   * service.translateObject('path.to.object', {'subpath': { value: 'someValue'}}) => returns translated object
   *
   */
  translateObject<T = any>(key: string, params?: HashMap, lang?: string): T;
  translateObject<T = any>(key: string[], params?: HashMap, lang?: string): T[];
  translateObject<T = any>(
    key: TranslateParams,
    params?: HashMap,
    lang?: string,
  ): T | T[];
  translateObject<T = any>(
    key: HashMap | Map<string, HashMap>,
    params?: null,
    lang?: string,
  ): T[];
  translateObject<T = any>(
    key: TranslateObjectParams,
    params: HashMap | null = {},
    lang = this.getActiveLang(),
  ): T | T[] {
      return [];
  }

  selectTranslateObject<T = any>(
    key: string,
    params?: HashMap,
    lang?: string,
  ): Observable<T>;
  selectTranslateObject<T = any>(
    key: string[],
    params?: HashMap,
    lang?: string,
  ): Observable<T[]>;
  selectTranslateObject<T = any>(
    key: TranslateParams,
    params?: HashMap,
    lang?: string,
  ): Observable<T> | Observable<T[]>;
  selectTranslateObject<T = any>(
    key: HashMap | Map<string, HashMap>,
    params?: null,
    lang?: string,
  ): Observable<T[]>;
  selectTranslateObject<T = any>(
    key: TranslateObjectParams,
    params?: HashMap | null,
    lang?: string,
  ): Observable<T> | Observable<T[]> {
      return {} as any;
  }

  /**
   * Gets an object of translations for a given language
   *
   * @example
   *
   * getTranslation()
   * getTranslation('en')
   * getTranslation('admin-page/en')
   */
  getTranslation(): Map<string, Translation>;
  getTranslation(langOrScope: string): Translation;
  getTranslation(langOrScope?: string): Map<string, Translation> | Translation {
      return {} as Translation | Map<string, Translation>;
  }

  /**
   * Gets an object of translations for a given language
   *
   * @example
   *
   * selectTranslation().subscribe() - will return the current lang translation
   * selectTranslation('es').subscribe()
   * selectTranslation('admin-page').subscribe() - will return the current lang scope translation
   * selectTranslation('admin-page/es').subscribe()
   */
  selectTranslation(lang?: string): Observable<Translation> {
      throw new Error("STUB");
  }

  /**
   * Sets or merge a given translation object to current lang
   *
   * @example
   *
   * setTranslation({ ... })
   * setTranslation({ ... }, 'en')
   * setTranslation({ ... }, 'es', { merge: false } )
   * setTranslation({ ... }, 'todos/en', { merge: false } )
   */
  setTranslation(
    translation: Translation,
    lang = this.getActiveLang(),
    options: SetTranslationOptions = {},
  ) {
      // import-time preserved
  }

  /**
   * Sets translation key with given value
   *
   * @example
   *
   * setTranslationKey('key', 'value')
   * setTranslationKey('key.nested', 'value')
   * setTranslationKey('key.nested', 'value', 'en')
   * setTranslationKey('key.nested', 'value', 'en', { emitChange: false } )
   */
  setTranslationKey(
    key: string,
    value: string,
    options: Omit<SetTranslationOptions, 'merge'> = {},
  ) {
      throw new Error("STUB");
  }

  /**
   * Sets the fallback lang for the currently active language
   * @param fallbackLang
   */
  setFallbackLangForMissingTranslation({
    fallbackLang,
  }: Pick<TranslocoConfig, 'fallbackLang'>) {
      throw new Error("STUB");
  }

  /**
   * @internal
   */
  _handleMissingKey(key: string, value: any, params?: HashMap) {
      return {} as any;
  }

  /**
   * @internal
   */
  _isLangScoped(lang: string) {
      return false;
  }

  /**
   * Checks if a given string is one of the specified available languages.
   * @returns
   * True if the given string is an available language.
   * False if the given string is not an available language.
   */
  isLang(lang: string): boolean {
      return false;
  }

  /**
   * @internal
   *
   * We always want to make sure the global lang is loaded
   * before loading the scope since you can access both via the pipe/directive.
   */
  _loadDependencies(
    path: string,
    inlineLoader?: InlineLoader,
  ): Observable<Translation | Translation[]> {
      return {} as Observable<Translation | Translation[]>;
  }

  /**
   * @internal
   */
  _completeScopeWithLang(langOrScope: string) {
      throw new Error("STUB");
  }

  /**
   * @internal
   */
  _setScopeAlias(scope: string, alias: string) {
      // import-time preserved
  }

  private isLoadedTranslation(lang: string) {
      return {} as any;
  }

  private getAvailableLangsIds(): string[] {
      return [];
  }

  private getMissingHandlerData(): TranslocoMissingHandlerData {
      return {} as TranslocoMissingHandlerData;
  }

  /**
   * Use a fallback translation set for missing keys of the primary language
   * This is unrelated to the fallback language (which changes the active language)
   */
  private useFallbackTranslation(lang?: string) {
      return false;
  }

  private handleSuccess(lang: string, translation: Translation) {
      // import-time preserved
  }

  private handleFailure(lang: string, loadOptions: LoadOptions) {
      return {} as any;
  }

  private getMappedScope(scope: string): string {
      return "";
  }

  /**
   * If lang is scope we need to check the following cases:
   * todos/es => in this case we should take `es` as lang
   * todos => in this case we should set the active lang as lang
   */
  private resolveLangAndScope(lang: string) {
      return {} as { scope: any; resolveLang: string; };
  }

  private getObjectByKey(translation: Translation, key?: string) {
      return {} as Translation;
  }

  private getEntries(key: HashMap | Map<string, HashMap>) {
      return [];
  }
}
