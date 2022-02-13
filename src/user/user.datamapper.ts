import { AddressMap } from './address.datamapper';
import { SubscriptionMap } from './subscription.datamapper';
import { User } from './user.entity';
import { UserModel } from './user.model';
import { UserResponseDTO } from './user.response.dto';

export class UserMap {
  static toDomain(model: UserModel): User {
    const {
      id,
      firstname,
      lastname,
      gothra,
      nakshatra,
      phone,
      email,
      createdAt,
      updatedAt,
      address,
      subscription,
    } = model;
    let add = null;
    let sub = null;
    if (address && subscription) {
      add = AddressMap.toDomain(address);
      sub = SubscriptionMap.toDomain(subscription);
    }
    const projectedProps = {
      id,
      firstname,
      lastname,
      gothra,
      nakshatra,
      phone,
      email,
      createdAt,
      updatedAt,
      address: add,
      subscription: sub,
    };
    return User.create(projectedProps);
  }

  static toPersistence(entity: User): UserModel {
    const { id, firstname, lastname, gothra, nakshatra, phone, email } =
      entity.props;
    const raw = {
      id,
      firstname,
      lastname,
      gothra,
      nakshatra,
      phone,
      email,
    };
    return raw as UserModel;
  }

  static toUserDTO(entity: User): UserResponseDTO {
    if (entity === null) {
      return null;
    }
    const {
      id,
      firstname,
      lastname,
      gothra,
      nakshatra,
      phone,
      email,
      createdAt,
      updatedAt,
      address,
      subscription,
    } = entity;
    const add = AddressMap.toAddressDTO(address);
    const sub = SubscriptionMap.toSubscriptionDTO(subscription);
    return {
      id,
      firstname,
      lastname,
      gothra,
      nakshatra,
      phone,
      email,
      createdAt,
      updatedAt,
      address: add,
      subscription: sub,
    };
  }
}
