import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const Role = new EntitySchema({
  name: "Role",
  tableName: "role",
  extends: BaseEntity,
  properties: {
    name: { type: "string" },
  },
});