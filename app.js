
// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     const success = true; // This is just for demonstration

//     if (success) {
//         resolve(10);
//     } else {
//         reject(5);
//     }
// });

// myPromise
//     .then((result) => {
//         console.log(result); // 'Operation was successful!'
//         return result * 2;
//     })
//     .then((result) =>  {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error); // 'Operation failed.'
//     })
//     .finally(() => {
//         console.log('promise finished');
//     });


let url = 'https://jsonplaceholder.typicode.com/users';
async function get() {
    
    let response = await fetch(url,{method: 'GET'})
    let json = await response.json()
    return json;
}
// console.log(get())
get()
    .then((json) => {
        document.write(JSON.stringify(json[0], null, 2));
    })
    .catch((err) => {
        console.error(err)
    })


    console.log("mahrous")




