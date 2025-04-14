import { MigrationInterface, QueryRunner } from "typeorm";

export class VendorWithUserJoin1741176568849 implements MigrationInterface {
    name = 'VendorWithUserJoin1741176568849'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vendor" ("vendorId" SERIAL NOT NULL, "firstName" character varying(20) NOT NULL, "lastName" character varying(20), "companyName" character varying(100) NOT NULL, "email" character varying(30) NOT NULL, "password" character varying(10) NOT NULL, "userUserId" integer, CONSTRAINT "PK_1440d0a09f3a270feeff706c01e" PRIMARY KEY ("vendorId"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstName" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastName" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_775722d481b2ecf88893199ab6f" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_775722d481b2ecf88893199ab6f"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying(25) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(20) NOT NULL`);
        await queryRunner.query(`DROP TABLE "vendor"`);
    }

}
