import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore, docData, getDocs, setDoc} from '@angular/fire/firestore';
import { collection, collectionData} from '@angular/fire/firestore';
import { doc,addDoc,getDoc, Timestamp, updateDoc, serverTimestamp} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'firebaseAngular';

   firestore = inject(Firestore);
  
   //adding data in firebase
  //  name=""
  //  email=""
  // async submit(){
  //   const check= await addDoc(collection(this.firestore, "cities"), {
  //     name: this.name,
  //     email: this.email
  //   }  
  //   );
  async ngOnInit(): Promise<void> {
    // try {
    //   const docRef = await addDoc(collection(this.firestore, "users"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    //   });
      
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

    // try {
    //   const docRef = await addDoc(collection(this.firestore, "users"), {
    //     first: "Alan",
    //     middle: "Mathison",
    //     last: "Turing",
    //     born: 1912
    //   });
    
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

//     const querySnapshot = await getDocs(collection(this.firestore, "users"));
// querySnapshot.forEach((doc) => {
//   console.log (doc.data(), doc.id);
// });


  }
   }
