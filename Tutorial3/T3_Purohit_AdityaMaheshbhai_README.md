<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->



# Tutorial 3

* *Date Created*: 11 FEB 2024
* *Last Modification Date*: 12 FEB 2024
* *Tutorial 3 GitLab URL*: <https://git.cs.dal.ca/apurohit/csci-5709-tutorials/-/tree/main/Tutorial3?ref_type=heads>
* *Tutorial 3 Live Netlify URL*: <https://aditya-purohit-csci-5709-web-tut3.netlify.app/>


## Authors

* [Aditya Maheshbhai Purohit](aditya.purohit@dal.ca)



## Getting Started

### Prerequisites

To have a local copy of this lab up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
npm (Comes with node.js installation)
react: "^18.2.0"
react-dom: "^18.2.0"
react-router-dom: "^6.22.0"
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

* Base directory: `/Tutorial3/t3-app`
* Build command: `npm run build`
* Publish directory: `/Tutorial3/t3-app/build`


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://react.dev/) - The Frontend Library
* [Create React App](https://create-react-app.dev/) - Tool to generate boilerplate code and structure of a React App
* [npm](https://www.npmjs.com/) - Dependency management


## Sources Used

### t3-app\src\validations.js

*Lines 13 - 24*

```
export function validateEmail(email) {
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email === "") {
    return [false, "Email should not be empty!"];
  } else if (!validEmailRegex.test(email)) {
    return [false, "Email address is not valid!"];
  } else {
    return [true, ""];
  }
}
```

The code above was created by adapting the code in [Simplilearn - Email Validation in JavaScript - email.js](https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript#articleLongDescription/article/h3) as shown below: 

```
function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    alert("Valid email address!");

    document.form1.text1.focus();

    return true;

  } else {

    alert("Invalid email address!");

    document.form1.text1.focus();

    return false;

  }

}

```
- <!---How---> The code in [Simplilearn - Email Validation in JavaScript - email.js](https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript#articleLongDescription/article/h3) was implemented by properly reading the original source and understanding the javascript logic and regex being used. Then I have modified the code as per the requirements of my tutorial task.


- <!---Why---> [Simplilearn - Email Validation in JavaScript - email.js](https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript#articleLongDescription/article/h3)'s Code was used because it provided a well tested regex for an email validation for my task. Also, it was a good starting point for me to experiement and try my own ideas on it.

- <!---How---> [Simplilearn - Email Validation in JavaScript - email.js](https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript#articleLongDescription/article/h3)'s Code was modified by returning the error message along with the true/false status. Overall, only the regex string was used.

### t3-app\src\validations.js

*Lines 26 - 38*

```
export function validatePassword(password) {
  // validate minimum length
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  if (!passwordRegex.test(password)) {
    return [
      false,
      "Password: minimum length should be 8 characters, have at least 1 upper case letter, 1 lower case letter, 1 digit and 1 special character!",
    ];
  } else {
    return [true, ""];
  }
}
```

The code above was created by adapting the code in [w3resource - Section: To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character](https://www.w3resource.com/javascript/form/password-validation.php#w3r_body/div/div/main/div/div/div-2/article/h2-5:~:text=To%20check%20a%20password%20between%208%20to%2015%20characters) as shown below: 

```
function CheckPassword(inputtxt) 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.value.match(decimal)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
} 

```
- <!---How---> The code in [w3resource - Section: To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character](https://www.w3resource.com/javascript/form/password-validation.php#w3r_body/div/div/main/div/div/div-2/article/h2-5:~:text=To%20check%20a%20password%20between%208%20to%2015%20characters) was implemented by properly reading the original source and understanding the javascript logic and regex being used. Then I have modified the code as per the requirements of my tutorial task.


- <!---Why---> [w3resource - Section: To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character](https://www.w3resource.com/javascript/form/password-validation.php#w3r_body/div/div/main/div/div/div-2/article/h2-5:~:text=To%20check%20a%20password%20between%208%20to%2015%20characters)'s Code was used because it provided a well tested regex for password validation for my task. Also, it was a good starting point for me to experiement and try my own ideas on it.

- <!---How---> [w3resource - Section: To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character](https://www.w3resource.com/javascript/form/password-validation.php#w3r_body/div/div/main/div/div/div-2/article/h2-5:~:text=To%20check%20a%20password%20between%208%20to%2015%20characters)s Code was modified by returning the error message along with the true/false status. Overall, only the regex string was used. I also removed the upper limit of 15 charcters.

## Acknowledgments

I would like to express my gratitude to the creators and developers of the above sources for gving lots of ideas and providing best pracicies for a specific functionality. This has really helped me to develop things efficiently.

[1]	“React,” React.dev. [Online]. Available: https://react.dev/. [Accessed: 11-Feb-2024].

[2]	“Node.Js — download,” Nodejs.org. [Online]. Available: https://nodejs.org/en/download. [Accessed: 11-Feb-2024].

[3]	“Create react app,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/. [Accessed: 11-Feb-2024].

[4]	“Getting started,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/docs/getting-started. [Accessed: 11-Feb-2024].

[5]	“Netlify app,” Netlify.com. [Online]. Available: https://app.netlify.com/. [Accessed: 11-Feb-2024].

