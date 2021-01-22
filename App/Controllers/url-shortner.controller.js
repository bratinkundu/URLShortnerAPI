const URL = require('../Models/url-shortner.model');

exports.getRoute = async (route) => {
    const result =  await URL.findOne({customRoute : route});
    if(result){
        result.visitors = result.visitors + 1;
        await result.save();
    }
    return result;
}

exports.shortURL = async (data) =>{
    await URL.create(data);
}

exports.checkRoute = async (urlCode) => {
    const result = await URL.findOne({customRoute : urlCode});
    return result;
}