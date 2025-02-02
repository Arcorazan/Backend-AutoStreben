import { Entity, OneToOne, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { Order } from "./OrderEntity.js";

@Entity()
export class Review extends BaseEntity {

    @Property({type: 'string'})
    photo;

    @Property({type: 'string'})
    comment;

    @Property({type: 'number'})
    stars;

    @OneToOne(() => Order)
      order;

    constructor(data) {
        this.photo = data.photo;
        this.comment = data.comment;
        this.stars = data.stars;
      }
}