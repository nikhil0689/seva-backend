import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AddressModel } from './address.model';
import { SubscriptionModel } from './subscription.model';
import { UserMap } from './user.datamapper';
import { User } from './user.entity';
import { UserModel } from './user.model';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
  ) {}

  async getUserById(id: string): Promise<User> {
    const val = await this.userModel.findOne({
      where: {
        id,
      },
      include: [
        {
          model: AddressModel,
          as: 'address',
        },
        {
          model: SubscriptionModel,
          as: 'subscription',
        },
      ],
    });
    console.log('val in db: ', val);
    const map = UserMap.toDomain(val);
    console.log('val in db: ', map);
    return map;
  }

  async checkIfUserExistsByEmail(email: string): Promise<boolean> {
    const count = await this.userModel.count({
      where: {
        email,
      },
    });
    return count > 0;
  }

  async addUser(user: User): Promise<User> {
    const raw = UserMap.toPersistence(user);
    const userExists = await this.checkIfUserExistsByEmail(user.email);
    if (userExists) {
      console.log('User already exists with email : ', user.email);
      return null;
    }
    console.log('After User already exists with email : ', raw);
    const val = await this.userModel.create(raw);
    const map = UserMap.toDomain(val);
    console.log('val in db: ', map);
    return map;
  }
}
