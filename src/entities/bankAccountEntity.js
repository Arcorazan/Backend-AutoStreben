import { Entity, OneToOne, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { User } from "./UserEntity.js";

@Entity()
export class bankAccount extends BaseEntity {

    @Property({type: 'string'})
    bankName;

    @Property({type: 'string'})
    accountNumber;

     @OneToOne(() => User)
          user;

    constructor(data) {
        this.bankName = data.bankName;
        this.accountNumber = data.accountNumber
      }
}