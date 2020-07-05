import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { INoticia } from '../interfaces/iNoticia';

@Injectable({
  providedIn: 'root'
})

export class FirebaseNoticiasService {

  private noticiasCollection: AngularFirestoreCollection<INoticia>;
  private noticias: Observable<INoticia[]>;

  constructor(db: AngularFirestore) {

    /* Importacion de los datos de la base de datos de Noticias. */

    this.noticiasCollection = db.collection<INoticia>('Noticias');
    this.noticias = this.noticiasCollection.snapshotChanges().pipe(
      map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }
      ));

  }

  getNoticas(){

    return this.noticias;

  }

  getNoticia(id: string){

    return this.noticiasCollection.doc<INoticia>(id).valueChanges();

  }

}
