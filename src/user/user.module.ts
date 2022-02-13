import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AddressModel } from './address.model';
import { AddressRepository } from './address.repository';
import { SubscriptionModel } from './subscription.model';
import { SubscriptionRepository } from './subscription.repository';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [
    SequelizeModule.forFeature([UserModel, AddressModel, SubscriptionModel]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    AddressRepository,
    SubscriptionRepository,
  ],
})
export class UserModule {}
