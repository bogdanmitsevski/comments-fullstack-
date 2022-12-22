import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Comment } from "../interfaces";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CommentService {


    constructor (private http: HttpClient) {

    }

    addComment (comment:Comment, uploadedFile: File,): Observable<Comment> {
        const fd = new FormData();

        if(uploadedFile) {
            fd.append('file', uploadedFile)
        }

        return (this.http.post<Comment>('/api/comments/:id', comment)) && (this.http.post<Comment>('/api/comments/:id', fd))


    }

    getComment (): Observable<Comment> {
        return this.http.get<Comment>('/api/comments').pipe(map((res:any) => res.data))
    }


    
}