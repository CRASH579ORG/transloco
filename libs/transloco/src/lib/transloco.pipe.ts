import {
  ChangeDetectorRef,
  Inject,
  OnDestroy,
  Optional,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { forkJoin, Observable, Subscription, switchMap } from 'rxjs';
import { OrArray } from '@jsverse/utils';

import { TranslocoService } from './transloco.service';
import { Translation, TranslocoScope } from './transloco.types';
import { TRANSLOCO_SCOPE } from './transloco-scope';
import { TRANSLOCO_LANG } from './transloco-lang';
import {
  listenOrNotOperator,
  shouldListenToLangChanges,
} from './utils/lang.utils';
import { LangResolver } from './lang-resolver';
import { ScopeResolver } from './scope-resolver';
import { HashMap } from './utils/type.utils';
import { resolveInlineLoader } from './utils/scope.utils';

@Pipe({
  name: 'transloco',
  pure: false,
  standalone: true,
})
export class TranslocoPipe implements PipeTransform, OnDestroy {
  private subscription: Subscription | null = null;
  private lastValue = '';
  private lastKey: string | undefined;
  private path: string | undefined;
  private langResolver = new LangResolver();
  private scopeResolver!: ScopeResolver;

  constructor(
    private service: TranslocoService,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    private providerScope: OrArray<TranslocoScope> | undefined,
    @Optional()
    @Inject(TRANSLOCO_LANG)
    private providerLang: string | undefined,
    private cdr: ChangeDetectorRef,
  ) {
    this.scopeResolver = new ScopeResolver(this.service);
  }

  // null is for handling strict mode + async pipe types https://github.com/jsverse/transloco/issues/311
  // null is for handling strict mode + optional chaining types https://github.com/jsverse/transloco/issues/488
  transform(
    key?: string | null,
    params?: HashMap,
    inlineLang?: string,
  ): string {
      throw new Error("STUB");
  }

  ngOnDestroy() {
      throw new Error("STUB");
  }

  private updateValue(key: string, params?: HashMap | undefined) {
      throw new Error("STUB");
  }

  private resolveScope(
    lang: string,
    providerScope: TranslocoScope | null,
  ): Observable<Translation | Translation[]> {
      return {} as Observable<Translation | Translation[]>;
  }
}
