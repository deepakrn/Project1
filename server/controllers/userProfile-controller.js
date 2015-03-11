var UserProfile = require('../models/user_profile');

module.exports.create = function (req, res) {	
  var profile = new UserProfile(req.body);
  console.log("inside controller- user obj:%j",req.user); 
  profile.id=req.user.id;
  console.log("profile:%j",profile);
  console.log("User id before updating:"+req.user.id);  
  UserProfile.find({id:profile.id},function(err,results){
    console.log("%j",results);
    if(results.length>0){                                   // if a record already exists, update the record.
     UserProfile.update({id:profile.id},{first_name:profile.first_name,last_name:profile.last_name},function(err,result){
     console.log("update result"+result+"\nerr:"+err);
     res.json(result|err)
     });
    }
    else{                                                   // if no records of user exists, insert a new one.
      profile.save(function(err,result){
        console.log("insert result"+result+"\nerr:"+err);
        res.json(result|err)

      })
    }
  });  
}
  

