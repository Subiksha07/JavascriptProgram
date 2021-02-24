const pojo = require('../specs/pojo');
describe('To login to the saucedemo page', () => {
      it('To pass valid credentials ', () => {
      browser.url('https://www.saucedemo.com/');
      pojo.inputuser.addValue('standard_user');
      pojo.inputpaswrd.addValue('secret_sauce');
      pojo.btnclick.click();
      const addtocart = $("(//button[text()='ADD TO CART'])[1]");
      addtocart.click();
      const cart = $('#shopping_cart_container');
      cart.click();
      const cartpage = $('.inventory_item_name');
      let added = console.log(cartpage.getText());
if(added='Sauce Labs Backpack'){
      console.log('The product is selected successfully')
}else{
        console.log('The selected product is not correct')
      }

 });
    

});