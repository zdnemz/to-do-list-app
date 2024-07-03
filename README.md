# To-Do List APP

Welcome to the To-Do List APP repository! This project is a powerful and efficient backend service for managing to-do lists. Built with modern technologies like TypeScript, Bun, Hono, and MongoDB, this APP is designed to be fast, reliable, and easy to use.

## Overview

The To-Do List APP is a RESTful service that allows users to create, read, update, and delete (CRUD) their to-do items. It is built with a focus on performance and scalability, leveraging the power of Bun for fast runtime and MongoDB for robust data storage. TypeScript ensures type safety and better developer experience, while Hono provides a minimalistic yet powerful framework for routing and middleware.

### Tech Stack

- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability.
- **Bun**: A modern JavaScript runtime that is incredibly fast and includes a built-in package manager, task runner, and bundler.
- **Hono**: A fast, minimalistic web framework for building APPs, inspired by Express.
- **MongoDB**: A NoSQL database known for its flexibility and scalability, perfect for storing to-do items.

## Features

- **Create To-Do Items**: Add new tasks to your to-do list.
- **Read To-Do Items**: Retrieve the list of tasks, with options to filter and sort.
- **Update To-Do Items**: Modify the details of existing tasks.
- **Delete To-Do Items**: Remove tasks that are no longer needed.
- **User Authentication**: Secure endpoints with user authentication.

## Installation

Follow these steps to set up the project locally.

### Prerequisites

- Bun
- MongoDB

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/zdnemz/to-do-list-app.git
    cd to-do-list-app
    ```

2. Install dependencies:
    ```sh
    bun install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```sh
    bun start
    ```

The server will start on `http://localhost:3000`.

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or feedback, feel free to reach out to us at

[![GitHub - zdnemz](https://img.shields.io/badge/zdnemz-%23121011.svg?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/zdnemz)
[![LinkedIn - zdnemz](https://img.shields.io/badge/zdnemz-%230077B5.svg?style=flat-square&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/zdnemz/)
[![Twitter - zdanemz](https://img.shields.io/badge/zdnemz-%231DA1F2.svg?style=flat-square&logo=Twitter&logoColor=white)](https://twitter.com/zdanemz)
[![Instagram - zdnemz](https://img.shields.io/badge/zdnmez-%23E4405F.svg?style=flat-square&logo=Instagram&logoColor=white)](https://instagram.com/zdnemz)

---

Thank you for using the To-Do List APP! We hope it helps you manage your tasks efficiently and effectively.