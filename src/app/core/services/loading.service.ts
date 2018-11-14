import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable()
export class LoadingService {

    private loadingsSubject = new BehaviorSubject<Array<[string, number]>>([]);

    constructor() {
    }

    private getLoadingProcess(loadings: Array<[string, number]>, key: string) {
        let loading = loadings.find(x => x[0] == key);
        if (loading) {
            return loading[1];
        }
        return 0;
    }

    isLoading$(): Observable<boolean> {
        return this.loadingsSubject.pipe(
            map(a => a.length > 0),
            distinctUntilChanged()
        );
    }

    currentProgress$(key: string): Observable<number> {
        return this.loadingsSubject.pipe(
            map(a => this.getLoadingProcess(a, key)),
            distinctUntilChanged()
        );
    }

    startLoading(key: string): Observable<boolean> {
        let loadings = this.loadingsSubject.value;

        if (!loadings.find(x => x[0] == key)) {
            loadings.push([key, 0]);
            this.loadingsSubject.next(loadings);
        }

        return this.isLoading$();
    }

    stopLoading(key: string): Observable<boolean> {
        let loadings = this.loadingsSubject.value;
        let index = loadings.indexOf(loadings.find(x => x[0] == key));
        loadings.splice(index);
        this.loadingsSubject.next(loadings);

        return this.isLoading$();
    }

    setLoadingProgress(key: string, progress: number): Observable<boolean> {
        if (progress < 0 || progress > 100) {
            return;
        }

        let loadings = this.loadingsSubject.value;
        let loading = loadings.find(x => x[0] == key);
        if (loading) {
            loading[1] = progress;
        }
        this.loadingsSubject.next(loadings);

        return this.isLoading$();
    }
}