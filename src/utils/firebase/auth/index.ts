// @ts-nocheck
import firebase from 'firebase/app';
import 'firebase/auth';

import { appConfig } from 'config/firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(appConfig);
}

const auth = firebase.auth();

/**
 * Check user's current login state
 * @returns {object} Firebase user object
 */
const checkLoginStatus = () =>
  new Promise(resolve => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    });
  });

/**
 * Get user's firebase token
 * @param user Firebase user
 * @returns {object}
 */
const getIdToken = user =>
  user
    .getIdToken()
    .then(token => token)
    .catch(error => {
      throw error;
    });

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<UserCredential>}
 */
const signIn = (email, password) =>
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => user)
    .catch(error => {
      throw error;
    });

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<AuthCredential>}
 */
const signUp = (email, password) =>
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(user => user)
    .catch(error => {
      throw error;
    });

/**
 * Signs the user out.
 * @returns {void}
 */
const signOut = () =>
  auth
    .signOut()
    .then(data => data)
    .catch(error => {
      throw error;
    });

export { signOut, getIdToken, checkLoginStatus, signUp, signIn };
