import { from, map } from 'rxjs';

import { resolveLoader } from './resolve-loader';
import { TranslocoLoader, TranslocoLoaderData } from './transloco.loader';
import { InlineLoader } from './transloco.types';

interface Options {
  path: string;
  fallbackPath?: string;
  inlineLoader?: InlineLoader;
  mainLoader: TranslocoLoader;
  data?: TranslocoLoaderData;
}

export function getFallbacksLoaders({
  mainLoader,
  path,
  data,
  fallbackPath,
  inlineLoader,
}: Options) {
    return [];
}
