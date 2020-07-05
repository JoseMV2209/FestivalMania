import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Festival } from '../interfaces/iFestival';

@Injectable({
  providedIn: 'root'
})

export class FirebaseFestivalesService {

  private festivalesCollection: AngularFirestoreCollection<Festival>;
  private festivales: Observable<Festival[]>;

  constructor(db: AngularFirestore) {
    
    /* Importacion de los datos de la base de datos de los festivales. */

    this.festivalesCollection = db.collection<Festival>('Festivales');
    this.festivales = this.festivalesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));

  }

  
  getFestivales(){

    return this.festivales;

  }

  getFestival(id: string){

    return this.festivalesCollection.doc<Festival>(id).valueChanges();

  }

}
