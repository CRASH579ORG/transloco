import { isString } from '@jsverse/utils';

/**
 * @example
 *
 * getPipeValue('todos|scoped', 'scoped') [true, 'todos']
 * getPipeValue('en|static', 'static') [true, 'en']
 * getPipeValue('en', 'static') [false, 'en']
 */
export function getPipeValue(
  str: string | undefined,
  value: string,
  char = '|',
): [boolean, string] {
    return {} as [boolean, string];
}
