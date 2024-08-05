// Fetch API

// API -> Application Programmming Interface (Endpoints)

/*
The Fetch API provides an interface for fetching(sending/receiving) resources.
It uses Request and Response objects.
The fetch() method is used to fetch a resource (data).

let promise = fetch(url, [options])
*/

const URL = "https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#facts");
const btnFact = document.querySelector("#facts-btn")
/*
AJAX - Asynchronous JS and XML
JSON - JavaScript Object Notation
json() - return a second promise that resolve with the result of parsing the response body text as JSON (Input is JSON, output is JS Object)
*/

// using promise-chain
/*
function getFacts(){
          fetch(URL).then((res) => {
                    return res.json();
          })
          .then((data) => {
                    factPara.innerText = data[1].text;
          });
}
*/

// using async-await
const getFacts = async () => {
          let response = await fetch(URL);
          console.log(response); // JSON format
          let data = await response.json();
          // console.log(data);
          // console.log(data[0]);
          // console.log(data[0].text);
          factPara.innerText = data[0].text;
}

btnFact.addEventListener("click", getFacts)


// 7275377891 - Shubham Gupta