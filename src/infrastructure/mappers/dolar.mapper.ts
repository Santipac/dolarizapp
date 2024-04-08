import 'react-native-get-random-values'
import { Dollar } from '~/core/entities/dolar.entity';
import { DollarResponse } from '../interfaces/dolarApiResponses';
import { CONVERTION, ConvertionHistory } from '../interfaces/dolarHistory';
import { v4 as uuid } from 'uuid';

export class DolarMapper {
  public static fromDolarApiToEntity(quote: DollarResponse): Dollar {
    return {
      id: uuid(),
      exchange: quote.casa,
      name: quote.nombre,
      buyPrice: quote.compra,
      sellPrice: quote.venta,
      updatedAt: quote.fechaActualizacion,
    };
  }
  public static fromDollarToConvertionHistory(
    quote: Dollar,
    convertion: CONVERTION,
    amount: number
  ): ConvertionHistory {
    return {
      id: quote.id,
      amount,
      type: convertion,
      sellPrice: quote.sellPrice,
      buyPrice: quote.buyPrice,
      exchange: quote.name,
      date: new Date().toString(),
    };
  }
}
