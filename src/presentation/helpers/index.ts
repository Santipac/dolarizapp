export function formatCurrency(price: number, currency: 'ARS' | 'USD') {
    const formatter = new Intl.NumberFormat(
        currency === 'ARS' ? 'es-AR' : 'en-US',
        {
            style: 'currency',
            currency: currency === 'ARS' ? 'ARS' : 'USD',
            currencyDisplay: 'code',
        }
    );

    return formatter.format(price);
}

export enum QUOTE_TYPE {
    OFICIAL = 'Oficial',
    BLUE = 'Blue',
    CCL = 'Contado con liquidación',
    CRYPTO = 'Cripto',
    MAYORISTA = 'Mayorista',
    TARJETA = 'Tarjeta',
    BOLSA = 'Bolsa',
}


export function getQuoteDescription(type: QUOTE_TYPE): string | null {
    switch (true) {
        case type === QUOTE_TYPE.OFICIAL:
            return 'Cotización del dólar estadounidense en el mercado oficial. Es decir, el precio de compra y venta de dólares en bancos y casas de cambio autorizadas por el Banco Central de la República Argentina (BCRA).'
        case type === QUOTE_TYPE.BLUE:
            return 'Cotización del dólar estadounidense en el mercado paralelo o informal. Es decir, el precio de compra y venta de dólares en cuevas o casas de cambio no autorizadas por el Banco Central de la República Argentina (BCRA).'
        case type === QUOTE_TYPE.BOLSA:
            return 'Cotización del dólar estadounidense en el mercado bursátil. Es decir, el precio de compra y venta de dólares en el mercado de valores. También conocido como Dólar MEP.'
        case type === QUOTE_TYPE.TARJETA:
            return 'Es el valor de la cotización del dólar estadounidense en el mercado oficial, más el impuesto PAIS (30%), el impuesto a las ganancias (100%) y el impuesto a cuenta de bienes personales (25%).'
        case type === QUOTE_TYPE.CCL:
            return 'Cotización del dólar estadounidense en el mercado bursátil. Es decir, el precio de compra y venta de dólares en el mercado de valores. También conocido como Dólar CCL.'
        case type === QUOTE_TYPE.CRYPTO:
            return 'Cotización del dólar estadounidense en el mercado de criptomonedas. Es decir, el precio de compra y venta de dólares en el mercado de criptoactivos.'
        case type === QUOTE_TYPE.MAYORISTA:
            return 'Cotización del dólar estadounidense en el mercado mayorista. Es decir, el precio de compra y venta de dólares en el mercado interbancario.'
        default:
            return null
    }
}
export function getQuoteLabel(type: QUOTE_TYPE): string | null {
    switch (true) {
        case type === QUOTE_TYPE.CCL:
            return 'CCL'
        default:
            return type
    }
}