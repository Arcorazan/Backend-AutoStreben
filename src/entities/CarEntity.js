import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class Car extends BaseEntity {

    @Property({type: 'string'})
    name;

    @Property({type: 'string'})
    location;

    @Property({type: 'string'})
    description;

    @Property({type: 'number'})
    price;

    constructor(data) {
        this.name = data.name;
        this.location = data.location
        this.description = data.description
        this.price = data.price
      }
}