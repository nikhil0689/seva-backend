import { Address } from './address.entity';
import { AddressModel } from './address.model';
import { AddressResponseDTO } from './user.response.dto';

export class AddressMap {
  static toDomain(model: AddressModel): Address {
    const { user_id, street, unit, city, state, zip, createdAt, updatedAt } =
      model;
    const projectedProps = {
      user_id,
      street,
      unit,
      city,
      state,
      zip,
      createdAt,
      updatedAt,
    };
    return Address.create(projectedProps);
  }

  static toPersistence(entity: Address): AddressModel {
    const { user_id, street, unit, city, state, zip } = entity.props;
    const raw = {
      user_id,
      street,
      unit,
      city,
      state,
      zip,
    };
    return raw as AddressModel;
  }

  static toAddressDTO(entity: Address): AddressResponseDTO {
    if (entity === null) {
      return null;
    }
    const { user_id, street, unit, city, state, zip, createdAt, updatedAt } =
      entity;
    return {
      user_id,
      street,
      unit,
      city,
      state,
      zip,
      createdAt,
      updatedAt,
    };
  }
}
