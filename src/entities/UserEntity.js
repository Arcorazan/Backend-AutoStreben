import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class User extends BaseEntity {

  @Property({type: 'string'})
  region;
  
  @Property({type: 'string'})
  status;

  @Property({type: 'number'})
  rating;

  @Property({type: 'string'})
  phoneNumber;

  @Property({type: 'string'})
  password;

  @Property({type: 'string'})
  name;

  @Property({type: 'string'})
  email;

  @Property({type: 'string'})
  image;

  constructor(data) {
    this.region = data.region;
    this.status = data.status;
    this.rating = data.rating;
    this.phoneNumber = data.phoneNumber
    this.password = data.password
    this.name = data.name
    this.email = data.email
    this.image = data.image
  }

}