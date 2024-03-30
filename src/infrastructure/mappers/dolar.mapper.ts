import { Dollar } from '~/core/entities/dolar.entity';
import { DollarResponse } from '../interfaces/dolarApiResponses';
import { CONVERTION, ConvertionHistory } from '../interfaces/dolarHistory';

export class DolarMapper {
  public static fromDolarApiToEntity(quote: DollarResponse): Dollar {
    return {
      exchange: quote.casa,
      name: quote.nombre,
      buyPrice: quote.compra,
      sellPrice: quote.venta,
      updatedAt: quote.fechaActualizacion,
    };
  }
  public static fromDollarToConvertionHistory(quote: Dollar, convertion: CONVERTION): ConvertionHistory {
    return {
      type: convertion,
      sellPrice: quote.sellPrice,
      buyPrice: quote.buyPrice,
      exchange: quote.name,
      date: new Date().toString(),
    }
  }
}
