const pojo = require('../specs/pojo');
describe('To login to the saucedemo page', () => {


    it('should print the product list', () => {
      browser.url('https://www.saucedemo.com/');
      pojo.inputuser.addValue('standard_user');
      pojo.inputpaswrd.addValue('secret_sauce');
      pojo.btnclick.click();
      const product = $$("//div[@class='inventory_item_name']");
      product.forEach(element => {
      console.log(element.getText())
      });

    });

});
