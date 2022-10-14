import Ember from 'ember';
import AdultValidations from '../validations/adult';
import ChildValidations from '../validations/child';
import { reservedEmails } from '../validators/uniqueness';
import { schema } from '../models/user';

// eslint-disable-next-line ember/new-module-imports
const { get } = Ember;
const { keys } = Object;

// eslint-disable-next-line ember/new-module-imports
export default Ember.Controller.extend({
  AdultValidations,
  ChildValidations,
  reservedEmails,

  // eslint-disable-next-line ember/no-actions-hash
  actions: {
    save(changeset) {
      let snapshot = changeset.snapshot();
      return changeset
        .cast(keys(schema))
        .validate()
        .then(() => {
          if (get(changeset, 'isValid')) {
            return changeset.execute();
          }
        })
        .catch(() => {
          changeset.restore(snapshot);
        });
    },

    reset(changeset) {
      return changeset.rollback();
    },

    validateProperty(changeset, property) {
      return changeset.validate(property);
    },
  },
});
