export function priceFormatter(price: number) {
    const formatter = new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return formatter.format(price);
}

export function calculateDiscountPrice(price: number, per: number, qty: number = 1) {
    const discountPrice = (price - (price * per / 100)) * qty;
    return priceFormatter(discountPrice);
}