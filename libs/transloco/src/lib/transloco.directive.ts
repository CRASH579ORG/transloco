import {
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { OrArray } from '@jsverse/utils';

import { Content, TemplateHandler } from './template-handler';
import { TRANSLOCO_LANG } from './transloco-lang';
import { TRANSLOCO_LOADING_TEMPLATE } from './transloco-loading-template';
import { TRANSLOCO_SCOPE } from './transloco-scope';
import { TranslocoService } from './transloco.service';
import { Translation, TranslocoScope } from './transloco.types';
import {
  listenOrNotOperator,
  shouldListenToLangChanges,
} from './utils/lang.utils';
import { resolveInlineLoader } from './utils/scope.utils';
import { LangResolver } from './lang-resolver';
import { ScopeResolver } from './scope-resolver';
import { HashMap } from './utils/type.utils';

type TranslateFn = (key: string, params?: HashMap) => any;
interface ViewContext {
  $implicit: TranslateFn;
  currentLang: string;
}

@Directive({
  selector: '[transloco]',
  standalone: true,
})
export class TranslocoDirective implements OnInit, OnDestroy, OnChanges {
  private destroyRef = inject(DestroyRef);
  private service = inject(TranslocoService);
  private tpl = inject<TemplateRef<ViewContext>>(TemplateRef, {
    optional: true,
  });
  private providerLang = inject(TRANSLOCO_LANG, { optional: true });
  private providerScope: OrArray<TranslocoScope> | null = inject(
    TRANSLOCO_SCOPE,
    { optional: true },
  );
  private providedLoadingTpl = inject(TRANSLOCO_LOADING_TEMPLATE, {
    optional: true,
  });
  private cdr = inject(ChangeDetectorRef);
  private host = inject(ElementRef);
  private vcr = inject(ViewContainerRef);
  private renderer = inject(Renderer2);

  view: EmbeddedViewRef<ViewContext> | undefined;

  private memo = new Map<string, any>();

  @Input('transloco') key: string | undefined;
  @Input('translocoParams') params: HashMap = {};
  @Input('translocoScope') inlineScope: string | undefined;
  /** @deprecated use prefix instead, will be removed in Transloco v9 */
  @Input('translocoRead') inlineRead: string | undefined;
  @Input('translocoPrefix') prefix: string | undefined;
  @Input('translocoLang') inlineLang: string | undefined;
  @Input('translocoLoadingTpl') inlineTpl: Content | undefined;

  private currentLang: string | undefined;
  private loaderTplHandler: TemplateHandler | undefined;
  // Whether we already rendered the view once
  private initialized = false;
  private path: string | undefined;
  private langResolver = new LangResolver();
  private scopeResolver = new ScopeResolver(this.service);
  private readonly strategy = this.tpl === null ? 'attribute' : 'structural';

  static ngTemplateContextGuard(
    dir: TranslocoDirective,
    ctx: unknown,
  ): ctx is ViewContext {
      throw new Error("STUB");
  }

  ngOnInit() {
      throw new Error("STUB");
  }

  ngOnChanges(changes: SimpleChanges) {
      throw new Error("STUB");
  }

  private attributeStrategy() {
      throw new Error("STUB");
  }

  private structuralStrategy(lang: string, prefix?: string) {
      throw new Error("STUB");
  }

  protected getTranslateFn(
    lang: string,
    prefix: string | undefined,
  ): TranslateFn {
      throw new Error("STUB");
  }

  private resolveLoadingContent() {
      throw new Error("STUB");
  }

  ngOnDestroy() {
      throw new Error("STUB");
  }

  private detachLoader() {
      throw new Error("STUB");
  }

  private resolveScope(
    lang: string,
    providerScope: TranslocoScope | null,
  ): Observable<Translation | Translation[]> {
      return {} as Observable<Translation | Translation[]>;
  }
}
