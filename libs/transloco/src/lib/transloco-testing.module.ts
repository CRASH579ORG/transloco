import {
  APP_INITIALIZER,
  Inject,
  Injectable,
  InjectionToken,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { Observable, of } from 'rxjs';

import { TranslocoLoader } from './transloco.loader';
import { Translation } from './transloco.types';
import { TranslocoModule } from './transloco.module';
import { provideTransloco } from './transloco.providers';
import { PartialTranslocoConfig } from './transloco.config';
import { TranslocoService } from './transloco.service';
import { HashMap } from './utils/type.utils';

export interface TranslocoTestingOptions {
  translocoConfig?: PartialTranslocoConfig;
  preloadLangs?: boolean;
  langs?: HashMap<Translation>;
}

const TRANSLOCO_TEST_LANGS = /* @__PURE__ */ new InjectionToken<
  HashMap<Translation>
>(
  typeof ngDevMode !== 'undefined' && ngDevMode
    ? 'TRANSLOCO_TEST_LANGS - Available testing languages'
    : '',
);

const TRANSLOCO_TEST_OPTIONS =
  /* @__PURE__ */ new InjectionToken<TranslocoTestingOptions>(
    typeof ngDevMode !== 'undefined' && ngDevMode
      ? 'TRANSLOCO_TEST_OPTIONS - Testing options'
      : '',
  );

@Injectable()
export class TestingLoader implements TranslocoLoader {
  constructor(
    @Inject(TRANSLOCO_TEST_LANGS) private langs: HashMap<Translation>,
  ) {}

  getTranslation(lang: string): Observable<Translation> | Promise<Translation> {
      return {} as any;
  }
}

export function initTranslocoService(
  service: TranslocoService,
  langs: HashMap<Translation> = {},
  options: TranslocoTestingOptions,
) {
    throw new Error("STUB");
}

@NgModule({
  exports: [TranslocoModule],
})
export class TranslocoTestingModule {
  static forRoot(
    options: TranslocoTestingOptions,
  ): ModuleWithProviders<TranslocoTestingModule> {
      throw new Error("STUB");
  }
}
