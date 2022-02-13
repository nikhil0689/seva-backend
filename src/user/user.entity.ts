import { Entity, proxyEntity } from 'src/entity';
import { Address } from './address.entity';
import { Subscription } from './subscription.entity';

export interface UserProps {
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly gothra: string;
  readonly nakshatra: string;
  readonly phone: string;
  readonly email: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly address?: Address;
  readonly subscription?: Subscription;
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps) {
    super(props);
  }
  static create(props: UserProps): User {
    return proxyEntity(new User(props));
  }
}
