import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class AppService {
  private stripe:Stripe;
  constructor(private configService: ConfigService) {
    this.stripe = new Stripe(configService.get<string>('STRIPE_PRIVATE_API_KEY'), {
      apiVersion: '2020-08-27',
    });
  }
  
  async getSecret(): Promise<string> {
    const secretObject = await this.stripe.paymentIntents.create({
      amount: 1500,
      currency: 'eur',
      automatic_payment_methods: {enabled: true},
    })
    
    
    return secretObject.client_secret
  }
}
