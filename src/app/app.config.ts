import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"firstfirebase-aeb9d","appId":"1:970165471326:web:aec50cd67168bc2d924ccf","storageBucket":"firstfirebase-aeb9d.firebasestorage.app","apiKey":"AIzaSyCz0zmoVMtoA8K38hBqb86llhRdtIfsRjA","authDomain":"firstfirebase-aeb9d.firebaseapp.com","messagingSenderId":"970165471326"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
