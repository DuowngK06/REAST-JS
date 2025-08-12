abstract class Job {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    abstract calculateSalary(): number;
}

class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }

    calculateSalary(): number {
        return 10000000;
    }
}

class ParttimeJob extends Job {
    private workingHour: number;

    constructor(workingHour: number) {
        super("Part-time");
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
        return this.workingHour * 30000;
    }
}

const jobs: Job[] = [
    new FulltimeJob(),
    new ParttimeJob(80)
];

jobs.forEach(job => {
    job.printType();
    console.log(`Lương: ${job.calculateSalary().toLocaleString()} VNĐ`);
});