import { OneToMany,Cascade, Entity, PrimaryKey, Property, t, ManyToOne } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { CarPhotos } from "./CarPhotosEntity.js";
import { Category } from "./CategoryEntity.js";

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

    @OneToMany(() => CarPhotos, b=> b.car, { cascade: [Cascade.ALL]})
        CarPhotos = new Collection()< CarPhotos >this;

        @ManyToOne(() => Category)
        category;

    constructor(data) {
        this.name = data.name;
        this.location = data.location
        this.description = data.description
        this.price = data.price
      }
}