import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AddressMap } from './address.datamapper';
import { Address } from './address.entity';
import { AddressModel } from './address.model';

@Injectable()
export class AddressRepository {
  constructor(
    @InjectModel(AddressModel)
    private addressModel: typeof AddressModel,
  ) {}

  async addAddress(address: Address): Promise<Address> {
    const raw = AddressMap.toPersistence(address);
    const val = await this.addressModel.create(raw);
    const map = AddressMap.toDomain(val);
    console.log('val in db: ', map);
    return map;
  }
}
