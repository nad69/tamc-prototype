module.exports = {
  bind : function (app, assetPath) {
      app.get('/', function (req, res) {

        res.render('index',
                  {'assetPath' : assetPath});

      });


      /* Elements pages */

      app.get('/start', function (req, res) {
          res.render('tamc_pre-reg_v1/start', 
            {'assetPath' : assetPath });
      });

      app.get('/eligibility_v1', function (req, res) {
          res.render('tamc_pre-reg_v1/eligibility_v1', 
            {'assetPath' : assetPath });
      });

      app.get('/pre-reg_form', function (req, res) {
          res.render('tamc_pre-reg_v1/pre-reg_form', 
            {'assetPath' : assetPath });
      });


      app.get('/confirm', function (req, res) {
          res.render('tamc_pre-reg_v1/confirm', 
            {'assetPath' : assetPath });
      });


      app.get('/eligibility_v2', function (req, res) {
          res.render('tamc_pre-reg_v1/eligibility_v2', 
            {'assetPath' : assetPath });
      });


      app.get('/calc1', function (req, res) {
          res.render('tamc_pre-reg_v1/calc1', 
            {'assetPath' : assetPath });
      });

      app.get('/calc2', function (req, res) {
          res.render('tamc_pre-reg_v1/calc2', 
            {'assetPath' : assetPath });
      });

            app.get('/calc3', function (req, res) {
          res.render('tamc_pre-reg_v1/calc3', 
            {'assetPath' : assetPath });
      });
          app.get('/start', function (req, res) {
          res.render('tamc_pre-reg_v1/start', 
            {'assetPath' : assetPath });
      });

           app.get('/start2', function (req, res) {
          res.render('tamc_pre-reg_v1/start2', 
            {'assetPath' : assetPath });
      });

    }
}

  

