const pojo = require('../specs/pojo');
describe('To login to the saucedemo page', () => {


    it('Print the price of the products inside the website', () => {
      browser.url('https://www.saucedemo.com/');
      pojo.inputuser.addValue('standard_user');
      pojo.inputpaswrd.addValue('secret_sauce');
      pojo.btnclick.click();
      const product = $$('div.inventory_item_price');
      
      product.forEach(element => {
        const remov = element.getText()
        console.log(remov.substring(1))
        
      });
});

});

