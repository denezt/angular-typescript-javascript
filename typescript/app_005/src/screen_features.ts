import { fromEvent, interval } from "rxjs";
import { auditTime } from "rxjs";
// import { event } from "jquery";

export class ScreenFeatures {
    constructor(){}
    execMouseWatch(){
        // Mouse Click Example
        const click$ = fromEvent(document, 'click');
        const clicksAudited = click$.pipe(auditTime(1000));
        clicksAudited.subscribe((event) => console.log(event));
    }
}

