import CourseDB from "../DB/courseDB";

export default class Course {

    // atributos privados
    #id_code;
    #title_course;
    #date;
    #duration;
    #price

    constructor(id_code, title_course, date, duration, price) {
        this.#id_code = id_code;
        this.#title_course = title_course;
        this.#date = date;
        this.#duration = duration;
        this.#price = price
    }

    get id_code() {
        return this.#id_code;
    }

    set id_code(newCode) {
        this.#id_code = newCode;
    }

    get title_course() {
        return this.#title_course;
    }

    set title_course(newName) {
        this.#title_course = newName;
    }

    get date() {
        return this.#date;
    }

    set date(newDate) {
        this.#date = newDate;
    }

    get duration() {
        return this.#duration;
    }

    set duration(newDuration) {
        this.#duration = newDuration;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        this.#price = newPrice;
    }


    toJSON() {
        return {
            "id_code": this.#id_code,
            "title_course": this.#title_course,
            "date": this.#date,
            "duration": this.#duration,
            "price": this.#price
        }
    }
    

    async toRecord() {
        const courseDB = new CourseDB();
        courseDB.toRecord(this)
    }

    async toAlter() {
        const courseDB = new CourseDB();
        courseDB.toAlter(this)
    }

    async delete() {
        const courseDB = new CourseDB();
        courseDB.delete(this)
    }

    async consult() {
        const courseDB = new CourseDB();
        return await courseDB.consult(this)
    }
}