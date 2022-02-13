import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SubscriptionMap } from './subscription.datamapper';
import { Subscription } from './subscription.entity';
import { SubscriptionModel } from './subscription.model';

@Injectable()
export class SubscriptionRepository {
  constructor(
    @InjectModel(SubscriptionModel)
    private subscriptionModel: typeof SubscriptionModel,
  ) {}

  async addSubscription(subscription: Subscription): Promise<Subscription> {
    const raw = SubscriptionMap.toPersistence(subscription);
    const val = await this.subscriptionModel.create(raw);
    const map = SubscriptionMap.toDomain(val);
    console.log('val in db: ', map);
    return map;
  }
}
