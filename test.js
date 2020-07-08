console.log('1');

setTimeout(function() { // callback1
    console.log('2');
    process.nextTick(function() { // callback2
        console.log('3');
    })
    new Promise(function(resolve) { 
        console.log('4');
        resolve();
    }).then(function() { // callback3
        console.log('5')
    })
}, 0)

new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() { // callback4
    console.log('8')
})
process.nextTick(function() { // callback5
  console.log('6');
})

setTimeout(function() { // callback6
    console.log('9');
    process.nextTick(function() { // callback7
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() { // callback8
        console.log('12')
    })
})

//<-----Macrotask----->
// Timer Task [callback6]
// Check Task []

//<-----Mincrotask----->
// Next Tick task []
// Other []

// console.info(1, 7, 6, 8, 2, 4, 3, 5, 9, 11, 10, 12)