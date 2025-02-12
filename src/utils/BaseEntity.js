import { EntitySchema } from "@mikro-orm/core";

export const BaseEntity = new EntitySchema({
  abstract: true,
  properties: {
    id: { type: "uuid", primary: true },
    createdAt: { type: "Date", defaultRaw: "CURRENT_TIMESTAMP" },
    updatedAt: { type: "Date", defaultRaw: "CURRENT_TIMESTAMP", onUpdate: () => new Date() },
    deletedAt: { type: "Date", nullable: true, defaultRaw: "NULL"},
  },
});