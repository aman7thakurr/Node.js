const EventEmitter =   require('events');
const myEmitter =  new EventEmitter();

const welcome = ()=>{
    console.log("hi");
}
const user = ()=>{
    console.log("aman");
}
const greet = ()=>{
    console.log("Good morning");
}

myEmitter.on('userJoined',welcome)
myEmitter.on('userJoined',user)
myEmitter.on('userJoined',greet)

myEmitter.emit('userJoined')


// Listener function
const greetBirthday = (name, newAge) => {
    // name = John
    // newAge = 24
    console.log(`Happy Birthday ${name}. You are now ${newAge}!`);
}

// Listening for the birthdayEvent
myEmitter.on('birthdayEvent', greetBirthday);

// Emitting the birthdayEvent with some extra parameters
myEmitter.emit('birthdayEvent', 'Aman', '24');