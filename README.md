<h1 align="center">Journal</h1> 

## 🛠️ Installation

### Step 1: Install dependencies
  Note: is nodemon installed? I had to run `yarn global add nodemon`

- Go to the **root directory** of the project:
   ```shell
   cd vitejs-stack-mern-quickstart
   ```
  - Install global dependencies of the project:

     ```shell
     # With Yarn:
     yarn
     ```

- Go to the **client** directory:
   ```shell
   cd client
   ```
   - Install client-side dependencies:

     ```shell
     # With Yarn:
     yarn
     ```

- Go to the **server** directory:
     ```shell
   cd ../server
   ```
   - Install server-side dependencies:
    
     ```shell
     # With Yarn:
     yarn
     ```

### Step 3: Configure the server part
> **Note**
>
>If you don't want to connect your database immediately, you can skip to [💻 Usage](#-usage)

9. Create a file named .env in `/server/.env` and register MongoDB API key:
    
   ```env
   ATLAS_URI=mongodb+srv://<username>:<password>@<cluster>/?retryWrites=true&w=majority
   ```
   > **Warning**
   > 
   > **If no database is connected to the server part, an error message will be displayed in the console when starting the project**

## 💻 Usage

 ### Start the development server:

- Go to the root of the project.
> **Note**
>
> This is the global directory where you have the client and server folders.

- In this directory, run the command:
```shell
# With NPM:
npm run dev
# With Yarn:
yarn run dev
```
> **Warning**
>
> If you only want to use the client part:
>
> ```shell
> # With NPM:
> npm run dev-client
> # With Yarn:
> yarn run dev-client
> ```


## 🔩 List of Dependencies

### Development Dependencies:

- **vite**: Fast development tool for modern web applications. Provides high development performance with its fast compilation and on-demand module loading.

- **typescript**: Superset of JavaScript with static typing features. Allows detecting potential errors early in the development phase.

- **sass**: Sass compiler to transform Sass files into CSS in your project.

- **eslint**, **eslint-plugin-react-hooks**, and **eslint-plugin-react-refresh**: ESLint and associated plugins for detecting errors in React code, with additional rules for React hooks and hot reloading.

### Frontend Dependencies:

- **bootstrap**: CSS framework for creating responsive and mobile web interfaces.

- **react** and **react-dom**: Core libraries for building responsive user interfaces. React is a JavaScript framework for creating reusable components, and React DOM facilitates rendering React components in the browser.

- **react-router-dom**: Library for managing routes in a React application. Allows creating multi-page applications and navigating between different views.

### Backend Dependencies:

- **cors**: Enables resource sharing between origins. Facilitates communication between frontend and backend by accepting cross-origin requests.

- **dotenv**: Loads environment variables from a .env file into the `process.env`. Allows separating configuration files from code and securely storing sensitive information.

- **express**: Web framework for Node.js. Facilitates handling routes, HTTP requests, and middlewares.

- **mongodb**: MongoDB database driver for connecting to the MongoDB database and working with data.

- **mongoose**: Modeling library for MongoDB in Node.js. Facilitates schema creation for your data and provides methods to interact with the MongoDB database.

> **Note**
> 
> You can find more information about these dependencies in the project's documentation or their respective websites.



## 🔑 License

[MIT](LICENSE).

## 💡 Contribution

I am open to community contributions! If you want to contribute to this project, feel free to create a Pull Request to propose your changes. I appreciate all contributions and will do my best to review them as soon as possible. Thank you for contributing to this project!

## 💖 Support the project

If you find this project helpful or appreciate the work I've done, you can support me by buying me a coffee ☕️ via Ko-fi. Your support encourages me to continue improving and developing this project for the community.

[![Buy us a coffee](https://img.shields.io/badge/Support%20us%20on-Ko--fi-FF5E5B?style=flat-square&logo=kofi&logoColor=white)](https://ko-fi.com/toxdev)


