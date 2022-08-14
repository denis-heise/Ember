import {get} from '@ember/object';
import { helper } from '@ember/component/helper';
import ENV from 'test-book/config/environment';

export function url([property]) {
  return get(ENV, property);
}

export default helper(url);
