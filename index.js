const userInfo = require(`./information.js`);

const cowSay = require(`./node_modules/cowsay`);

console. log ( cowSay . say ( { 
    text :`${userInfo.firstName} ${userInfo.campus}`, 
    e : "oO", 
    T : "U " 
} ) ) ; 

