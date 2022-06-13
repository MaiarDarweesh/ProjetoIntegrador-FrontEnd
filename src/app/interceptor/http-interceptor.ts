import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = 'http://localhost:8080/'; 
        // const url = 'https://vidaprojeto.herokuapp.com/'  - URL de produção
        req = req.clone({
            url: url + req.url
        });
        return next.handle(req);
    }
}
