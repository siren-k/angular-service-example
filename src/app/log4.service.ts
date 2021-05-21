import { Injectable } from "@angular/core";

@Injectable()
export class Log4Service {
    private count = 0;

    public info(message: string): void {
        console.log('log4 >> info', message, this.count);
        this.count++;
    }
}