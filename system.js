var os= require('os');
var message="Here is the information about your OS";
var sysarray=new Array('Type:'+os.type(),
                      'Node Version:'+process.version,
                      'platform:'+os.platform(),
                      'HostName:'+os.hostname(),
                      'Total Memory:'+os.totalmem(),
                          'FreeMemory:'+os.freemem(),
                              'upTime:'+os.uptime());
  console.log(message);
  for(i=0;i<sysarray.length;i++)
  console.log(sysarray[i]);