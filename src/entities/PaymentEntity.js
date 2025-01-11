import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class Payment extends BaseEntity {

    @Property({type: 'string'})
    status;

    @Property({type: 'string'})
    proofOfPay;

    @Property({type: 'string'})
    type;

    constructor(data) {
        this.status = data.status;
        this.proofOfPay = data.proofOfPay;
        this.type = data.type;
      }
}