import { Subscription } from './subscription.entity';
import { SubscriptionModel } from './subscription.model';
import { SubscriptionResponseDTO } from './user.response.dto';

export class SubscriptionMap {
  static toDomain(model: SubscriptionModel): Subscription {
    const {
      user_id,
      whatsapp,
      weekly_email,
      maha_rudra,
      createdAt,
      updatedAt,
    } = model;
    const projectedProps = {
      user_id,
      whatsapp,
      weekly_email,
      maha_rudra,
      createdAt,
      updatedAt,
    };
    return Subscription.create(projectedProps);
  }

  static toPersistence(entity: Subscription): SubscriptionModel {
    const { user_id, whatsapp, weekly_email, maha_rudra } = entity.props;
    const raw = {
      user_id,
      whatsapp,
      weekly_email,
      maha_rudra,
    };
    return raw as SubscriptionModel;
  }

  static toSubscriptionDTO(entity: Subscription): SubscriptionResponseDTO {
    if (entity === null) {
      return null;
    }
    const {
      user_id,
      whatsapp,
      weekly_email,
      maha_rudra,
      createdAt,
      updatedAt,
    } = entity;
    return {
      user_id,
      whatsapp,
      weekly_email,
      maha_rudra,
      createdAt,
      updatedAt,
    };
  }
}
