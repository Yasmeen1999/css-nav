function display(data) {
  console.log(data);
}
setTimeout(printHello, 2000);

const futureData = fetch("https://twitter.com/salman18/tweets/1");
futureData.then(display);
futureData.catch();
// Object - Promise
//1. value: __''_____
//2. onFullFillmenyt: []
//3.onRejectrion:[]
//4. status -> pending(loader....)
// -> resolved -> then
//reject

//

console.log("Me first!");
