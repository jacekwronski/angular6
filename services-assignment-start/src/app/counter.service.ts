export class CounterService {
    
    count: number = 0;

    countAndDisplay() {
        this.count++;
        console.log(this.count);
    }

}