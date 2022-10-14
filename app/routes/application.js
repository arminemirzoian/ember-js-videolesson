import Ember from 'ember';

// eslint-disable-next-line ember/new-module-imports
export default Ember.Route.extend({
  model() {
    // eslint-disable-next-line ember/no-get
    return this.get('store').createRecord('user', {
      firstName: 'Jim',
      lastName: 'Bob',
      age: 10,
    });
  },
});
