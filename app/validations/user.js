import {
  validatePresence,
  validateLength,
  validateFormat,
} from 'ember-changeset-validations/validators';
import validateUniqueness from '../validators/uniqueness';

export default {
  firstName: [validatePresence(true), validateLength({ min: 2 })],
  lastName: [validatePresence(true), validateLength({ min: 2 })],
  email: [validateUniqueness(), validateFormat({ type: 'email' })],
  job: validatePresence(true),
};
