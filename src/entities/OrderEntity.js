import { Cascade, Entity, OneToOne, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { User } from "./UserEntity.js";
import { Payment } from "./PaymentEntity.js";
import { Review } from "./ReviewEntity.js";

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

    @OneToOne(() => Payment, b=> b.order, { cascade: [Cascade.ALL]})
        payment = new Collection()< Payment >this;

        @OneToOne(() => Review, b=> b.order, { cascade: [Cascade.ALL]})
        Review = new Collection()< Review >this;

    constructor(data) {
        this.status = data.status;
        this.totalAmount = data.totalAmount;
        this.tax = data.tax
        this.subTotal = data.subTotal
        this.address = data.address
      }
}