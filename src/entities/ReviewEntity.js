import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const Review = new EntitySchema({
  name: "Review",
  tableName: "Review",
  extends: BaseEntity,
  properties: {
    photo: { type: "string" },
    comment: { type: "string" },
    stars: { type: "number" },
  },

    //@OneToOne(() => Order)
     // order;

   
})