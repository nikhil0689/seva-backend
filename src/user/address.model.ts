import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserModel } from './user.model';

@Table({
  tableName: 'address',
})
export class AddressModel extends Model<AddressModel> {
  @Column({ primaryKey: true })
  @ForeignKey(() => UserModel)
  user_id: string;

  @BelongsTo(() => UserModel)
  user: UserModel;

  @Column
  street: string;

  @Column
  unit: string;

  @Column
  readonly city: string;

  @Column
  readonly state: string;

  @Column
  readonly zip: string;
}
