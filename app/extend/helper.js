const UUID = Symbol('Application#uuid');
const Snowflake = require('../utils/Snowflake');

module.exports = {
  get newuuid(){
    if(!this[UUID]){
      this[UUID] = new Snowflake(1,1,0);
    }
    return this[UUID].nextId();
  },
}