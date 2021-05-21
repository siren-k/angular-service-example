import { Injectable } from "@angular/core";

@Injectable()
export class Log3Service {
    private count = 0;

    public info(message: string): void {
        console.log('log3 >> info', message, this.count);
        this.count++;
    }
}