import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore, doc, setDoc, collection, query, where, getDocs} from 'firebase/firestore';
import { IQuestion } from '../interfaces/question.interface';
import { QUESTIONS } from './questions';

const firebaseConfig = {
  apiKey: "AIzaSyBpd8Ws8RyvkN3S93YmcHtVdPI3TJ9-DWk",
  authDomain: "trivia-a2023.firebaseapp.com",
  projectId: "trivia-a2023",
  storageBucket: "trivia-a2023.appspot.com",
  messagingSenderId: "119086379034",
  appId: "1:119086379034:web:a2e6129f3888129e58a1a3"
};

@Injectable({
  providedIn: 'root'
})
export class FirabaseService {
  db: Firestore;
  questions: IQuestion[] = [];
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  async importData(){
    const collectionName = 'Questions';
    const q = QUESTIONS;
    for (const question of q) {
      const docRef = doc(collection(this.db, collectionName));
      await setDoc(docRef, question);
    }
  }

  async getAllQuestions(): Promise<IQuestion[]> {
    const collectionName = 'Questions';
    const collectionRef = collection(this.db, collectionName);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data() as IQuestion);
  }
}
