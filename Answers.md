1. What problem does the context API help solve?

    props drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single 
source of truth' in a redux application?

    actions send data from app to store, reducers changes data in store, and store is where data are kept in redux

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    application state is global and component state is local.  use application state when your data need to be in multiple places and use component state if your data is useful only in that component

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux thunk lets you call action creators that return a function instead of an action object

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    redux beceause i feel like it is more precise than context api, and also the fact that it separates the data from the application.