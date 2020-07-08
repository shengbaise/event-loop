console.log(1);

setTimeout(() => {
  // callback1
  console.log(2);
  Promise.resolve().then(() => {
    // callback4
    console.log(3)
    setTimeout(()=> { // callback5
      console.log(51)
    })
  });
}, 0);

new Promise((resolve, reject) => {
  console.log(4)
  resolve(5)
}).then((data) => {
  // callback2
  console.log(data);
})

setTimeout(() => {
  // callback3
  console.log(6);
}, 0)

console.log(7);

// Macrotask [callback3, callback5]
// Microtack []

// console.info(1, 4, 7, 5, 2, 3, 6, 51)