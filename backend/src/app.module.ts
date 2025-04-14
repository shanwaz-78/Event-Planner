import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorsModule } from './vendors/vendors.module';
import { PlaceDetailsModule } from './place_details/place_details.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: true,
        autoLoadEntities: true,
        logging: true
      }),
    }),
    UsersModule,
    VendorsModule,
    PlaceDetailsModule,
    ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
