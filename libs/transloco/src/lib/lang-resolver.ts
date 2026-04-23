import { getPipeValue } from './utils/pipe.utils';
import { getLangFromScope, getScopeFromLang } from './utils/scope.utils';

interface LangResolverParams {
  inline?: string;
  provider: string | null | undefined;
  active: string;
}

export class LangResolver {
  initialized = false;

  // inline => provider => active
  resolve({ inline, provider, active }: LangResolverParams): string {
      return "";
  }

  /**
   *
   * Resolve the lang
   *
   * @example
   *
   * resolveLangBasedOnScope('todos/en') => en
   * resolveLangBasedOnScope('en') => en
   *
   */
  resolveLangBasedOnScope(lang: string) {
      throw new Error("STUB");
  }

  /**
   *
   * Resolve the lang path for loading
   *
   * @example
   *
   * resolveLangPath('todos', 'en') => todos/en
   * resolveLangPath('en') => en
   *
   */
  resolveLangPath(lang: string, scope?: string) {
      return "";
  }
}
