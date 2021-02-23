describe('To login with invalid credentials in saucedemo page', () => {


    it('To pass invalid credentials', () => {
      browser.url('https://www.saucedemo.com/');
      const username =  $('#user-name');
      username.addValue('locked_out_user');
      const pwsrd = $('#password');
      pwsrd.addValue('secret_sauce'); 
      const btn = $('#login-button');
      btn.click();
      const errormsg = $("//h3[@data-test='error']");
      expect(errormsg).toHaveTextContaining('Epic sadface: ');

    });

});
