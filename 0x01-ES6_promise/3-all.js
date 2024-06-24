import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(results => {
      const [photo, user] = results;

      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(error => {
      console.error('Signup system offline');
    });
}
