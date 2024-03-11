import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class gitInfoService {
  constructor(private http: HttpClient) {
  }

  getBranchInfo(): Observable<any[]> {
     return this.http.get<any[]>('http://localhost:8080/github_api/branch/aErema/nodejs-git');
  }

  getCommitInfo(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/github_api/commit/aErema/nodejs-git');
  }
}
