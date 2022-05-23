# Shopify Takehome Project

The goal of this project is to create a full stack web app to to track the inventory of a logistics company. The app has basic CRUD fuctionality, with two basic models for the product (Gis) and warehouse.

The frontend is build with react, using react hooks to manage state.

On the backend, there is a server running on Express, with Postgres running the relational DB and sequelize as the ORM tool.

## Backend Routes

Both the warehouse and gi routes have POST, PUT, GET and DELETE routes. They are on the /server/api folder.


## DB Schema

The database consists of two models, Gi and Warehouse. A warehouse can have many Gis and a Gi belongs to a Warehouse.


## Setup

If running locally:

Clone the project folder
run 'npm i' on the project folder to install dependencies
run 'createdb shopifydb' to create the database
run 'npm run seed' to seed the database
run 'npm start' to launch the server on port 3000'

If running on replit:
