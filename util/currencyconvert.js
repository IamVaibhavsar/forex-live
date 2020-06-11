const request = require('request');

const currency = (base, sym, amt, cb) =>
{
    const key = "" 
const url= `https://marketdata.tradermade.com/api/v1/convert?api_key=yPOlOk_C-vVdXTi9GhxJ&from=${base}&to=${sym}&amount=${amt}`;

request({url:url, json:true}, (err, res) =>
{
    if(err)
    {
        cb("Please Make sure you are connected to the internet!", undefined);
    }
    else{
        cb(undefined, res.body)

    }})};

module.exports =currency