exports.homestuff = (req,res) =>{
    res.render('home',  {
        title:"Forex App",
        name: "home",
        quote:"The Exchange rates are Co-Powered by:  https://tradermade.com"
    });
};


exports.errorstuff= (req,res) =>{
    res.render('404',{
        title:"Error 404",
        name:"ERROR",
        quote:"Something Went Wrong! Please Try Again!"

    })
}