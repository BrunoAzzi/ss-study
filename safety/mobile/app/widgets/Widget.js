
export default class Widget {
  constructor(){
    this.services = new Map();     //HashMap com os serviços fornecidos por este widget
    this.permissions = new Map();  //HashMap com as permissões e
    this.enable = true;
  }
  isEnable(){
    return this.enable;
  }
  enable(){
		this.enable = true;
	}
	dissable(){
		this.enable = false;
	}
  get(key){
    //console.log(key);
    //console.log(this.services);
    const serv = this.services.get(key);
    if(serv && serv.this===this){
      return serv;
    }
    return undefined;
  }
  addService(SERVICE, func, permission){
    //console.log(SERVICE);
    SERVICE.widget = this;
    if(this.services.has(SERVICE.key)){
      console.trace();
      throw `Service ${SERVICE.key} alware exists`;
    }
    this.services.set(SERVICE.key, {func, permission, this});
  }
  getService(SERVICE){
    //console.log(SERVICE);
    const serv = SERVICE.widget.get(SERVICE.key);
    if(!serv){  //se o serviço nao existe
      console.trace();
      throw `Service ${SERVICE.key} do not exist on widget ${SERVICE.widget}`;
      //return undefined;
    }
    const acess = this.permissions.get(SERVICE.key);
    if(!acess){//adiciona a permissão caso já não tenha sido adicionada
      this.permissions.set(SERVICE.key, {widget:SERVICE.widget, permission:serv.permission});
    }
    //console.log(this);
    return serv.func; //retorna a função correspondente ao serviço solicitado
  }
}
