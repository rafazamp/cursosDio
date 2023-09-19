const os = require('os');

const { arch, platform, totalmem, freemem} = os;

setInterval(() => {
  const stats = {
    OS : platform(),
    Arch : arch(),
    TotalRAM : `${parseInt(totalmem()/1024/1024)} MB`,
    FreeRAM : `${parseInt(freemem()/1024/1024)} MB`,
    Usage: `${((freemem() / totalmem())*100).toFixed(2)} %`,
  }
  console.clear();
  console.table(stats);
  exports.stats = stats;
}, 1000);
