import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TeslaService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>('https://newsapi.org/v2/everything?q=tesla&from=2021-11-01&sortBy=publishedAt&apiKey=6e9a6440fce04ffb96fe8b639460d1f4')
  }
}
