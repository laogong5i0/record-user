const bigInt = require("big-integer");

module.exports = function(_workerId, _dataCenterId, _sequence){
  // constructor() {
  this.twepoch = 0;
  this.workerIdBits = 5;
  this.dataCenterIdBits = 5;
  this.maxWrokerId = -1 ^ (-1 << this.workerIdBits); // 值为：31
  this.maxDataCenterId = -1 ^ (-1 << this.dataCenterIdBits); // 值为：31
  this.sequenceBits = 12;
  this.workerIdShift = this.sequenceBits; // 值为：12
  this.dataCenterIdShift = this.sequenceBits + this.workerIdBits; // 值为：17
  this.timestampLeftShift = this.sequenceBits + this.workerIdBits + this.dataCenterIdBits; // 值为：22
  this.sequenceMask = -1 ^ (-1 << this.sequenceBits); // 值为：4095
  this.lastTimestamp = -1;
  //设置默认值,从环境变量取
  this.workerId = 1;
  this.dataCenterId = 1;
  this.sequence = 0;
  if (this.workerId > this.maxWrokerId || this.workerId < 0) {
    throw new Error('config.worker_id must max than 0 and small than maxWrokerId-[' + this.maxWrokerId + ']');
  }
  if (this.dataCenterId > this.maxDataCenterId || this.dataCenterId < 0) {
    throw new Error('config.data_center_id must max than 0 and small than maxDataCenterId-[' + this.maxDataCenterId + ']');
  }
  this.workerId = _workerId;
  this.dataCenterId = _dataCenterId;
  this.sequence = _sequence;
  // }
  this.tilNextMillis = () => {
    let timestamp = this.timeGen();
    while (timestamp <= lastTimestamp) {
      timestamp = this.timeGen();
    }
    return timestamp;
  }
  this.timeGen = () => {
    return Date.now();
  }
  this.nextId = () => {
    let timestamp = this.timeGen();
    if (timestamp < this.lastTimestamp) {
      throw new Error('Clock moved backwards. Refusing to generate id for ' +
        (this.lastTimestamp - timestamp));
    }
    if (this.lastTimestamp === timestamp) {
      this.sequence = (this.sequence + 1) & this.sequenceMask;
      if (this.sequence === 0) {
        timestamp = this.tilNextMillis(this.lastTimestamp);
      }
    } else {
      this.sequence = 0;
    }
    this.lastTimestamp = timestamp;
    let shiftNum = (this.dataCenterId << this.dataCenterIdShift) |
      (this.workerId << this.workerIdShift) |
      this.sequence; // dataCenterId:1,workerId:1,sequence:0  shiftNum:135168
    let nfirst = new bigInt(String(timestamp - this.twepoch), 10);
    nfirst = nfirst.shiftLeft(this.timestampLeftShift);
    let nnextId = nfirst.or(new bigInt(String(shiftNum), 10)).toString(10);
    return nnextId;
  }
}