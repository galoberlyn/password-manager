/**
 *
 * Asynchronously loads the component for Passwords
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Passwords = lazyLoad(
  () => import('./index'),
  module => module.Passwords,
);
