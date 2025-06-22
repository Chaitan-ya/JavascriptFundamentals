console.log("Understanding Errors");
// fetch('https://reqres.in/api/users')
// fetch("https/randomuser.me/api")
//   .then((res) => {
//     res.json();
//   })
//   .then((data) => console.log(data));

// GET Method
// fetch("https://randomuser.me/api")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Occurence of Error ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const user = data.results[0];
//     console.log(data);

//     console.log(user.location.street);
//     console.log(user.location.city);
//   })
//   .catch((Error) => {
//     console.error("Check the error", error);
//   });

// POST Method
// const newPost = ;
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userId: 35,
    title: "SoftWare Developer",
    Intrest: "Singer",
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Check it ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("POST ERROR", error);
  });

// PUT Method
const putdata = {
  userID: 35,
  title: "SDE",
  hobbies: "Playing Chess",
};
fetch("https://jsonplaceholder.typicode.com/posts/35", {
  method: "PUT",
  headers: {
    "Content-Type": "application-json",
  },
  body: JSON.stringify(putdata),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Check the error ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Check it ", error);
  });
// DELETE Method

fetch("https://jsonplaceholder.typicode.com/posts/35", {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`One ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Check the Error", error));
