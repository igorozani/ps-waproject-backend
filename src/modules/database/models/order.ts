import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'objection';

import { IOrder } from '../interfaces/order';

export class Order extends Model implements IOrder {
  @ApiProperty({ type: 'integer' })
  public id: number;
  @ApiProperty({ type: 'string' })
  public description: string;
  @ApiProperty({ type: 'number' })
  public quantity: number;
  @ApiProperty({ type: 'number' })
  public value: number;

  public static get tableName(): string {
    return 'Order';
  }
}
