const router = require('express').Router();
require('dotenv').config();
const urlController = require('../Controllers/url-shortner.controller');

router.get('/:route',async (req,res)=>{
    console.log("GET called!")
    console.log(req.params.route);
    const route = req.params.route;
    const result = await urlController.getRoute(route);
    if(result){
        res.redirect(`${result.url}`);
    }
    else{
        res.send("404");
    }
});

router.post('/shorturl',async (req,res)=>{
    console.log("POST called!")
    console.log(req.body);
    try{
        const data = req.body;
        const checkURL = await urlController.checkRoute(data.customRoute);
        if(checkURL){
            res.send({
                status : "Failed",
                message : "Please try another name for short url!"
            })
        }
        else{
            await urlController.shortURL(data);
            res.send({
                status : "Success",
                ShortenURL : `${process.env.baseURL}/${data.customRoute}`,
                message : "URL created successfully!"
            })
        }
    }
    catch(err){
        res.status(500).json({
            status: 'Failed',
            error: err,
          });
    }
    
})

module.exports = router;