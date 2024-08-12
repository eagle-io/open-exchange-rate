import oxr from 'open-exchange-rate'

oxr.set({ app_id: 'APP_ID_HERE' })

const { rates, timestamp } = await oxr.getExchangeRate(["CAD", "EUR", "GBP"])
    .catch(err => console.error('Error :: ', err))

console.log('Response :: \nRates', rates, '\nTimestamp', timestamp)

