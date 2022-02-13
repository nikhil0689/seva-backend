import { Entity, proxyEntity } from 'src/entity';

export interface SubscriptionProps {
  readonly user_id: string;
  readonly whatsapp: boolean;
  readonly weekly_email: boolean;
  readonly maha_rudra: boolean;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export class Subscription extends Entity<SubscriptionProps> {
  private constructor(props: SubscriptionProps) {
    super(props);
  }
  static create(props: SubscriptionProps): Subscription {
    return proxyEntity(new Subscription(props));
  }
}
