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
              map((details) => ({
                name: repo.name,
                creation: repo.created_at,
                updated: repo.updated_at,
                banner: `${details.rawBaseUrl}/banner.jpg`,
                description: `${details.rawBaseUrl}/description.md`,
                topics: repo.topics,
              }))
            )
          )
        )
      )
    );
  }

  private getRepoDetails(repo: any): Observable<{ rawBaseUrl: string }> {
    const repoContentsUrl = `${this.baseUrl}/repos/${this.user}/${repo.name}/contents`;

    return this.http.get<any[]>(repoContentsUrl).pipe(
      map((contents) => {
        const hasBanner = contents.some((file) => file.name === 'banner.jpg');
        const hasDescription = contents.some((file) => file.name === 'description.md');

        if (hasBanner && hasDescription) {
          return { rawBaseUrl: `https://raw.githubusercontent.com/${this.user}/${repo.name}/main/portfolioDetails` };
        }
        throw new Error(`Repo ${repo.name} does not have required files.`);
      })
    );
  }
}
