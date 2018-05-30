import { Observable, of, interval, timer, merge } from 'rxjs'
import { repeatWhen, map, zip } from 'rxjs/operators'

// const notifier = () => {
//     return interval(1000)
// }

// const source$ = of(1, 2, 3).pipe(repeatWhen(notifier))
const source1$ = timer(0, 1000).pipe(map(x => x + 'A'))
const source2$ = timer(500, 1000).pipe(map(x => x + 'B'))

// const source$ = merge(source1$, source2$)
const source$ = source1$.pipe(zip(source2$))

source$.subscribe(x => console.log(x))