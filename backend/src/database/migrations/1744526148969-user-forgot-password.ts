import { MigrationInterface, QueryRunner } from "typeorm";

export class UserForgotPassword1744526148969 implements MigrationInterface {
    name = 'UserForgotPassword1744526148969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" ADD "isDeleted" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "resetPasswordToken" character varying`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "resetPasswordExpiry" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "UQ_aba8090534d8b8b8845784086c3" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "password" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "password" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "UQ_aba8090534d8b8b8845784086c3"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "resetPasswordExpiry"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "resetPasswordToken"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "isDeleted"`);
    }

}
