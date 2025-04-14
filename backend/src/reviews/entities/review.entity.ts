import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    reviewId: number;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 100, nullable: true })
    reviewer_name: string;

    @Column("double precision", { nullable: true })
    rating: number;

    @Column({ length: 300, nullable: true })
    reviews: string;

    @Column({ length: 50 })
    location: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    datePosted: Date;

    @Column({ length: 150 })
    reviewer_image_url: string;

    @Column({ length: 10 })
    status: string;

    @ManyToOne(() => User, (user) => user.reviews, { onDelete: "CASCADE" })
    user: User;

}
