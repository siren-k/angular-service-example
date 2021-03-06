import { Injectable } from "@angular/core";

@Injectable()
export class Log2Service {
    private count = 0;

    public info(message: string): void {
        console.log('log2 >> info', message, this.count);
        this.count++;
    }
}