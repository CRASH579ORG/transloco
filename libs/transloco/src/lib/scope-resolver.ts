import { OrArray, toCamelCase } from '@jsverse/utils';

import { ProviderScope, TranslocoScope } from './transloco.types';
import { TranslocoService } from './transloco.service';
import { isScopeObject } from './utils/scope.utils';

type ScopeResolverParams = {
  inline: string | undefined;
  provider: OrArray<TranslocoScope> | null;
};

export class ScopeResolver {
  constructor(private service: TranslocoService) {}

  // inline => provider
  resolve(params: ScopeResolverParams): string | undefined {
      return "";
  }
}
