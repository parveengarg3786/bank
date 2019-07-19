// contactController.js
// Import contact model
Model = require('./contactModel');
verify = require('./verifyModel');
const jwt = require('jsonwebtoken');
// Handle index actions
exports.index = function (req, res) {
    Model.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};


//getting details from verifyDb

exports.gettingDetailFromVerifyDb= function (req, res) {
    verify.find({},function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully from verify DB",
            data: contacts
        });
    });
};


// Handle delete contact from verifydb
exports.deleteFromVerifyDb = function (req, res) {
    verify.remove({phone: req.params.contact_id }, function (err, contact) {
        if (err)
            res.send(err);
        else{

        res.json({
            status: "success",
            message: 'Contact deleted from verifydb'
                });
           }
    });
};
//adding data from verified data
exports.verifiednew = function (req, res) {
    console.log(req.body);
    var contact = new verify();
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.password = req.body.password;
    contact.wallet = 0;
    contact.address = req.body.address;
    contact.reference = req.body.reference;
    contact.role = "user";
// save the contact and check for errors
    contact.save(function (err) {
        // if (err)
        //     res.json(err);

res.json({
            message: 'sign-up request send!',
            data: contact
        });
    });
};



// Handle create contact actions for model db
exports.new = function (req, res) {
    console.log(req.body);

    console.log("__________________________________");
    var contact = new Model();
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.password = req.body.password;
    contact.wallet = 0;
    contact.address = req.body.address;
    contact.reference = req.body.reference;
    contact.role = "user";
// save the contact and check for errors
    contact.save(function (err) {
         if (err)
             res.json(err);
else
{
    console.log("__________________________________");
 var Referral=req.body.reference;
 console.log("referral");
 console.log(Referral);
   var remaining=60000;
   var interest=0;
 //  console.log(req.query.ref)
           
            Model.findOne({phone:Referral}, function (err, contact) {
                if(err)
                    res.send(err);
                // else if(!contact.phone)
                //     res.json({msg:"hii"});
                if (contact)
                {
                    console.log("__________________________________");
                    console.log(contact)
                    contact.wallet=parseInt(contact.wallet)+(60000*(3/100))-((60000*(3/100))*10/100);
                    remaining=remaining-((60000*(3/100))) + ((60000*(3/100))*10/100);
                    console.log(remaining);
                    interest=interest+((60000*(3/100))*10/100);
                   console.log(interest);
                    Model.findOne({phone:contact.reference}, function (err, contact1) {
                      if(err)
                        res.send(err);
                        if(contact1)
                        {
                            console.log("__________________________________");
                           console.log(contact1)
                           contact1.wallet=parseInt(contact1.wallet)+(60000*(2/100))-((60000*(2/100))*10/100);
                           remaining=remaining-(60000*(2/100))+(((60000*(2/100))*10/100));
                           interest=interest+(((60000*(2/100))*10/100));
                        Model.findOne({phone:contact1.reference}, function (err, contact2) {
                            if(err)
                                res.send(err);
                            if(contact2)
                            {
                                console.log("__________________________________");
                                console.log(contact2)
                                contact2.wallet=parseInt(contact2.wallet)+(60000*(1/100))-((60000*(1/100))*10/100);
                                remaining=remaining-(60000*(1/100))+(((60000*(1/100))*10/100));
                                interest=interest+(((60000*(1/100))*10/100));
                                contact2.save(function (err){
                                		contact1.save(function(err){
                                				contact.save(function(err){

                                					  var x=0;
                                Model.findOne({reference:x}, function (err, contact3) {
                                         if(err)
                                             res.send(err);
                                        if(contact3){
                                            console.log("__________________________________");
                                          console.log(contact3.wallet);
                                          console.log(remaining);
                                          console.log(interest);
                                            contact3.wallet=parseInt(contact3.wallet)+remaining;
                                          console.log("Updated1");
                                        console.log(contact3.wallet);
                                        contact3.save();
                                       res.json({
            message: 'New contact created!',
            data: contact
        });
                                        }
                                    });
                                				});

                                		});

                                });
                                
                                
                              

                            }
                            else
                            {
                                contact1.save(function (err){
                                	 contact.save(function (err){
   var x=0;
                                Model.findOne({reference:x}, function (err, contact3) {
                                         if(err)
                                             res.send(err);
                                        if(contact3){
                                         console.log(remaining);
                                          console.log(interest);
                                            contact3.wallet=parseInt(contact3.wallet)+remaining;
                                        console.log("Updated2");
                                        console.log(contact3.wallet);
                                        contact3.save();
                                        console.log("__________________________________");
                                    res.json({
            message: 'New contact created!',
            data: contact
        });
                                        }
                                    });

                                	 });
                             
                                });
                               
                            }
                        });
                    }
                    else
                    {
                        console.log("Contact Balance");
                        console.log(contact.wallet);
                        contact.save(function (err){
                        	       var x=0;
                        Model.findOne({reference:x}, function (err, contact3) {
                                 if(err)
                                     res.send(err);
                                if(contact3){
                                   console.log(remaining);
                                          console.log(interest);
                                          console.log(contact3.wallet);
                                    contact3.wallet=parseInt(contact3.wallet)+remaining;
                                 console.log("Updated3");
                                        console.log(contact3.wallet);
                                contact3.save();
                                console.log("__________________________________");
                             res.json({
            message: 'New contact created!',
            data: contact
        });
                                }
                            });
                        });
                        
                 
                    }
                });
            }
           
    });

    }
    });
};
// Handle view contact info
exports.view = function (req, res) {
  console.log(req.params.contact_id);
    Model.findOne({phone:req.params.contact_id}, function (err, contact) {
        if (err)
            res.send(err);
        else{
        res.json({
            message: 'Contact details loading..',
            data: contact
        });}
    });
};
exports.wallet=function(req,res){
   var Referral=req.query.ref;
   var remaining=60000;
   var interest=0;
   console.log(req.query.ref)
           
            Model.findOne({phone:Referral}, function (err, contact) {
                if(err)
                    res.send(err);
                
                if (contact)
                {
                    console.log(contact)
                    contact.wallet=parseInt(contact.wallet)+(60000*(3/100))-((60000*(3/100))*10/100);
                    remaining=remaining-((60000*(3/100))) + ((60000*(3/100))*10/100);
                    console.log(remaining);
                    interest=interest+((60000*(3/100))*10/100);
                   console.log(interest);
                    Model.findOne({phone:contact.reference}, function (err, contact1) {
                      if(err)
                        res.send(err);
                        if(contact1)
                        {
                           console.log(contact1)
                           contact1.wallet=parseInt(contact1.wallet)+(60000*(2/100))-((60000*(2/100))*10/100);
                           remaining=remaining-(60000*(2/100))+(((60000*(2/100))*10/100));
                           interest=interest+(((60000*(2/100))*10/100));
                        Model.findOne({phone:contact1.reference}, function (err, contact2) {
                            if(err)
                                res.send(err);
                            if(contact2)
                            {
                                console.log(contact2)
                                contact2.wallet=parseInt(contact2.wallet)+(60000*(1/100))-((60000*(1/100))*10/100);
                                remaining=remaining-(60000*(1/100))+(((60000*(1/100))*10/100));
                                interest=interest+(((60000*(1/100))*10/100));
                                contact2.save(function (err){
                                		contact1.save(function(err){
                                				contact.save(function(err){

                                					  var x=0;
                                Model.findOne({reference:x}, function (err, contact3) {
                                         if(err)
                                             res.send(err);
                                        if(contact3){
                                          console.log(contact3.wallet);
                                          console.log(remaining);
                                          console.log(interest);
                                            contact3.wallet=parseInt(contact3.wallet)+remaining;
                                          console.log("Updated1");
                                        console.log(contact3.wallet);
                                        contact3.save();
                                        res.json({});
                                        }
                                    });
                                				});

                                		});

                                });
                                
                                
                              

                            }
                            else
                            {
                                contact1.save(function (err){
                                	 contact.save(function (err){
   var x=0;
                                Model.findOne({reference:x}, function (err, contact3) {
                                         if(err)
                                             res.send(err);
                                        if(contact3){
                                         console.log(remaining);
                                          console.log(interest);
                                            contact3.wallet=parseInt(contact3.wallet)+remaining;
                                        console.log("Updated2");
                                        console.log(contact3.wallet);
                                        contact3.save();
                                        res.json({});
                                        }
                                    });

                                	 });
                             
                                });
                               
                            }
                        });
                    }
                    else
                    {
                        console.log("Contact Balance");
                        console.log(contact.wallet);
                        contact.save(function (err){
                        	       var x=0;
                        Model.findOne({reference:x}, function (err, contact3) {
                                 if(err)
                                     res.send(err);
                                if(contact3){
                                   console.log(remaining);
                                          console.log(interest);
                                          console.log(contact3.wallet);
                                    contact3.wallet=parseInt(contact3.wallet)+remaining;
                                 console.log("Updated3");
                                        console.log(contact3.wallet);
                                contact3.save();
                                res.json({});
                                }
                            });
                        });
                        
                 
                    }
                });
            }
           
    });

};
// Handle update contact info
exports.update = function (req, res) {
Model.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
contact.name = req.body.name ? req.body.name : contact.name;
        contact.email = req.body.email;
        contact.phone = req.params.contact_id;
        contact.wallet = req.body.wallet;
        contact.address = req.body.address;
        contact.reference = req.body.reference;

// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};
exports.back = function (req, res) {
    console.log(req.params.contact_id)
    Model.findOne({phone:req.params.contact_id}, function (err, contact) {
        if (err){
            res.send(err) 
        } 
            else{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ;
        res.json({
            message: 'back details loading..',
            data: contact
        });}
    });
};


// Handle delete contact
exports.delete = function (req, res) {
    Model.remove({_id: req.params.contact_id }, function (err, contact) {
        if (err)
            res.send(err);
        else{

        res.json({
            status: "success",
            message: 'Contact deleted'
                });
           }
    });
};
exports.newProduct = function (req, res) {
    console.log(req.body);
    var product = new Model.product();
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
// save the product and check for errors
    product.save(function (err) {
         if (err)
             res.json(err);
else
{res.json({
            message: 'New product inserted!',
            data: product
        });
    }
    });
};

// exports.show = function (req, res) {
//     Model.get(function (err, contacts) {
//         if (err) {
//             res.json({
//                 status: "error",
//                 message: err,
//             });
//         }
//         res.json({
//             status: "success",
//             message: "Contacts retrieved successfully",
//             data: contacts
//         });
//     });
// };
exports.check = function(req,res) {
    console.log("verifying");
    let token = req.headers["authorization"];
    console.log(token);
    jwt.verify(token, JWT_SECRET, (err, decode) => {
      if (err) {
        console.log("error decoding");
        res.send({ isValid: false });
      } else {
        console.log("decoding successfull");
        res.send({ isValid: true });
      }
    });
  };
var JWT_SECRET="fsjfbjfbgfvhjfvjsrhgfuyrgff"
exports.authenticate = function(req, res, next) {
 let phonenumber = req.body.phone;
   Model.find({
      $and: [{ phone: phonenumber }, { password: req.body.password }]
    }).then(user => {
      if (user[0]) {
        let token = jwt.sign(user[0].toJSON(), JWT_SECRET);
        console.log(user[0]);
        res.send({
          signed_user: user,
          token: token
        });
      } else {
        res.send({
          msg: "error"
        });
      }
    });
  }
  exports.referral = function (req, res) {
    console.log(req.body.phone)
    PhoneNumber=req.body.phone;
    Model.find({PhoneNumber:PhoneNumber}, function (err, contact) {

        var referral = "http://localhost:4200/sign-up?referrer=";
        var msg = referral + PhoneNumber;
        if (err)
            res.send(err);
        else
        res.json({msg:msg});
    });
    };
    exports.show= function (req, res) {
        console.log(req.params.contact_id);
          Model.find({reference:req.params.contact_id}, function (err, contact) {
              if (err){
                  res.send(err);
                  res.json({ valid: false });
              }
              else{
                
              res.json({
                  valid:true,
                  message: 'Contact details loading..',
                  data: contact
              });}
          });
      };
      exports.show1= function (req, res) {
        console.log(req.params.contact_id);
          Model.find({reference:req.params.contact_id}, function (err, contact) {
              if (err){
                  res.send(err);
              }
              else{
                
              res.json({
                  message: 'Contact details loading..',
                  data: contact
              });}
          });
      };


