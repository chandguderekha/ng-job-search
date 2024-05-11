import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs, JobDetails } from '../model/jobDetails';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private favoriteJobs: Jobs[] = [];

  private apiUrl = '/jobs';

  constructor(private http: HttpClient) { }

  getFavoriteJobs(): Jobs[] {
    return this.favoriteJobs;
  }
  
  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(`${this.apiUrl}`);
  } 

  getJobsDetialsData(job: number) {
    return this.http.get<JobDetails>(`${this.apiUrl}/${job}` );
  }
}
