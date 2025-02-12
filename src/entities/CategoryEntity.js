import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const Category = new EntitySchema({
  name: "Category",
  tableName: "category",
  extends: BaseEntity,
  properties: {
    name: { type: "string" },
  },

  // @OneToMany(() => Car, b=> b.category, { cascade: [Cascade.ALL]})
        //  car = new Collection()< Car >this;

})