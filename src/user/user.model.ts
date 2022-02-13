import { Column, HasOne, Model, Table } from 'sequelize-typescript';
import { AddressModel } from './address.model';
import { SubscriptionModel } from './subscription.model';

@Table({
  tableName: 'user',
})
export class UserModel extends Model<UserModel> {
  @Column({ primaryKey: true })
  id: string;

  @Column
  firstname: string;

  @Column
  lastname: string;

  @Column
  readonly gothra: string;

  @Column
  readonly nakshatra: string;

  @Column
  readonly phone: string;

  @Column
  readonly email: string;

  @Column
  readonly createdAt: Date;

  @Column
  readonly updatedAt: Date;

  @HasOne(() => AddressModel, 'user_id')
  address: AddressModel;

  @HasOne(() => SubscriptionModel, 'user_id')
  subscription: SubscriptionModel;
}
