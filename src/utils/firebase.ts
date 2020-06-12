import firebase from 'firebase';
import 'firebase/firestore';

import { FIREBSE_CONF } from '../constants/firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBSE_CONF);
}

export default firebase;
