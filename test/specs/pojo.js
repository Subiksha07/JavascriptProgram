class pojo {

    get inputuser(){return $('#user-name');}
    get inputpaswrd(){return $('#password');}
    get btnclick(){return $('#login-button');}
 
   login(){
    this.inputuser.setValue(username);
    this.inputuser.setValue(paswrd);
    this.inputuser.click();
    
   }
}
module.exports = new pojo();