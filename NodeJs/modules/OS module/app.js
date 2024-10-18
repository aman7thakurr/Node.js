const os  =  require('os');

// "uptime" tells the  system uptime in seconds since the system  was booted

const systemUptime =  os.uptime();

// "userInfo" gives the information about the current  user

const userInfo =   os.userInfo();

const otherInfo = {
    name : os.type(), //os.type() - Tells the name of the Operating System
    release : os.release(), //os.release() - Tells the release version of the Operating System
    totalMem : os.totalmem(), //os.totalMem() - Tells the total amount of memory available in bytes
    freeMem : os.freemem() //os.freeMem() - Tells the total amount of free memory available in
}

console.log(systemUptime)
console.log(userInfo)
console.log(otherInfo)