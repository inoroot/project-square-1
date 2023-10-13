import { Column, Table, Model } from 'sequelize-typescript';

@Table({
    tableName: 'brands',
})
export class Brand extends Model {
    @Column
    name: string;

    @Column
    logoUrl: string;

    @Column
    published: boolean;
}