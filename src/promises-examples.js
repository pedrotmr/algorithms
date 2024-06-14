console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
    setTimeout(() => {
        console.log("Nested Timeout 1");
    }, 2000);
    Promise.resolve().then(() => {
        console.log("Promise inside Timeout 1");
    });
}, 2000);

setTimeout(() => {
    console.log("Timeout 2");
}, 2000);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

Promise.resolve().then(() => {
    console.log("Promise 2");
    setTimeout(() => {
        console.log("Nested Timeout 2");
    }, 2000);
});

console.log("End");



// (async () => {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("HELLO");
//             resolve();
//         }, 2000);
//     });
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("HELLO3");
//             resolve();
//         }, 6000);
//     });
//     console.log("HELLO2");
// })().catch((error) => console.error(error));

// function promise1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("hello I am the one");
//         }, 2000);
//     });
// }

// function promise2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("hello I am the two");
//         }, 3000);
//     });
// }

// promise1().then((result) => {
//     console.log(result);
//     return promise2();
// }).then((result2) => {
//     console.log(result2);
// });
