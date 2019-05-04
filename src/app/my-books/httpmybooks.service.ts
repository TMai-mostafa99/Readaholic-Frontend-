import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { myBooks } from '../classes/myBooks';
import { nbind } from 'q';

/**Handles h
 * ttp requests related to the boks of the user*/

@Injectable({
  providedIn: 'root'
 
})
export class HttpmybooksService {
  urll: string = 'http://ec2-52-90-5-77.compute-1.amazonaws.com';
/**
 * Constructor for httpmyBooks service . 
 
*/
  constructor(private http:HttpClient) { }

  
 /**
 *getMybooks() is a get request to get the data of the books of the main user he read and currently reading an to read  
 * The data i get is ( name of book , image of book  , id of book  ,ratiing of book , angrating , date o publication , date read).
 */
getMybooks(){
  return this.http.get(this.urll +'/api/following');

}
getMyshelfbooks( shelf_name:number){
  return this.http.get('http://4404e3cc.ngrok.io/api/shelf?shelf_name='+shelf_name);

}
gethisshelfbooks( shelf_name:number,user_id:number){
  return this.http.get('http://4404e3cc.ngrok.io/api/shelf?user_id='+user_id
  +'&&shelf_name='+shelf_name);
}
/**
     * Get the profile information i used it to get the  name of the user.
     * */
    getUserprofile(id: number): Observable<any> {
      return this.http.get<any> ('http://4404e3cc.ngrok.io/api/showProfile/'+ id );
    }
     /**
     * Get the profile information i used it to get the  name of the user.
     * */
    getAuthUserprofile(): Observable<any> {
      return this.http.get<any> ('http://4404e3cc.ngrok.ioapi/showProfile');
    }
  


/**
 *getUsershelves() is a get request to number of books the user read and currently reading an to read */


 
  

}
