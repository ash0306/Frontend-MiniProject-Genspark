# Coffee Shop Management Frontend

## Overview

The Coffee Shop Management System is a web-based frontend application designed to interact with the backend Coffee Shop Management API. This application provides separate interfaces for administrators and customers, enabling efficient management of customers, employees, products, and orders in a coffee shop setting. The frontend is built using HTML and Bootstrap CSS, with designs created in Figma.

## Table of Contents

- [Overview](#overview)
- [Design Files](#design-files)
- [Expected Features](#expected-features)
  - [Customer Features](#customer-features)
  - [Admin Features](#admin-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)

## Design Files

The design of this application was created using Figma. You can view the design files [here](https://www.figma.com/design/i1dATZL8PlfAvHDPNl1gB1/Coffee-Shop?node-id=0-1&t=VX4dqju5kP97cyUD-1).

## Expected Features

### Customer Features

- **Customer Registration**: Customers can register for a new account.
- **Customer Login**: Customers can log in to their accounts.
- **View Products**: Customers can view the list of available products(Menu).
- **Place Orders**: Customers can place orders for products.
- **View Order History**: Customers can view their past orders.

### Admin Features

- **Admin Registration**: Admins can register an account as employees.
- **Admin Login**: Admins can log in to manage the coffee shop and its employees.
- **Manage Customers**: Employees can view and update customer details.
- **Manage Employees**: Admins can view and update employee details.
- **Manage Products**: Employees can add, update, and delete products.
- **Manage Orders**: Employees can view and update order statuses.

## Technologies Used

### Base

- **HTML**
- **Bootstrap CSS**
- **JavaScript**

### Other technologies and Libraries Used

- **Bootstrap Icons**
- **Animate On Scroll**
- **Typed JS**
- **SCSS**

## Project Structure

The project is divided into two main sections: `admin` and `customer`, each with its own separate website.

```
CoffeeShopManagementFrontend/
├── admin/
│   ├── assets/
│   │   ├── images/
│   │   ├── scripts/
│   │   └── styles/
│   │       ├── css/
│   │       └── scss/
│   └── src
│       ├── index.html
│       ├── Customers.html
│       ├── Login.html
│       ├── Logout.html
│       ├── Orders.html
│       ├── Products.html
│       ├── Register.html
│       ├── Employees.html
│       ├── UpdateProduct.html
│       └── AddProduct.html
└── customer/
    ├── assets/
    │   ├── images/
    │   ├── scripts/
    │   └── styles/
    │       ├── css/
    │       └── scss/
    └── src
        ├── index.html
        ├── Cart.html
        ├── Login.html
        ├── Logout.html
        ├── Orders.html
        ├── Products.html
        ├── Register.html
        └── User.html
```

## Getting Started

### Prerequisites

- A modern web browser
- A local server (optional, for development purposes)

### Installation

1. **Clone the Repository**

   ```
   git clone https://github.com/yourusername/CoffeeShopManagementFrontend.git
   cd CoffeeShopManagementFrontend
   ```

2. **Open the Project**

Open the `index.html` files in your browser to view the application.

## Configuration

Update the API endpoint URLs in the JavaScript files to match the backend API URLs.

### Running the Application

To run the application locally, you can use a local server like http-server or Live Server in VS Code.

1. **Using http-server**

```
npm install -g http-server
http-server
```

2. **Using Live Server in VS Code**

Open the project in VS Code.
Right-click on index.html and select "Open with Live Server".
