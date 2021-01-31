export class Enrollee {
    constructor(
        public id: string,
        public active: boolean,
        public name: string,
        public dateOfBirth: Date
    ) {}
}