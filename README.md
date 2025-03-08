# JS Frameworks Course Assignment - React eCommerce Store

This repository contains a React eCommerce store built for the JS Frameworks course assignment. The project demonstrates a online shop with product listings, individual product pages, cart management, checkout success flow, and a contact form with validation.

## Table of Contents

- [Description](#description)
  - [Features](#features)
  - [Pages](#pages)
- [Built With](#built-with)
- [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [Contact](#contact)

## Description

This project is an eCommerce store that uses the [Noroff Online Shop API](https://v2.api.noroff.dev/online-shop) to fetch product data. The application is built using React, React Router, Zustand for state management, and Tailwind CSS for styling. It includes a lookahead search feature with a modal overlay, a persistent cart with quantity updates, and a contact form built with React Hook Form that includes validation.

### Features

- **Homepage**:
  - Lists all products as cards.
  - Lookahead search bar that filters products in real time.
  - Search results are displayed in a modal with a blurred/greyed-out background.
  - Clicking on a product card navigates to the individual product page.
- **Individual Product Page**:
  - Displays the product image, title, description, and reviews.
  - Shows the discounted price along with the original price (with a line-through) if a discount is available, plus the discount percentage.
  - Includes an "Add to Cart" button that adds the product to the cart or increases the quantity if it’s already added.
- **Cart Page**:
  - Lists all products in the cart with options to update quantity or remove products.
  - Calculates and displays the total cost.
  - Includes a Checkout button that navigates to the Checkout Success page.
- **Checkout Success Page**:
  - Displays a confirmation message for a successful checkout.
  - Clears the cart.
  - Provides a link to return to the store.
- **Contact Page**:
  - Contains a contact form with the following fields:
    - **Full name** (minimum 3 characters, required)
    - **Subject** (minimum 3 characters, required)
    - **Email** (valid email format, required)
    - **Body** (minimum 3 characters, required)
  - Uses React Hook Form for validation.
  - Logs the form data upon successful submission.
- **Search Functionality**:
  - Uses query parameters (e.g., `/search?q=shoes`) for search results.
  - Displays product image, title, and pricing details in the search results.

### Pages

- **Homepage**: Displays all products.
- **Product Page**: Shows details for an individual product.
- **Cart Page**: Displays products added to the cart with quantity controls.
- **Checkout Success Page**: Confirms a successful checkout and clears the cart.
- **Contact Page**: Contains a contact form with input validation.

## Built With

- **Frontend Framework**: React
- **Routing**: React Router DOM (v7)
- **State Management**: Zustand (with persistence)
- **Form Handling**: React Hook Form
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## Installation

1. Clone the repository:

       git clone https://github.com/Eikhaugen/js-frameworks-ca.git
       cd js-frameworks-ca

2. Install the dependencies:

       npm install

### Running the Project

Start the Vite development server:

       npm run dev

By default, the application will be available at [http://localhost:3000](http://localhost:3000).


