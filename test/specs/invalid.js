const pojo = require('../specs/pojo');
describe('To login with invalid credentials in saucedemo page', () => {


    it('To pass invalid credentials', () => {
      browser.url('https://www.saucedemo.com/');
      pojo.inputuser.addValue('locked_out_user');
      pojo.inputpaswrd.addValue('secret_sauce');
      pojo.btnclick.click();
      const errormsg = $("//h3[@data-test='error']");
      expect(errormsg).toHaveTextContaining('Epic sadface: ');

    });

});
