
// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub !',
    });
});
// Import contact controller
var contactController = require('./contactController');
// Contact routes
router.route('/contacts/authenticate')
    .post(contactController.authenticate);
    
router.route('/contacts/check')
    .post(contactController.check);
router.route('/contacts/wallet')
    .get(contactController.wallet);

//adding data to verified model
router.route('/verify')
    
    .post(contactController.verifiednew)
    .get(contactController.gettingDetailFromVerifyDb)

    router.route('/verify/:contact_id')
    .delete(contactController.deleteFromVerifyDb)


router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new)
router.route('/contacts/insert/:contact_id')
    .post(contactController.newProduct)
    .get(contactController.show)
router.route('/contacts/show/:contact_id')
    .get(contactController.show1)
router.route('/contacts/referral')
    .post(contactController.referral)
router.route('/contacts/update') 
    .put(contactController.update)
router.route("/contacts/back/:contact_id").get(contactController.back);  
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
// Export API routes
module.exports = router;