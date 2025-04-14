import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Vendor } from 'src/vendors/entities/vendor.entity';

@Entity()
export class PlaceDetail {
    @PrimaryGeneratedColumn()
    placeId: number;

    @Column({ length: 100 })
    title: string;

    @Column("double precision", { nullable: true })
    rating: number;

    @Column({ length: 50 })
    designation: string;

    @Column({ type: "varchar", length: 500 })
    address: string;

    @Column({ length: 20 })
    phone: string;

    @Column({ length: 150, nullable: true })
    website: string;

    @Column("integer", { nullable: true })
    review_counts: number;

    @Column({ length: 300, nullable: true })
    reviews: string;

    @Column({ type: "jsonb", nullable: true })
    workHours: Record<string, string>;

    @Column({ type: "text", array: true, nullable: true })
    serviceTypes: string[];

    @Column({ length: 50 })
    location: string;

    @Column({ length: 150 })
    place_image_url: string;

    @ManyToOne(() => Vendor, (vendor) => vendor.places, { onDelete: "CASCADE" })
    vendor: Vendor;
}
