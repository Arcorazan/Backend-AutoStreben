import { Entity, OneToOne, PrimaryKey, Property, QueryOrder, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { Order } from "./OrderEntity.js";

@Entity()
export class Payment extends BaseEntity {

    @Property({type: 'string'})
    status;

    @Property({type: 'string'})
    proofOfPay;

    @Property({type: 'string'})
    type;

     @OneToOne(() => Order)
      order;

    constructor(data) {
        this.status = data.status;
        this.proofOfPay = data.proofOfPay;
        this.type = data.type;
      }
}