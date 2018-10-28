export class LoggingService {

    constructor() {}

    logStatusChange(newStatus: string) {
        console.log('A server status changed, new status: ' + newStatus);
    }
}