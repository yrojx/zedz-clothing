# ZedZ Clothing

A e-commerce web app built with React.

You can try it at http://zedz-clothing.herokuapp.com

## Technologies

- React.js (library to build UI)
- Redux.js (handle props driling)
- Styled Component (styling the components)
- Redux Thunk (handle async request)
- Firebase (Store the collections and users data and using Google Oauth for authenticate the user)

## Features

### Google Oauth

Using firebase features that can help us to conenct into Google Oauth and store the data directly into Firebase database.

### Cart

To be able create cart we need data for item that have been picked by user. The data will be consumed in Cart component also Checkout component, that's why to passing data and avoid props driling, we need state management. In this case, I use Redux for handle the cart state that contain items, so the data can be accessed in any component that need that state.
