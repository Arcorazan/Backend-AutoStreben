import { Cascade, Entity, ManyToOne, OneToOne, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { Role } from "./RoleEntity.js";
import { bankAccount } from "./bankAccountEntity.js";

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

  //Many to one
  @ManyToOne(() => Role)
  role;

   @OneToOne(() => bankAccount, b=> b.user, { cascade: [Cascade.ALL]})
          bankAccount = new Collection()< bankAccount >this;

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