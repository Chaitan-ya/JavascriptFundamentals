const url = "https://jsonplaceholder.typicode.com";
                   

async function handleResponse(response) {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => response.text());
    throw new Error(
      `Check the Error ${response.status},Data: ${
        typeof errorBody === "object" ? JSON.stringify(errorBody) : errorBody
      }`
    );
  }
  return response.json();
}

async function fetchData(GET) {
  try {
    const response = await fetch(`${url}${GET}`);
    const data = await handleResponse(response);
    return data;
  } catch (error) {
    console.error("Get Error", error);
    throw error;
  }
}
async function runGet() {
  console.log("<----GET Method--->");
  try {
    const post = await fetchData("/posts/1");
    console.log("Data", post);
  } catch (error) {
    console.error("Error in Message", error);
  }
}
// runGet();

async function Postdata(endpoint,data) {
    try{
        const response = await fetch(`${url}${endpoint}`,{
           method:'POST',
           headers:{
            'Content-Type' : 'application/json'
                              
           },
           body:JSON.stringify(data)
        })
    const result = await handleResponse(response);
    return result;
    }
    catch(error){
        console.error('POST Request Error',error);
        throw error;
    }
}
async function runPOST(){
    const newPost = {
        title:'New Post',
        body : 'I am SoftWare Developer',
        userId:5
    }
    try{
        const createdPost = await Postdata('/posts',newPost);
        console.log('Created Post',createdPost);
        console.log(createdPost.id);
        console.log(createdPost.title);
        
    }catch(error){
        console.error("Error Message",error)
    }
}
runPOST();