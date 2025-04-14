import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Vendor } from 'src/vendors/entities/vendor.entity';
import { Review } from 'src/reviews/entities/review.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ length: 20 })
  firstName: string;

  @Column({ nullable: true, length: 20 })
  lastName: string;

  @Column({ length: 30 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ type: 'timestamp', nullable: true })
  resetPasswordExpiry: Date;

  @OneToMany(() => Vendor, (vendor) => vendor.user, { onDelete: 'CASCADE' }) // A user can have multiple vendors
  vendors: Vendor[];

  @OneToMany(() => Review, (review) => review.user, { onDelete: 'CASCADE' })
  reviews: Review[];
}
