import { Toefl } from './../models/toefl.model';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ToeflExamService {

  loginStatusChecked = false;

  private toefls: Toefl[] = [];
  public toeflListChanged = new Subject<Toefl[]>();
  constructor(private http: HttpClient)  {}

  getAllToeflLists() {

    this.http.get<{ message: string, toefls: Toefl[] }>('https://examsimv100.herokuapp.com/showExam/')
                  .subscribe((postToefls) => {
                                                this.toefls = postToefls.toefls;
                                                this.toeflListChanged.next([...this.toefls]);
                                              },
                                                (error) => console.log(error)
                );
  }

}


