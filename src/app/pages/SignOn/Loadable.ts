/**
 *
 * Asynchronously loads the component for SignOn
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SignOn = lazyLoad(
  () => import('./index'),
  module => module.SignOn,
);
