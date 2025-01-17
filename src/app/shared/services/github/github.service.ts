import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, filter, mergeMap } from 'rxjs/operators';

export interface Repo {
  name: string;
  creation: string;
  updated: string;
  banner: string;
  description: string;
  extra: string;
  topics: string[];
  
}

@Injectable({
  providedIn: 'root',
})

export class GithubService {
  private readonly baseUrl = 'https://api.github.com';
  private readonly user = 'SesifredoDev';

  constructor(private http: HttpClient) {}

  getRepos(): Observable<Repo[]> {
    const userReposUrl = `${this.baseUrl}/users/${this.user}/repos`;

    return this.http.get<any[]>(userReposUrl).pipe(
      map((repos) =>
        repos.filter((repo) => repo.topics && repo.topics.includes('portfolio'))
      ),
      mergeMap((filteredRepos) =>
        forkJoin(
          filteredRepos.map((repo) =>
            this.getRepoDetails(repo).pipe(
              map((details) => {
                
                let result ={
                name: repo.name,
                creation: repo.created_at,
                updated: repo.updated_at,
                banner: `${details.rawBaseUrl}/banner.jpg`,
                description: `${details.rawBaseUrl}/description.md`,
                topics: repo.topics,
                extra:  "",
                icon: "",
              }
              if(details.hasExtra){
                result.extra = `${details.rawBaseUrl}/extra.json`;
              }
              if(details.hasIcon){
                result.icon = `${details.rawBaseUrl}/icon.jpg`;
              }
              return result;
            })
            )
          )
        )
      )
    );
  }

  private getRepoDetails(repo: any): Observable<{ rawBaseUrl: string,  hasExtra: boolean, hasIcon: boolean }> {
    const repoContentsUrl = `${this.baseUrl}/repos/${this.user}/${repo.name}/contents/portfolioDetails`;

    return this.http.get<any[]>(repoContentsUrl, {

    }).pipe(
      map((contents) => {
        const hasIcon =  contents.some((file) => file.name === 'icon.jpg');
        
        const hasExtra =  contents.some((file) => file.name === 'extra.json');

          return { rawBaseUrl: `https://raw.githubusercontent.com/${this.user}/${repo.name}/main/portfolioDetails`, hasExtra, hasIcon };

        throw new Error(`Repo ${repo.name} does not have required files.`);
      })
    );
  }
}
