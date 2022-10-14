import Ember from 'ember';
import { validateNumber } from 'ember-changeset-validations/validators';
import UserValidations from './user';

// eslint-disable-next-line ember/new-module-imports
const { assign } = Ember;

export default assign({}, UserValidations, {
  age: validateNumber({ lt: 18 })
});
