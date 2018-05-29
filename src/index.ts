import { Observable, of, interval } from 'rxjs'
import { map, repeatWhen } from 'rxjs/operators'

const notifier = () => {
    return interval(1000)
}

const source$ = of(1, 2, 3).repeatWhen(notifier)


source$.subscribe(x => console.log(x))