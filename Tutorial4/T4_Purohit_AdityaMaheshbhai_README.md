<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->



# Tutorial 4

* *Date Created*: 17 FEB 2024
* *Last Modification Date*: 18 FEB 2024
* *Tutorial 4 GitLab URL*: <https://git.cs.dal.ca/apurohit/csci-5709-tutorials/-/tree/main/Tutorial4?ref_type=heads>
* *Tutorial 4 Live Netlify URL*: <https://aditya-purohit-csci-5709-web-tut4.netlify.app/>


## Authors

* [Aditya Maheshbhai Purohit](aditya.purohit@dal.ca)



## Getting Started

### Prerequisites

To have a local copy of this lab up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
npm (Comes with node.js installation)
axios: "^1.6.7"
react: "^18.2.0"
react-dom: "^18.2.0"
react-router-dom: "^6.22.1"
react-scripts: "5.0.1"
web-vitals: "^2.1.4"
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

#### Install Node.js (to use npm)

1. Goto https://nodejs.org/en/download and download the LTS installer as per your OS.
2. Run the installer.
3. Accept License Agreement
4. Choose Installation path.
5. Keep the default installation settings and click next.
6. Skip the optional installation window and click next and click install.
7. To check the installation, run the below commands.

```
node -v
```
Sample output: v20.11.0
```
npm -v
```
Sample output: 10.2.4

#### Install React and related libraries
```
npm install
```
Sample output: added 1552 packages, and audited 1553 packages in 43s

## Deployment

Link the GitHub/GitLab repository with [Netlify](https://app.netlify.com/).
Then, use the below site configurations:

* Base directory: `/Tutorial4/t4-aditya-app`
* Build command: `npm run build`
* Publish directory: `/Tutorial4/t4-aditya-app/build`


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://react.dev/) - The Frontend Library
* [Create React App](https://create-react-app.dev/) - Tool to generate boilerplate code and structure of a React App
* [npm](https://www.npmjs.com/) - Dependency management


## Sources Used

### t4-aditya-app\src\pages\Login.js

*Lines 14 - 17*

```
    axios
      .post("https://express-t4.onrender.com/api/login", data)
      .then((response) => navigate("/user-list"))
      .catch((error) => setErrorMessage(error.response.data.message));

```

The code above was created by adapting the code in [Axios Readme - Performing a POST request](https://github.com/axios/axios?tab=readme-ov-file#example) as shown below: 

```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
- <!---How---> The code in [Axios Readme - Performing a POST request](https://github.com/axios/axios?tab=readme-ov-file#example) was implemented by properly reading the original source and understanding the logic. Then I have modified the code as per the requirements of my tutorial task.


- <!---Why---> [Axios Readme - Performing a POST request](https://github.com/axios/axios?tab=readme-ov-file#example)'s Code was used because it provided an ideal way to use the axios library for sending requests to a REST API.

- <!---How---> [Axios Readme - Performing a POST request](https://github.com/axios/axios?tab=readme-ov-file#example)'s Code was modified by changing the request url, request data, success handling part with navigtation and error handling part with setting the errorMessage state.

### t4-aditya-app\src\pages\UserList.js

*Lines 12 - 21*

```
  axios
      .get("https://express-t4.onrender.com/api/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        setLoading(false);
      });

```

The code above was created by adapting the code in [Axios Readme - Example - GET](https://github.com/axios/axios?tab=readme-ov-file#example) as shown below: 

```
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
```
- <!---How---> The code in [Axios Readme - Example - GET](https://github.com/axios/axios?tab=readme-ov-file#example) was implemented by properly reading the original source and understanding the logic. Then I have modified the code as per the requirements of my tutorial task.


- <!---Why---> [Axios Readme - Example - GET](https://github.com/axios/axios?tab=readme-ov-file#example)'s Code was used because it provided an ideal way to use the axios library for sending requests to a REST API.

- <!---How---> [Axios Readme - Example - GET](https://github.com/axios/axios?tab=readme-ov-file#example)'s Code was modified by changing the request url, removing query params, success handling part with setting 'users' and 'loading' state and error handling part with setting the 'errorMessage' and 'loading' state. I also removed the finally part, as it was not needed in my case.



### t4-aditya-app\src\pages\UserList.js

*Lines 12 - 21*

```
    axios
      .get("https://express-t4.onrender.com/api/users/" + userId)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        setLoading(false);
      });

```

The code above was created by adapting the code in [Axios Readme - Example - GET](https://github.com/axios/axios?tab=readme-ov-file#example) as shown below: 

```
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
```
- <!---How---> The code in [Axios Readme - Example - GET](https://github.com/axios/axios?tab=readme-ov-file#example) was implemented by properly reading the original source and understanding the logic. Then I have modified the code as per the requirements of my tutorial task.


- <!---Why---> [Axios Readme - Example - GET](https://github.com/axios/axios?tab=readme-ov-file#example)'s Code was used because it provided an ideal way to use the axios library for sending requests to a REST API.

- <!---How---> [Axios Readme - Example - GET](https://github.com/axios/axios?tab=readme-ov-file#example)'s Code was modified by changing the request url, removing query params, success handling part with setting 'userData' and 'loading' state and error handling part with setting the 'errorMessage' and 'loading' state. I also removed the finally part, as it was not needed in my case.


## Acknowledgments

I would like to express my gratitude to the creators and developers of the above sources for gving lots of ideas and providing best pracicies for a specific functionality. This has really helped me to develop things efficiently. Below are the references used during my task:

[1]	“React,” React.dev. [Online]. Available: https://react.dev/. [Accessed: 17-Feb-2024].

[2]	“Node.Js — download,” Nodejs.org. [Online]. Available: https://nodejs.org/en/download. [Accessed: 17-Feb-2024].

[3]	“Create react app,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/. [Accessed: 17-Feb-2024].

[4]	“Getting started,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/docs/getting-started. [Accessed: 17-Feb-2024].

[5]	“Netlify app,” Netlify.com. [Online]. Available: https://app.netlify.com/. [Accessed: 18-Feb-2024].

