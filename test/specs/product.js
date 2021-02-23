describe('To login to the saucedemo page', () => {


    it('should print the product list', () => {
      browser.url('https://www.saucedemo.com/');
      const username =  $('#user-name');
      username.addValue('standard_user');
      const pwsrd = $('#password');
      pwsrd.addValue('secret_sauce'); 
      const btn = $('#login-button');
      btn.click();
      const product = $$("//div[@class='inventory_item_name']");
      product.forEach(element => {
      console.log(element.getText())
      });

    });

});
