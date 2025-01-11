import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class Order extends BaseEntity {

    @Property({type: 'string'})
    status;

    @Property({type: 'number'})
    totalAmount;

    @Property({type: 'number'})
    tax;

    @Property({type: 'number'})
    subTotal;

    @Property({type: 'string'})
    address;

    constructor(data) {
        this.status = data.status;
        this.totalAmount = data.totalAmount;
        this.tax = data.tax
        this.subTotal = data.subTotal
        this.address = data.address
      }
}