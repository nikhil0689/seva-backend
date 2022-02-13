import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { UserModel } from './user.model';

@Table({
  tableName: 'subscription',
})
export class SubscriptionModel extends Model<SubscriptionModel> {
  @Column({ primaryKey: true })
  @ForeignKey(() => UserModel)
  user_id: string;

  @Column
  whatsapp: boolean;

  @Column
  weekly_email: boolean;

  @Column
  maha_rudra: boolean;
}
