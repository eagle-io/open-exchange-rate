const currency = require('./index');

currency.set({ app_id: 'APP_ID_HERE' });

currency.getExchangeRate(["CAD", "EUR", "GBP"]).then(({rates, timestamp}) => {
    console.log('Response :: \nRates',rates, '\nTimestamp', timestamp);
})
.catch(err => {
    console.log('Error :: ',err);
});

