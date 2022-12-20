import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { User } from "../interfaces";
import { Observable, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private token = '';

    constructor (private http: HttpClient) {

    }

    registration (user:User): Observable<User> {
        return this.http.post<User>('/api/auth/registration', user)
    }

    login (user: User): Observable<{token:string}> {
        return this.http.post<{token:string}>('/api/auth/login', user)
        .pipe(
            tap(
                ({token}) => {
                    localStorage.setItem('auth-token', token)
                    this.setToken(token)
                }
            )
        )
    }

    setToken (token:any) {
        this.token = token
    };

    getToken () {
        return this.token
    };

    isAuthenticated (): boolean {
        return !!this.token
    };

    logout () {
        this.setToken(null)
        localStorage.clear()
    }

}