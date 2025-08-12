class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary() {
        return 10000000;
    }
}
class ParttimeJob extends Job {
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return this.workingHour * 30000;
    }
}
const jobs = [
    new FulltimeJob(),
    new ParttimeJob(80)
];
jobs.forEach(job => {
    job.printType();
    console.log(`Lương: ${job.calculateSalary().toLocaleString()} VNĐ`);
});
