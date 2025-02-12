import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const User = new EntitySchema({
  name: "User",
  tableName: "user",
  extends: BaseEntity,
  properties: {
    region: { type: "string" },
    status: { type: "string" },
    rating: { type: "number" },
    phoneNumber: { type: "string" },
    password: { type: "string" },
    name: { type: "string" },
    email: { type: "string" },
    image: { type: "string" },
  },
  relations: {
    role: { reference: "m:1", entity: "Role" },
  },
});