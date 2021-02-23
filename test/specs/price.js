describe('To login to the saucedemo page', () => {


    it('should print the price of the products', () => {
      browser.url('https://www.saucedemo.com/');
      const username =  $('#user-name');
      username.addValue('standard_user');
      const pwsrd = $('#password');
      pwsrd.addValue('secret_sauce'); 
      const btn = $('#login-button');
      btn.click();
      const product = $$('div.inventory_item_price');
      
      product.forEach(element => {
        const remove = element.getText()
        console.log(remove.substring(1))
        
      });
});

});

