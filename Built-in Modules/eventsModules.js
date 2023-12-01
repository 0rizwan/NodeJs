const EventEmitter = require('events');
const event = new EventEmitter();

event.on("myDetails", (name)=>{
    console.log(`Your name is ${name}`);
});

event.on("myDetails", ()=>{
    console.log(`Your age is 18`)
})

event.emit("myDetails", "John");