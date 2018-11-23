export default class Part {
    id: number;
    company_id: number;
    name: string;
    mark_model: string;
    photo: string;
    price: number;
    comment: string;

    constructor({ id, company_id, name, photo, price, comment }) {
        this.id = id;
        this.company_id = company_id;
        this.name = name;
        this.photo = photo;
        this.price = price;
        this.comment = comment;
    }
}