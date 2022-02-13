import { Entity, proxyEntity } from 'src/entity';

export interface AddressProps {
  readonly user_id: string;
  readonly street: string;
  readonly unit: string;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
}

export class Address extends Entity<AddressProps> {
  private constructor(props: AddressProps) {
    super(props);
  }
  static create(props: AddressProps): Address {
    return proxyEntity(new Address(props));
  }
}
