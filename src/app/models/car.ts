
export default class Car {
    id: string;
    name: string;
    marketplace: string;

    constructor({ id, name, marketplace }) {
        this.id = id;
        this.name = name;
        this.marketplace = marketplace;
    }
}