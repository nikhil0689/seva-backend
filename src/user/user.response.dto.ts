export class UserResponseDTO {
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly gothra: string;
  readonly nakshatra: string;
  readonly phone: number;
  readonly email: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly address: AddressResponseDTO;
  readonly subscription: SubscriptionResponseDTO;
}

export class AddressResponseDTO {
  readonly user_id: number;
  readonly street: string;
  readonly unit: string;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export class SubscriptionResponseDTO {
  readonly user_id: number;
  readonly whatsapp: boolean;
  readonly weekly_email: boolean;
  readonly maha_rudra: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
