import admin from 'firebase-admin';
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);
console.log(serviceAccount, process.env.FIREBASE_DATABASE_URL);

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.FIREBASE_DATABASE_URL
    });
  } catch (error) {
    console.error('Firebase admin initialization error', error);
  }
}
export default admin.firestore();