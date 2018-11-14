import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppModel } from '../models/app.model'
import { BehaviorSubject, Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class AppService {

    private settingsSubject = new BehaviorSubject<AppModel>({
        appTitle: "tonomony-angular-skeleton",
        pageTitle: "",
        isLoading: true
    } as AppModel);

    constructor(private titleService: Title) {
    }

    settings$() {
        return this.settingsSubject
            .asObservable()
            .pipe(distinctUntilChanged());
    }

    setPageTitle(title: string): Observable<string> {
        let settings = this.settingsSubject.value;
        settings.pageTitle = title;

        if (settings.pageTitle === '') {
            this.titleService.setTitle(settings.appTitle);
        } else {
            this.titleService.setTitle(settings.pageTitle + " | " + settings.appTitle);
        }

        this.settingsSubject.next(settings);

        return this.settings$().pipe(
            map(s => s.pageTitle)
        )
    }
}