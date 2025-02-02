import { Entity, ManyToOne, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { Car } from "./CarEntity.js";

@Entity()
export class CarPhotos extends BaseEntity {

    @Property({type: 'string'})
    name;

    @ManyToOne(() => Car)
      car;

    constructor(data) {
        this.name = data.name;
      }
}