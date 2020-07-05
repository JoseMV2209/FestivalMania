import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Options } from '../interfaces/iOptions';

@Injectable({
  providedIn: 'root'
})
export class FirebaseMenuService {

  private menuCollection: AngularFirestoreCollection<Options>;
  private menuOptions: Observable<Options[]>;

  constructor(db: AngularFirestore) {

    /* Importacion de los datos de la base de datos del Menu. */

    this.menuCollection = db.collection<Options>('menu');
    this.menuOptions = this.menuCollection.snapshotChanges().pipe(
      map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }
      ));

  }

  getMenuOptions(){

    return this.menuOptions;

  }

}
