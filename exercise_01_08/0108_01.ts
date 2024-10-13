// 1. Employee Salary
interface IEmployee {
    name: string;
    workingHour: number;
}
class Employee implements IEmployee {
    name: string;
    workingHour: number;

    constructor(_name: string) {
        this.name = _name;
    }

    setWorkingHour(_hour: number) {
        this.workingHour = _hour;
    }
}

class FulltimeEmployee extends Employee {
    rateFull: number;
    totalSalaryFull: number;
}

class ParttimeEmployee extends Employee {
    ratePart: number;
    totalSalaryPart: number;
}
