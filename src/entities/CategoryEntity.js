import { Cascade, Entity, OneToMany, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { Car } from "./CarEntity.js";

@Entity()
export class Category extends BaseEntity {

    @Property({type: 'string'})
    name;

   @OneToMany(() => Car, b=> b.category, { cascade: [Cascade.ALL]})
          car = new Collection()< Car >this;

    constructor(data) {
        this.name = data.name;
      }
}