<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->



# Tutorial 5

* *Date Created*: 10 MAR 2024
* *Last Modification Date*: 11 MAR 2024
* *Tutorial 5 GitLab URL*: <https://git.cs.dal.ca/apurohit/csci-5709-tutorials/-/tree/main/Tutorial5?ref_type=heads>
* *Tutorial 5 Live OnRender URL*: <https://csci-5709-tut5-aditya.onrender.com>


## Authors

* [Aditya Maheshbhai Purohit](aditya.purohit@dal.ca)



## Getting Started

### Prerequisites

To have a local copy of this lab up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
npm (Comes with node.js installation)body-parser: "^1.20.2"
express: "^4.18.3"
express-validator: "^7.0.1"
uuid: "^9.0.1"
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

#### Install Express and related libraries
```
npm install
```
Sample output: added 1552 packages, and audited 1553 packages in 43s

## Deployment

Link the GitHub/GitLab repository with [OnRender](https://app.netlify.com/).
Then, use the below site configurations:

* Base directory: `/Tutorial5/users-express-app`
* Build command: `yarn`
* Start Command: `node app.js`


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Node](https://nodejs.org/en) - The JS Runtime
* [Express](https://expressjs.com/) - web framework for Node.js
* [npm](https://www.npmjs.com/) - Dependency management


## Acknowledgments


[1]	“Node.Js,” Nodejs.org. [Online]. Available: https://nodejs.org/en. [Accessed: 10-Mar-2024].

[2]	“Express - Node.js web application framework,” Expressjs.com. [Online]. Available: https://expressjs.com/. [Accessed: 11-Mar-2024].

[3]	“Cloud application hosting for developers,” Render.com. [Online]. Available: https://render.com/. [Accessed: 11-Mar-2024].

[4]	“Npm: Uuid,” npm. [Online]. Available: https://www.npmjs.com/package/uuid. [Accessed: 11-Mar-2024].

[5]	“Express-validator,” Github.io. [Online]. Available: https://express-validator.github.io/docs/. [Accessed: 11-Mar-2024].

