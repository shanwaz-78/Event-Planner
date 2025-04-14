import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTable1739047931243 implements MigrationInterface {
    name = 'UserTable1739047931243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("userId" SERIAL NOT NULL, "name" character varying(20) NOT NULL, "email" character varying(25) NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
