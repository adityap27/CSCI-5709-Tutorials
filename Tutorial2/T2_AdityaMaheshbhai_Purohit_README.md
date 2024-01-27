<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->



# Tutorial 2

* *Date Created*: 26 JAN 2024
* *Last Modification Date*: 27 JAN 2024

### Personal Task URLs
* *Tutorial 2 GitLab URL*: <https://git.cs.dal.ca/apurohit/csci-5709-tutorials/-/tree/main/Tutorial2?ref_type=heads>
* *Tutorial 2 Live Netlify URL*: <https://aditya-purohit-csci-5709-web-tut2.netlify.app/>

--------------------

* *Assignments GitLab Repository URL*: <https://git.cs.dal.ca/apurohit/csci-5709-assignments>
* *Tutorials GitLab Repository URL*: <https://git.cs.dal.ca/apurohit/csci-5709-tutorials>

### Group Task URLs
* *Project GitLab Repository URL*: <https://git.cs.dal.ca/ketulp/csci-5709-grp-09>
    #### Individual Branch URLs
* *Aditya Maheshbhai Purohit (Me)*: <https://git.cs.dal.ca/ketulp/csci-5709-grp-09/-/tree/aditya_purohit?ref_type=heads>
* *Ketul Patel*: <https://git.cs.dal.ca/ketulp/csci-5709-grp-09/-/tree/ketul_patel?ref_type=heads>
* *Mann Patel*: <https://git.cs.dal.ca/ketulp/csci-5709-grp-09/-/tree/mann_patel?ref_type=heads>
* *Shubham Vijaykumar Patel*: <https://git.cs.dal.ca/ketulp/csci-5709-grp-09/-/tree/shubham_patel?ref_type=heads>
* *Jay Navinbhai Rana*: <https://git.cs.dal.ca/ketulp/csci-5709-grp-09/-/tree/jay_rana?ref_type=heads>
* *Neel Piyushkumar Patel*: <https://git.cs.dal.ca/ketulp/csci-5709-grp-09/-/tree/neel_patel?ref_type=heads>






## Authors

* [Aditya Maheshbhai Purohit](aditya.purohit@dal.ca)



## Getting Started

### Prerequisites

To have a local copy of this lab up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
npm (Comes with node.js installation)
react: "^18.2.0"
react-dom: "^18.2.0"
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

* Base directory: `/Tutorial2/t2-app-aditya`
* Build command: `npm run build`
* Publish directory: `/Tutorial2/t2-app-aditya/build`


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://react.dev/) - The Frontend Library
* [Create React App](https://create-react-app.dev/) - Tool to generate boilerplate code and structure of a React App
* [npm](https://www.npmjs.com/) - Dependency management


## Sources Used

I have used [Create React App](https://create-react-app.dev/), to create a boilerplate react app structure.


### t2-app-aditya\src\App.js

*Lines 09 - 17*

```
        <p>
          It Works!
        </p>
        <p>
          CSCI 5709 - Advanced Topics in Web Development - Tutorial 2
        </p>
        <p>
          Aditya Maheshbhai Purohit, B00952865
        </p>

```

The code above was created by the create react app tool [Create-React-App](https://create-react-app.dev/docs/getting-started#quick-start) as shown below: 

```
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </header>

```
- The code in [Create-React-App](https://create-react-app.dev/docs/getting-started#quick-start) was implemented by Facebook.
- [Create-React-App](https://create-react-app.dev/docs/getting-started#quick-start)'s generated code was used because it is helpful to create a basic boilerplate React App and it is created by Facebook itself.
- [Create-React-App](https://create-react-app.dev/docs/getting-started#quick-start) 's generated code was modified by me, by editing the display message to inside the `<p>` tags to personalize it as per tutorial requirements.

## Acknowledgments

[1]	“React,” React.dev. [Online]. Available: https://react.dev/. [Accessed: 26-Jan-2024].

[2]	“Node.Js — download,” Nodejs.org. [Online]. Available: https://nodejs.org/en/download. [Accessed: 26-Jan-2024].

[3]	“Create react app,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/. [Accessed: 26-Jan-2024].

[4]	“Getting started,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/docs/getting-started. [Accessed: 26-Jan-2024].

[5]	“Netlify app,” Netlify.com. [Online]. Available: https://app.netlify.com/. [Accessed: 26-Jan-2024].

