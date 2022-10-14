import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
// eslint-disable-next-line ember/use-ember-data-rfc-395-imports, no-unused-vars
import { belongsTo, hasMany } from 'ember-data/relationships';

export const schema = {
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  age: attr('number'),
  job: attr('string'),
};

// eslint-disable-next-line ember/no-classic-classes
export default Model.extend(schema);
