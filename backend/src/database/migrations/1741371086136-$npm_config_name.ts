import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1741371086136 implements MigrationInterface {
    name = ' $npmConfigName1741371086136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "place_detail" ("placeId" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "rating" double precision, "designation" character varying(50) NOT NULL, "address" character varying(500) NOT NULL, "phone" character varying(20) NOT NULL, "website" character varying(150), "review_counts" integer, "reviews" character varying(300), "workHours" jsonb, "serviceTypes" text array, "location" character varying(50) NOT NULL, "place_image_url" character varying(150) NOT NULL, "vendorVendorId" integer, CONSTRAINT "PK_b0b0c896d13f468a8f8669e66ab" PRIMARY KEY ("placeId"))`);
        await queryRunner.query(`CREATE TABLE "review" ("reviewId" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "reviewer_name" character varying(100), "rating" double precision, "reviews" character varying(300), "location" character varying(50) NOT NULL, "datePosted" TIMESTAMP NOT NULL DEFAULT now(), "reviewer_image_url" character varying(150) NOT NULL, "status" character varying(10) NOT NULL, "userUserId" integer, CONSTRAINT "PK_6e1c269c269c0b470631bfde65c" PRIMARY KEY ("reviewId"))`);
        await queryRunner.query(`ALTER TABLE "place_detail" ADD CONSTRAINT "FK_d9063ab14a22b18504426058b03" FOREIGN KEY ("vendorVendorId") REFERENCES "vendor"("vendorId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_5562843746d891af491ad6b30a1" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_5562843746d891af491ad6b30a1"`);
        await queryRunner.query(`ALTER TABLE "place_detail" DROP CONSTRAINT "FK_d9063ab14a22b18504426058b03"`);
        await queryRunner.query(`DROP TABLE "review"`);
        await queryRunner.query(`DROP TABLE "place_detail"`);
    }

}
