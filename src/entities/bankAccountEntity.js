import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class bankAccount extends BaseEntity {

    @Property({type: 'string'})
    bankName;

    @Property({type: 'string'})
    accountNumber;

    constructor(data) {
        this.bankName = data.bankName;
        this.accountNumber = data.accountNumber
      }
}