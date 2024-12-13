//this is the most used way to use promise
// async function getData() {
//   let resultFromServer = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   console.log(await resultFromServer.json());
// }
// getData();

//this is the other way to use promise
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

//Basic way to write promises
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Done");
    resolve();
  }, 1000);
});
promiseOne.then(() => console.log("Promise is consumed"));

//other and new way to write promises
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Inside second promise");
    resolve();
    reject();
  }, 1000);
}).then(() => console.log("second promise is consumed"));

//another example
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "junaid", city: "Indore" });
  }, 1000);
}).then((data) => console.log(data));

//with then, catch and finally
new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ id: 101, gender: "male" });
    } else {
      reject("ERROR!! an error occurred");
    }
  }, 2000);
})
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log("always executed"));

//with async-await
const promiseWithAsync = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "Raj", pass: 1234 });
    } else {
      reject("ERROR!! name error occurred");
    }
  }, 2000);
});

async function promiseForAsyncAwait() {
  try {
    const response = await promiseWithAsync;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

promiseForAsyncAwait();

//get data from the API
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
//function call
getData();
