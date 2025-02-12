import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const Payment = new EntitySchema({
  name: "Payment",
  tableName: "payment",
  extends: BaseEntity,
  properties: {
    status: { type: "string" },
    proofOfPay: { type: "string" },
    type: { type: "string" },
  },

    //constructor(data) {
        //this.status = data.status;
        //this.proofOfPay = data.proofOfPay;
        //this.type = data.type;
      //}
})