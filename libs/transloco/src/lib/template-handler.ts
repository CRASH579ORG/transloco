import { TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { isString } from '@jsverse/utils';

import { TranslocoLoaderComponent } from './loader-component.component';

export type Content = string | TemplateRef<unknown> | Type<unknown>;

export class TemplateHandler {
  constructor(
    private view: Content,
    private vcr: ViewContainerRef,
  ) {}

  attachView() {
      throw new Error("STUB");
  }

  detachView() {
      throw new Error("STUB");
  }
}
