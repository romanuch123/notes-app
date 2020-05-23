import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

Vue.use(firestorePlugin);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
