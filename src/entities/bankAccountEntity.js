import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const bankAccount = new EntitySchema({
  name: "bankAccount",
  tableName: "bankAccount",
  extends: BaseEntity,
  properties: {
    bankName: { type: "string" },
    accountNumber: { type: "string" },
  },

     // @OneToOne(() => User)
       //   user;

})