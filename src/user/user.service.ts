import { Injectable } from '@nestjs/common';
import { Address } from './address.entity';
import { AddressRepository } from './address.repository';
import { UserDTO } from './create-user.dto';
import { Subscription } from './subscription.entity';
import { SubscriptionRepository } from './subscription.repository';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly addressRepo: AddressRepository,
    private readonly subscriptionRepo: SubscriptionRepository,
  ) {}

  async getUserById(id: string): Promise<User> {
    return await this.userRepo.getUserById(id);
  }

  async addUser(userDTO: UserDTO): Promise<User> {
    const uniqueId = Date.now().toString();
    const {
      firstname,
      lastname,
      gothra,
      nakshatra,
      phone,
      email,
      street,
      unit,
      city,
      state,
      zip,
      whatsapp = false,
      weekly_email = false,
      maha_rudra = false,
    } = userDTO;
    const userData = User.create({
      id: uniqueId,
      firstname,
      lastname,
      gothra,
      nakshatra,
      phone,
      email,
    });
    const addressData = Address.create({
      user_id: uniqueId,
      street,
      unit,
      city,
      state,
      zip,
    });
    const subscriptionData = Subscription.create({
      user_id: uniqueId,
      whatsapp,
      weekly_email,
      maha_rudra,
    });
    const user = await this.userRepo.addUser(userData);
    console.log('user details: ', user);
    const address = await this.addressRepo.addAddress(addressData);
    const subscription = await this.subscriptionRepo.addSubscription(
      subscriptionData,
    );
    const updatedUser = user.patch({
      address,
      subscription,
    });
    return updatedUser;
  }
}
