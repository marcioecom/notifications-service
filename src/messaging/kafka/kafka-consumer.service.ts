import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['mighty-herring-10343-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bWlnaHR5LWhlcnJpbmctMTAzNDMk94NJs0YSa3cBRVcjP91wm1aHx0LN7Jvd3q0',
          password:
            'dlnxgFk9X4GsqE8TFDhf48gWzHCXyeApRkhF6n1Analijj0nI1zQZI7pNHHjpQMaos21tg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
