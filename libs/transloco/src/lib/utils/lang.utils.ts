import { Observable, OperatorFunction, take } from 'rxjs';

import { TranslocoService } from '../transloco.service';

import { getPipeValue } from './pipe.utils';

export function shouldListenToLangChanges(
  service: TranslocoService,
  lang?: string,
) {
    return false;
}

export function listenOrNotOperator<T>(
  listenToLangChange?: boolean,
): OperatorFunction<T, T> {
    return {} as OperatorFunction<T, T>;
}
