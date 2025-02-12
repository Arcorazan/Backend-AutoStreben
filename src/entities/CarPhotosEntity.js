import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const CarPhotos = new EntitySchema({
  name: "CarPhotos",
  tableName: "CarPhotos",
  extends: BaseEntity,
  properties: {
    name: { type: "string" },
  },

    //@ManyToOne(() => Car)
      //car;

})