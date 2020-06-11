
const convertamt = require('../util/currencyconvert');

exports.currencyhome =  (req,res) =>{
    res.render('currency', {
        title:"Currency",
        name:"currency",
        quote:`The Exchange rates are Co-Powered by:  https://tradermade.com`
    });
};

exports.currencyconvert =  (req,res) =>
{
    convertamt(req.query.base,req.query.symbol,req.query.amount, (err, response) =>
    {
     
        if(err)
        {
            return({err: "error"})
        }
        res.send(response);
    })
    
}

exports.currencystart =(req,res) =>{
    res.render('currency2', {
        title:"Currency",
        name:"currency",
        quote:`The Exchange rates are Co-Powered by:  https://tradermade.com`
    });
};