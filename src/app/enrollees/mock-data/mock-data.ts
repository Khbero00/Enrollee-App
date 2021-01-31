import { Enrollee } from "../models/enrollee";

export class EnrolleesMock {
    getEnrollees(): Enrollee[] {
        return [
            new Enrollee('384', true, 'Batman', new Date('01/20/1997')),
            new Enrollee('567', false, 'Superman', new Date('01/20/1956')),
            new Enrollee('u87', true, 'Black Panther', new Date('01/20/1980')),
            new Enrollee('7hg', false, 'Slade', new Date('01/20/2000')),
            new Enrollee('jj78', true, 'Wonder Woman', new Date('01/20/1990'))
        ];
    }
}