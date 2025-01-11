import {Entity, PrimaryKey, Property, t} from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class Role extends BaseEntity {

    @PrimaryKey({type: t.uuid})
    id;

    @Property({type: 'string'})
    name;

    constructor(name) {
        this.name = name;
    }
}