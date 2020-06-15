import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Festival } from '../interfaces/iFestival';
import { Options } from '../interfaces/iOptions';
import { INoticia } from '../interfaces/iNoticia';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private festivalesCollection: AngularFirestoreCollection<Festival>;
  private festivales: Observable<Festival[]>;

  private menuCollection: AngularFirestoreCollection<Options>;
  private menuOptions: Observable<Options[]>;

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

  getMenuOptions(){

    return this.menuOptions;

  }

  getFestivales(){

    return this.festivales;

  }

  getFestival(id: string){

    return this.festivalesCollection.doc<Festival>(id).valueChanges();

  }

  getNoticas(){

    return this.noticias;

  }

  getNoticia(id: string){

    return this.festivalesCollection.doc<INoticia>(id).valueChanges();

  }

}
