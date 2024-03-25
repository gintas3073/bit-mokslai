const host = await fetch("https://api.frankfurter.app/latest?from=EUR&to=${currency}");
const rate = response.data.rates[currency];
