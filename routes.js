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

            app.get('/pre-reg_form2', function (req, res) {
          res.render('tamc_pre-reg_v1/pre-reg_form2', 
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

           app.get('/startv3', function (req, res) {
          res.render('tamc_pre-reg_v1/startv3', 
            {'assetPath' : assetPath });

                });

           app.get('/confirm2', function (req, res) {
          res.render('tamc_pre-reg_v1/confirm2', 
            {'assetPath' : assetPath });
      });


      /* Full app pages */

            app.get('/start-app', function (req, res) {
          res.render('tamc-app_v1/start-app', 
            {'assetPath' : assetPath });

      });

            app.get('/start-app2', function (req, res) {
          res.render('tamc-app_v1/start-app2', 
            {'assetPath' : assetPath });
      });

    }
}

  

