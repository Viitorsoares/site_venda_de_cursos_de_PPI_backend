import CourseDB from "../DB/courseDB.js";

export default class Course {

    // atributos privados
    #id_code;
    #title_course;
    #data_course;
    #duration;
    #price

    constructor(id_code, title_course, data_course, duration, price) {
        this.#id_code = id_code;
        this.#title_course = title_course;
        this.#data_course = data_course;
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

    get data_course() {
        return this.#data_course;
    }

    set data_course(newDate) {
        this.#data_course = newDate;
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
            "data_course": this.#data_course,
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
        return await courseDB.consult()
    }

    async consultId(id_code) {
        const courseDB = new CourseDB();
        return await courseDB.consultId(id_code)
    }
}