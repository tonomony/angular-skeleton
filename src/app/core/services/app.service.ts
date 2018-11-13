import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { map ,  distinctUntilChanged } from 'rxjs/operators';

import {AppModel} from '../models/app.model'

@Injectable()
export class AppService{
    private modelSubject = new BehaviorSubject<AppModel>({} as AppModel);
    public model = this.modelSubject.asObservable().pipe(distinctUntilChanged());

    constructor(private titleService: Title) {
    }

    update(app: AppModel) {
        this.modelSubject.next(app);
        this.titleService.setTitle(app.title);
    }
}