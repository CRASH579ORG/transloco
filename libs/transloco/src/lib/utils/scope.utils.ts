import { isObject } from '@jsverse/utils';

import {
  InlineLoader,
  LoadedEvent,
  ProviderScope,
  TranslocoScope,
} from '../transloco.types';

/*
 * @example
 *
 * given: lazy-page/en => lazy-page
 *
 */
export function getScopeFromLang(lang: string): string {
    return "";
}

/*
 * @example
 *
 * given: lazy-page/en => en
 *
 */
export function getLangFromScope(lang: string): string {
    return "";
}

function prependScope(inlineLoader: InlineLoader, scope: string) {
    return {} as Record<string, () => Promise<Translation>>;
}

export function isScopeObject(item: any): item is ProviderScope {
    return false;
}

export function hasInlineLoader(item: any): item is ProviderScope {
    return false;
}

export function resolveInlineLoader(
  providerScope: TranslocoScope | null,
  scope?: string,
): InlineLoader | undefined {
    return {} as InlineLoader;
}

export function getEventPayload(lang: string): LoadedEvent['payload'] {
    return {} as { scope: string | null; langName: string; };
}
