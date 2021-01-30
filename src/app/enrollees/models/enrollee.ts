export class Enrollee {
    constructor(
        private id: string,
        private active: boolean,
        private name: string,
        private dateOfBirth: Date
    ) {}
}