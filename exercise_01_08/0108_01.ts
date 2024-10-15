// 1. Employee Salary
// ! usahakan perhitungan gaji di parent kelas. jika di parent kelas, maka akan memerlukan input rate masing2 antara fulltime atau parttime
// ! gaji utama dan overtime bisa dipisah
class Employee {
    name: string;
    working: {
        name: string;
        clockIn: string;
        clockOut: string;
        dailyHour: number;
        dailySalary: number;
    }[] = [];

    constructor(_name: string) {
        this.name = _name;
    }
}

class FulltimeEmployee extends Employee {
    rateFullHi: number;
    rateFullLow: number;
    #fixWorkingHours = 6;

    constructor(_nama: string, _rateHi: number, _rateLow: number) {
        super(_nama);
        this.rateFullHi = _rateHi;
        this.rateFullLow = _rateLow;
    }

    addWorkingHour(_cIn: string, _cOut: string) {
        const hour = this.#hhmmSelisih(_cIn, _cOut);
        console.log(hour);

        this.working.push({
            name: this.name,
            clockIn: _cIn,
            clockOut: _cOut,
            dailyHour: hour,
            dailySalary:
                hour > this.#fixWorkingHours
                    ? this.#fixWorkingHours * this.rateFullHi +
                      (hour - this.#fixWorkingHours) * this.rateFullLow
                    : hour * this.rateFullHi,
        });
    }

    getTotalSalary() {
        let total = 0;
        for (let elem of this.working) {
            total += elem.dailySalary;
            console.log(elem.dailySalary);
        }
        return total;
    }

    #hhmmSelisih(t1: string, t2: string) {
        let timeA = t1.split(":");
        let timeB = t2.split(":");
        console.log(timeA);
        console.log(timeB);

        let time1 = parseInt(timeA[0], 10) + parseInt(timeA[1], 10) / 60;
        console.log(time1);
        let time2 = parseInt(timeB[0], 10) + parseInt(timeB[1], 10) / 60;
        console.log(time2);

        let selisih = Math.abs(time1 - time2);
        return Math.floor(selisih);
    }
}

let emp1 = new FulltimeEmployee("Adi", 100000, 75000);

emp1.addWorkingHour("07:30", "17:20");
// emp1.addWorkingHour("08:00", "10:00");
// emp1.addWorkingHour("07:00", "15:00");
// emp1.addWorkingHour("09:00", "15:00");

console.log(emp1.working);
console.log(emp1.getTotalSalary());
