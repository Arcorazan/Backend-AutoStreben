import { PrimaryKey, Property, t } from "@mikro-orm/core";

// template buat semua table
export class BaseEntity {
  @PrimaryKey({ type: t.uuid })
  id;

  // default raw buat init setiap data baru, createdat nya otomatis diisi tanggal hari itu
  @Property({ type: "timestamp", defaultRaw: 'current_timestamp(3)' })
  // diisi default value
  createdAt = new Date();

  @Property({ type: "timestamp", onUpdate: () => new Date(), defaultRaw: 'current_timestamp(3)' })
  // diisi default value
  updatedAt = new Date();

  //   diaksi default null & nulalble true jadi dia bisa kosong
  // karna deleted at itu ada isinya kalo datanya sudah di hapus
  @Property({ type: "timestamp", default: null, nullable: true })
  deletedAt = null;
}