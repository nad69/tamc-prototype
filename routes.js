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

      /* full app v1.0 iteration 2 - NM Sprint 5/6 Wed 110215 */

            app.get('/app-start1_2', function (req, res) {
          res.render('tamc-app/app-start1_2', 
            {'assetPath' : assetPath });

      });

            app.get('/app-calc1_2', function (req, res) {
          res.render('tamc-app/app-calc1_2', 
            {'assetPath' : assetPath });
      });

            app.get('/app-ida1_2', function (req, res) {
          res.render('tamc-app/app-ida1_2', 
            {'assetPath' : assetPath });
      });

            app.get('/app-form1_2', function (req, res) {
          res.render('tamc-app/app-form1_2', 
            {'assetPath' : assetPath });
      });

            app.get('/app-confirm1_2', function (req, res) {
          res.render('tamc-app/app-confirm1_2', 
            {'assetPath' : assetPath });
      });

            app.get('/app-finished1_2', function (req, res) {
          res.render('tamc-app/app-finished1_2', 
            {'assetPath' : assetPath });
      });

     /* full app v3.0 iteration 3 - NM internal Sprint 7 Wed050315*/

            app.get('/app-start1_3', function (req, res) {
          res.render('tamc-app/app-start1_3', 
            {'assetPath' : assetPath });

      });

            app.get('/app-calc1_3', function (req, res) {
          res.render('tamc-app/app-calc1_3', 
            {'assetPath' : assetPath });
      });

            app.get('/app-verify1_3', function (req, res) {
          res.render('tamc-app/app-verify1_3', 
            {'assetPath' : assetPath });

      });

            app.get('/app-ida1_2', function (req, res) {
          res.render('tamc-app/app-ida1_2', 
            {'assetPath' : assetPath });

      });

            app.get('/app-form1_3', function (req, res) {
          res.render('tamc-app/app-form1_3', 
            {'assetPath' : assetPath });
      });

            app.get('/app-confirm1_3', function (req, res) {
          res.render('tamc-app/app-confirm1_3', 
            {'assetPath' : assetPath });
      });

            app.get('/app-ida1_3', function (req, res) {
          res.render('tamc-app/app-ida1_3', 
            {'assetPath' : assetPath });
      });
                        app.get('/app-ida1v3', function (req, res) {
          res.render('tamc-app/app-ida1v3', 
            {'assetPath' : assetPath });
      });
                        app.get('/app-ida1v3', function (req, res) {
          res.render('tamc-app/app-ida1v3', 
            {'assetPath' : assetPath });
      });
        app.get('/app-finished1_3', function (req, res) {
          res.render('tamc-app/app-finished1_3', 
            {'assetPath' : assetPath });
      });
                app.get('/email_alertv1', function (req, res) {
          res.render('tamc-app/email_alertv1', 
            {'assetPath' : assetPath });
      });




            app.get('/app-exp1v3', function (req, res) {
          res.render('tamc-app/app-exp1v3', 
            {'assetPath' : assetPath });
      });
/**19 March 2015 V.4**/
            app.get('/app-start1_4', function (req, res) {
          res.render('tamc-app/app-start1_4', 
            {'assetPath' : assetPath });
      });
app.get('/app-calc1_4', function (req, res) {
          res.render('tamc-app/app-calc1_4', 
            {'assetPath' : assetPath });
      });
       app.get('/app-form1_4', function (req, res) {
          res.render('tamc-app/app-form1_4', 
            {'assetPath' : assetPath });
      });
      app.get('/email_alertv4', function (req, res) {
          res.render('tamc-app/email_alertv4', 
            {'assetPath' : assetPath });
      });
            app.get('/emailv4', function (req, res) {
          res.render('tamc-app/emailv4', 
            {'assetPath' : assetPath });
      });
       app.get('/app-verify1_4', function (req, res) {
          res.render('tamc-app/app-verify1_4', 
            {'assetPath' : assetPath });
      });
              app.get('/app-ida1v4', function (req, res) {
          res.render('tamc-app/app-ida1v4', 
            {'assetPath' : assetPath });
      });
                    app.get('/app-ida1_4', function (req, res) {
          res.render('tamc-app/app-ida1_4', 
            {'assetPath' : assetPath });
      });
                          app.get('/app-exp1v4', function (req, res) {
          res.render('tamc-app/app-exp1v4', 
            {'assetPath' : assetPath });
      });
                                app.get('/app-confirm1_4', function (req, res) {
          res.render('tamc-app/app-confirm1_4', 
            {'assetPath' : assetPath });
      }); 
                                      app.get('/app-finished1_4', function (req, res) {
          res.render('tamc-app/app-finished1_4', 
            {'assetPath' : assetPath });
      });            

/**1 April 2015 V.5**/
            app.get('/app-start1_5', function (req, res) {
          res.render('tamc-app/app-start1_5', 
            {'assetPath' : assetPath });
      });  
      app.get('/app-calc1_5', function (req, res) {
          res.render('tamc-app/app-calc1_5', 
            {'assetPath' : assetPath });
      });  
             app.get('/app-verify1_5', function (req, res) {
          res.render('tamc-app/app-verify1_5', 
            {'assetPath' : assetPath });
      });
             app.get('/app-form1_5', function (req, res) {
          res.render('tamc-app/app-form1_5', 
            {'assetPath' : assetPath });
      }); 
      app.get('/app-confirm1_5', function (req, res) {
          res.render('tamc-app/app-confirm1_5', 
            {'assetPath' : assetPath });
      });
       app.get('/app-finished1_5', function (req, res) {
          res.render('tamc-app/app-finished1_5', 
            {'assetPath' : assetPath });
      });  
            app.get('/email_alertv5', function (req, res) {
          res.render('tamc-app/email_alertv5', 
            {'assetPath' : assetPath });
      });

  /**9 April 2015 V.5**/
            app.get('/app-start1_6', function (req, res) {
          res.render('tamc-app/app-start1_6', 
            {'assetPath' : assetPath });
      });  
      app.get('/app-calc1_6', function (req, res) {
          res.render('tamc-app/app-calc1_6', 
            {'assetPath' : assetPath });
      });
            app.get('/app-ida-pro6', function (req, res) {
          res.render('tamc-app/app-ida-pro6', 
            {'assetPath' : assetPath });
      });   
                  app.get('/app-ida1v4-pro6', function (req, res) {
          res.render('tamc-app/app-ida1v4-pro6', 
            {'assetPath' : assetPath });
      }); 
                        app.get('/app-exp1v4-pro6', function (req, res) {
          res.render('tamc-app/app-exp1v4-pro6', 
            {'assetPath' : assetPath });
      }); 
                
           app.get('/app-calc-benefit', function (req, res) {
          res.render('tamc-app/app-calc-benefit', 
            {'assetPath' : assetPath });
      });
                        app.get('/app-calc-notbenefit', function (req, res) {
          res.render('tamc-app/app-calc-notbenefit', 
            {'assetPath' : assetPath });
      });
                  app.get('/app-calc-noteligible', function (req, res) {
          res.render('tamc-app/app-calc-noteligible', 
            {'assetPath' : assetPath });
      });    
             app.get('/app-verify1_6', function (req, res) {
          res.render('tamc-app/app-verify1_6', 
            {'assetPath' : assetPath });
      });
             app.get('/app-form1_6', function (req, res) {
          res.render('tamc-app/app-form1_6', 
            {'assetPath' : assetPath });
      }); 
      app.get('/app-confirm1_6a', function (req, res) {
          res.render('tamc-app/app-confirm1_6a', 
            {'assetPath' : assetPath });
      }); 
      app.get('/app-confirm1_6b', function (req, res) {
          res.render('tamc-app/app-confirm1_6b', 
            {'assetPath' : assetPath });
      }); 
      app.get('/app-confirm1_6c', function (req, res) {
          res.render('tamc-app/app-confirm1_6c', 
            {'assetPath' : assetPath });
      });
       app.get('/app-finished1_6', function (req, res) {
          res.render('tamc-app/app-finished1_6', 
            {'assetPath' : assetPath });
      });  
                   app.get('/emailv6', function (req, res) {
          res.render('tamc-app/emailv6', 
            {'assetPath' : assetPath });
      });
            app.get('/email_alert6', function (req, res) {
          res.render('tamc-app/email_alert6', 
            {'assetPath' : assetPath });
      });
                  app.get('/email_alert6_5', function (req, res) {
          res.render('tamc-app/email_alert6_5', 
            {'assetPath' : assetPath });
      }); 

 /**29 April 2015 V.6**/
            app.get('/app-start1_7', function (req, res) {
          res.render('tamc-app/app-start1_7', 
            {'assetPath' : assetPath });
      });  
            app.get('/app-calc1_7', function (req, res) {
          res.render('tamc-app/app-calc1_7', 
            {'assetPath' : assetPath });
      });
            app.get('/app-ida-pro6', function (req, res) {
          res.render('tamc-app/app-ida-pro6', 
            {'assetPath' : assetPath });
      });   
                  app.get('/app-ida1v4-pro6', function (req, res) {
          res.render('tamc-app/app-ida1v4-pro6', 
            {'assetPath' : assetPath });
      }); 
                        app.get('/app-exp1v4-pro6', function (req, res) {
          res.render('tamc-app/app-exp1v4-pro6', 
            {'assetPath' : assetPath });
      }); 
                
           app.get('/app-calc-benefit', function (req, res) {
          res.render('tamc-app/app-calc-benefit', 
            {'assetPath' : assetPath });
      });
                        app.get('/app-calc-notbenefit', function (req, res) {
          res.render('tamc-app/app-calc-notbenefit', 
            {'assetPath' : assetPath });
      });
                  app.get('/app-calc-noteligible', function (req, res) {
          res.render('tamc-app/app-calc-noteligible', 
            {'assetPath' : assetPath });
      });    
             app.get('/app-verify1_7', function (req, res) {
          res.render('tamc-app/app-verify1_7', 
            {'assetPath' : assetPath });
      });
             app.get('/app-form1_7', function (req, res) {
          res.render('tamc-app/app-form1_7', 
            {'assetPath' : assetPath });
      }); 
            app.get('/app-form1_7b', function (req, res) {
          res.render('tamc-app/app-form1_7b', 
            {'assetPath' : assetPath });
      }); 
            app.get('/app-form1_7c', function (req, res) {
          res.render('tamc-app/app-form1_7c', 
            {'assetPath' : assetPath });
      }); 
            app.get('/app-form1_7d', function (req, res) {
          res.render('tamc-app/app-form1_7d', 
            {'assetPath' : assetPath });
      }); 
           app.get('/app-confirm1_7', function (req, res) {
          res.render('tamc-app/app-confirm1_7', 
            {'assetPath' : assetPath });
      }); 
           app.get('/app-confirm1_7b', function (req, res) {
          res.render('tamc-app/app-confirm1_7b', 
            {'assetPath' : assetPath });
      }); 
           app.get('/app-confirm1_7c', function (req, res) {
          res.render('tamc-app/app-confirm1_7c', 
            {'assetPath' : assetPath });
      }); 
           app.get('/app-confirm1_7d', function (req, res) {
          res.render('tamc-app/app-confirm1_7d', 
            {'assetPath' : assetPath });
      });
       app.get('/app-finished1_7', function (req, res) {
          res.render('tamc-app/app-finished1_7', 
            {'assetPath' : assetPath });
      });  
                   app.get('/emailv7', function (req, res) {
          res.render('tamc-app/emailv7', 
            {'assetPath' : assetPath });
      });
            app.get('/email_conf7', function (req, res) {
          res.render('tamc-app/email_conf7', 
            {'assetPath' : assetPath });
      });


/**11 June 2015 Verify page mockups**/
            app.get('/app-verify-s15-mock_v1', function (req, res) {
          res.render('tamc-app/app-verify-s15-mock_v1', 
            {'assetPath' : assetPath });
      }); 

            app.get('/app-verify-s15-mock_v2', function (req, res) {
          res.render('tamc-app/app-verify-s15-mock_v2', 
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
/***************You are Authenticated***************/
      app.get('/app-form1_2verified', function (req, res) {
          res.render('tamc-app/app-form1_2verified', 
            {'assetPath' : assetPath });
      });   
      app.get('/email', function (req, res) {
          res.render('tamc-app/email', 
            {'assetPath' : assetPath });
      });   
    
/***********/

    }    
}