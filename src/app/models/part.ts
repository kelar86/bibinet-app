export default class Part {
    id: number;
    company_id: number;
    mark_model: string;
    name: string;
    photo: {};
    price: number;
    comment: string;

    constructor({ id, company_id, mark_model, name, photo, price, comment }) {
        this.id = id;
        this.company_id = company_id;
        this.mark_model = mark_model;
        this.name = name;
        this.photo = photo;
        this.price = price;
        this.comment = comment;
    }
}