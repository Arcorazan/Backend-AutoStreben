import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const Car = new EntitySchema({
  name: "Car",
  tableName: "car",
  extends: BaseEntity,
  properties: {
    name: { type: "string" },
    location: { type: "string" },
    description: { type: "string" },
    price: { type: "number" },
  },

  //  @OneToMany(() => CarPhotos, b=> b.car, { cascade: [Cascade.ALL]})
      //  carPhotos = new Collection()< CarPhotos >this;

       // @ManyToOne(() => Category)
        //category;

})