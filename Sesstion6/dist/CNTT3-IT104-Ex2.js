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
        return 30000 * this.workingHour;
    }
}
const parttime = new ParttimeJob(80);
const fulltime = new FulltimeJob();
parttime.printType();
console.log(`Lương: ${parttime.calculateSalary().toLocaleString()} VNĐ`);
fulltime.printType();
console.log(`Lương: ${fulltime.calculateSalary().toLocaleString()} VNĐ`);
