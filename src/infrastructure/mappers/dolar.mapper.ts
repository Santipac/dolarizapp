import { Dollar } from '~/core/entities/dolar.entity';
import { DollarResponse } from '../interfaces/dolarApiResponses';

export class DolarMapper {
  public static fromDolarApiToEntity(quote: DollarResponse): Dollar {
    return {
      exchange: quote.casa,
      name: quote.nombre,
      priceBuy: quote.compra,
      priceSell: quote.venta,
      updatedAt: quote.fechaActualizacion,
    };
  }
}
