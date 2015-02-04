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


      /* v1 iteration 5 - NM/JK testers ready for fri 28/11/14 */

            app.get('/eligibility', function (req, res) {
          res.render('tamc_pre-reg_v1/eligibility', 
            {'assetPath' : assetPath });

      });

      /* v1 iteration 6 - NM/JK post fri 28/11/14 based on user testing and feedback */

            app.get('/start1_1', function (req, res) {
          res.render('tamc_pre-reg_v1/start1_1', 
            {'assetPath' : assetPath });

      });

            app.get('/eligibility1_1', function (req, res) {
          res.render('tamc_pre-reg_v1/eligibility1_1', 
            {'assetPath' : assetPath });
      });

            app.get('/eligibility1_2', function (req, res) {
          res.render('tamc_pre-reg_v1/eligibility1_2', 
            {'assetPath' : assetPath });
      });

            app.get('/pre-reg_form1_1', function (req, res) {
          res.render('tamc_pre-reg_v1/pre-reg_form1_1', 
            {'assetPath' : assetPath });
      });

            app.get('/confirm1_1', function (req, res) {
          res.render('tamc_pre-reg_v1/confirm1_1', 
            {'assetPath' : assetPath });

      });

      /* pre-reg v1 iteration 5.3 - NM/SW post 08/11/14 */

                        app.get('/start1_2', function (req, res) {
          res.render('tamc_pre-reg_v1/start1_2', 
            {'assetPath' : assetPath });
      });

            app.get('/eligibility1_2', function (req, res) {
          res.render('tamc_pre-reg_v1/eligibility1_2', 
            {'assetPath' : assetPath });
      });

            app.get('/pre-reg_form1_2', function (req, res) {
          res.render('tamc_pre-reg_v1/pre-reg_form1_2', 
            {'assetPath' : assetPath });
      });

            app.get('/confirm1_2', function (req, res) {
          res.render('tamc_pre-reg_v1/confirm1_2', 
            {'assetPath' : assetPath });
      });

      /* pre-reg v1 iteration 5.4 - NM and project board 16/11/14 */

                        app.get('/start1_3', function (req, res) {
          res.render('tamc_pre-reg_v1/start1_3', 
            {'assetPath' : assetPath });
      });

            app.get('/eligibility1_3', function (req, res) {
          res.render('tamc_pre-reg_v1/eligibility1_3', 
            {'assetPath' : assetPath });
      });

            app.get('/pre-reg_form1_3', function (req, res) {
          res.render('tamc_pre-reg_v1/pre-reg_form1_3', 
            {'assetPath' : assetPath });
      });

            app.get('/confirm1_3', function (req, res) {
          res.render('tamc_pre-reg_v1/confirm1_3', 
            {'assetPath' : assetPath });
      });


        /* pre-reg v1 iteration 5.5/5.6 (v2.5) - NM post user testing and show and tell 231214 */

                        app.get('/start1_4', function (req, res) {
          res.render('tamc_pre-reg_v1/start1_4', 
            {'assetPath' : assetPath });
      });

            app.get('/eligibility1_4', function (req, res) {
          res.render('tamc_pre-reg_v1/eligibility1_4', 
            {'assetPath' : assetPath });
      });

            app.get('/pre-reg_form1_4', function (req, res) {
          res.render('tamc_pre-reg_v1/pre-reg_form1_4', 
            {'assetPath' : assetPath });
      });

            app.get('/confirm1_4', function (req, res) {
          res.render('tamc_pre-reg_v1/confirm1_4', 
            {'assetPath' : assetPath });
      });

          /* pre-reg v1 iteration 5.7 (v2.5) - NM post GDS review wk beg 190115 incl all stakeholder and Challenge Panel amends */

                        app.get('/start1_5', function (req, res) {
          res.render('tamc_pre-reg_v1/start1_5', 
            {'assetPath' : assetPath });
      });

            app.get('/eligibility1_5', function (req, res) {
          res.render('tamc_pre-reg_v1/eligibility1_5', 
            {'assetPath' : assetPath });
      });

            app.get('/pre-reg_form1_5', function (req, res) {
          res.render('tamc_pre-reg_v1/pre-reg_form1_5', 
            {'assetPath' : assetPath });
      });

            app.get('/confirm1_5', function (req, res) {
          res.render('tamc_pre-reg_v1/confirm1_5', 
            {'assetPath' : assetPath });
      });


          /* pre-reg v1 iteration 5.8 (v3.0) - NM post GDS review and User Research A/B test 22-230115 */

                        app.get('/start1_5b', function (req, res) {
          res.render('tamc_pre-reg_v1/start1_5b', 
            {'assetPath' : assetPath });
      });

            app.get('/pre-reg_form1_5b', function (req, res) {
          res.render('tamc_pre-reg_v1/pre-reg_form1_5b', 
            {'assetPath' : assetPath });
      });

            app.get('/confirm1_5b', function (req, res) {
          res.render('tamc_pre-reg_v1/confirm1_5b', 
            {'assetPath' : assetPath });
      });

          /* pre-reg v1 iteration 5.9 (v3.1) - NM post User Research 22-230115 */

                        app.get('/start1_5c', function (req, res) {
          res.render('tamc_pre-reg_v1/start1_5c', 
            {'assetPath' : assetPath });
      });

            app.get('/pre-reg_form1_5c', function (req, res) {
          res.render('tamc_pre-reg_v1/pre-reg_form1_5c', 
            {'assetPath' : assetPath });
      });

            app.get('/confirm1_5c', function (req, res) {
          res.render('tamc_pre-reg_v1/confirm1_5c', 
            {'assetPath' : assetPath });
      });

          /* pre-reg v1 iteration 6.0 (v3.2) - NM post User Research 260115 prep for beta/live */

                        app.get('/start1_5d', function (req, res) {
          res.render('tamc_pre-reg_v1/start1_5d', 
            {'assetPath' : assetPath });
      });

            app.get('/pre-reg_form1_5d', function (req, res) {
          res.render('tamc_pre-reg_v1/pre-reg_form1_5d', 
            {'assetPath' : assetPath });
      });

            app.get('/confirm1_5d', function (req, res) {
          res.render('tamc_pre-reg_v1/confirm1_5d', 
            {'assetPath' : assetPath });
      });

      /* pre-reg v1 iteration 7.0 (v3.3) - 02 February 2015 - Post GDS Beta Assessment - Sprint 5*/

                        app.get('/start1_6', function (req, res) {
          res.render('tamc_pre-reg_v1/start1_6', 
            {'assetPath' : assetPath });
      });

            app.get('/pre-reg_form1_6', function (req, res) {
          res.render('tamc_pre-reg_v1/pre-reg_form1_6', 
            {'assetPath' : assetPath });
      });

            app.get('/confirm1_6', function (req, res) {
          res.render('tamc_pre-reg_v1/confirm1_6', 
            {'assetPath' : assetPath });
      });

      /* full app v1 iteration 1 - NM/JK post 08/11/14 */

            app.get('/app-start1', function (req, res) {
          res.render('tamc-app/app-start1', 
            {'assetPath' : assetPath });

      });

            app.get('/app-eligibility1', function (req, res) {
          res.render('tamc-app/app-eligibility1', 
            {'assetPath' : assetPath });
      });

            app.get('/app-ida1', function (req, res) {
          res.render('tamc-app/app-ida1', 
            {'assetPath' : assetPath });
      });

            app.get('/app-form1', function (req, res) {
          res.render('tamc-app/app-form1', 
            {'assetPath' : assetPath });
      });

            app.get('/app-confirm1', function (req, res) {
          res.render('tamc-app/app-confirm1', 
            {'assetPath' : assetPath });
      });

            app.get('/app-done1', function (req, res) {
          res.render('tamc-app/app-done1', 
            {'assetPath' : assetPath });
      });


/**IDA Paths AJC 16/12/14**/
      app.get('/app-ida1', function (req, res) {
          res.render('tamc_app/app-ida1', 
            {'assetPath' : assetPath });
      });            
            app.get('/app-ida1_1', function (req, res) {
          res.render('tamc-app/app-ida1_1', 
            {'assetPath' : assetPath });
      });            
            app.get('/app-ida2', function (req, res) {
          res.render('tamc-app/app-ida2', 
            {'assetPath' : assetPath });
      });
          app.get('/app-ida3', function (req, res) {
          res.render('tamc-app/app-ida3', 
            {'assetPath' : assetPath });
      });
                app.get('/app-ida4', function (req, res) {
          res.render('tamc-app/app-ida4', 
            {'assetPath' : assetPath });
      });    
       app.get('/app-ida5', function (req, res) {
          res.render('tamc-app/app-ida5', 
            {'assetPath' : assetPath });
      });
      app.get('/app-ida6', function (req, res) {
          res.render('tamc-app/app-ida6', 
            {'assetPath' : assetPath });
      });  
      app.get('/app-ida7', function (req, res) {
          res.render('tamc-app/app-ida7', 
            {'assetPath' : assetPath });

      });  
      app.get('/app-ida7_1', function (req, res) {
          res.render('tamc-app/app-ida7_1', 
            {'assetPath' : assetPath });
      });   
    
/***********/

    }    
}