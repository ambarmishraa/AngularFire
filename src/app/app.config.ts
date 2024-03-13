import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  
  //initalization of firestore
  providers: [provideRouter(routes),importProvidersFrom([
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAkqHmFSJUqEBitcthkOVWQLtSciT6XZp4",
      authDomain: "kanban-nae-shurvat.firebaseapp.com",
      projectId: "kanban-nae-shurvat",
      storageBucket: "kanban-nae-shurvat.appspot.com",
      messagingSenderId: "362116582487",
      appId: "1:362116582487:web:b42ba2b9b1de6dbe5ee712"
    })),
    provideFirestore(() => getFirestore()),
  ])
  ]
  
};
