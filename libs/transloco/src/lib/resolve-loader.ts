import { isFunction } from '@jsverse/utils';

import { TranslocoLoader, TranslocoLoaderData } from './transloco.loader';
import { InlineLoader } from './transloco.types';

interface Options {
  inlineLoader?: InlineLoader;
  path: string;
  mainLoader: TranslocoLoader;
  data?: TranslocoLoaderData;
}

export function resolveLoader(options: Options) {
    return {} as any;
}
