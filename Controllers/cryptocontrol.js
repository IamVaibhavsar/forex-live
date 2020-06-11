const crytofunc = require('../util/cryptoconvert')

exports.hometinz =  (req,res) =>{
    res.render('crypto', {
        title: "Crypto",
        name: "crypto",
        quote:"The CryptoCurrency Rates are Co-Powered By:  https://pro-api.coinmarketcap.com"
    });
};



exports.cryptoconvert  = (req, res) =>
{
    crytofunc(req.query.symbol, req.query.convert, req.query.amount, (err,data) =>
    {
        if(err)
        {
            return res.send({er:err})
        }
    return res.send({response:data});

    });

}

exports.cryptostuff =  (req,res) =>
{
    res.render('crypto2', {
        title: "Crypto",
        name: "crypto",
        quote:"The CryptoCurrency Rates are Co-Powered By:  https://pro-api.coinmarketcap.com    "
    });
};