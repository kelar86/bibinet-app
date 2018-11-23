export default class Supplier {
    id: string;
    name: string;
    adress: string;
    phone: string[];

    constructor({ id, name }) {
        this.id = id;
        this.name = name;
    }
}