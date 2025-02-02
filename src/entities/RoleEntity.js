import {Cascade, Collection, Entity, OneToMany, PrimaryKey, Property, t} from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { User } from "./UserEntity.js";

@Entity()
export class Role extends BaseEntity {

    @PrimaryKey({type: t.uuid})
    id;

    @Property({type: 'string'})
    name;

    //One to many
    //import user from userentity
    //import user, collection, cascade, from mikroorm
    @OneToMany(() => User, b=> b.role, { cascade: [Cascade.ALL]})
    users = new Collection()< User >this;

    constructor(name) {
        this.name = name;
    }
}