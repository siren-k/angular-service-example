import { Injectable } from "@angular/core";
import { Log1Service } from "./log1.service";

@Injectable()
export class FactoryService {

    constructor(private logService: Log1Service, private isFactory: Boolean) {

    }

    public log(): void {
        this.logService.info(`FactoryService ${this.isFactory}`);
    }

}