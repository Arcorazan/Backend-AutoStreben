import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const Order = new EntitySchema({
  name: "Order",
  tableName: "Order",
  extends: BaseEntity,
  properties: {
    status: { type: "string" },
    totalAmount: { type: "number" },
    tax: { type: "number" },
    subTotal: { type: "number" },
    address: { type: "string" },
  },

   // @OneToOne(() => Payment, b=> b.order, { cascade: [Cascade.ALL]})
       // payment = new Collection()< Payment >this;

       // @OneToOne(() => Review, b=> b.order, { cascade: [Cascade.ALL]})
       // review = new Collection()< Review >this;

})