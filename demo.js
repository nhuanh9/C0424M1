function convert(price){
    price = new Intl.NumberFormat("de-DE").format(price);
    return price;
}
console.log(convert(1000));