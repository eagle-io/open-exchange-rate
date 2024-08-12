(() => {

        // Dependency
        const axios = require('axios');

        //API object:
        let api = {};
   
        // API base URL:
        api.base_url = 'https://openexchangerates.org/api/latest.json';
       
        // The default base currency ('USD'):
        api.base = 'USD';

        // Function to set App id or say Api key
        api.set = (opts) => {
             api.app_id = opts.app_id;

             return api;
        };
       
       // Function to get Exchange rates
       api.getExchangeRate = (currencies) => {
           return new Promise( (resolve, reject) => {
               let endpoint = `${api.base_url}`
                   +`?app_id=${api.app_id}`
                   +`&base=${api.base}`
                   +`&symbols=${currencies.join(',')}`
                   +`&prettyprint=false`;
               let headers = { 'Content-Type': 'application/json' };
               axios.get(endpoint, { headers })
                   .then((response) => response.status === 200 ? resolve(response.data) : reject(response.data))
                   .catch(err => reject(err));

           });
       };

       //Export the API object
       module.exports = api;
})();
