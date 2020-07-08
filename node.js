console.log('start');

setTimeout(() => {          // callback1
  console.log(111);
  setTimeout(() => {        // callback2
    console.log(222);
    Promise.resolve().then(() => { // callback14
      console.log(4444444)
      setTimeout(()=> { // callback15
        console.log(555555)
      }, 0)
    });
  }, 0);
  setImmediate(() => {      // callback3
    console.log(333);
    setTimeout(() => {
      console.log(1000);    // callback10
    }, 0)
  })
  process.nextTick(() => {  // callback4
    console.log(444);  
    setTimeout(() => {
      console.log(1111);    // callback11
    }, 0)
  })
}, 0);

setImmediate(() => {        // callback5
  console.log(555);
  process.nextTick(() => {  // callback6
    console.log(666);  
  })
})

setTimeout(() => {          // callback7              
  console.log(777);
  process.nextTick(() => {  // callback8
    console.log(888);   
  })
}, 0);

process.nextTick(() => {    // callback9
  console.log(999);  
})

Promise.resolve().then(() => { // callback12
  console.log(22222)
  setTimeout(()=> { // callback13
    console.log(333333)
  }, 0)
});
console.log('end');

//<-----Macrotask----->
// Timer Task [callback7, callback13, callback2]
// Check Task [callback5, callback3]

//<-----Mincrotask----->
// Next Tick task [callback4]
// Other []

// console.info(start, end, 999, 22222, 111, 777, 333333, 222, 555, 333,
// 444, 1000, 888, 666, 4444444, 1000, 1111, 555555)

// console.info(start, end, 999, 22222, 111, 444, 777, 888, 333333, 555,666,
//  333,222,  
// 4444444, 1111, 1000, 555555)