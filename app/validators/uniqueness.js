import Ember from 'ember';

const {
  // eslint-disable-next-line ember/new-module-imports
  RSVP: { resolve },
} = Ember;
export const reservedEmails = ['foo@bar.com', 'admin@example.com'];

export default function validateUniqueness() {
  return (key, newValue, oldValue, changes) => {
    let isAvailable = reservedEmails.indexOf(newValue) === -1;

    return resolve(isAvailable || 'is taken');
  };
}
