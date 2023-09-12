
# Learning React Tool Kit Query (RTK Query)

RTK Query Overview​ RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.

##RTK Query primarily consists of two APIs:

**createApi(): **
The core of RTK Query's functionality. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.
**fetchBaseQuery(): **
A small wrapper around fetch that aims to simplify requests. Intended as the recommended baseQuery to be used in createApi for the majority of users.


###

The Redux Toolkit core APIs do not change any of the basic data flow in a Redux app You're still dispatching actions and writing reducers, just with less code than writing all of that logic by hand. RTK Query is the same way. It's an additional level of abstraction, but internally it's still doing the exact same steps we've already seen for managing async requests and their responses.

However, when you use RTK Query, there is a mindset shift that happens. We're no longer thinking about "managing state" per se. Instead, we now think about "managing cached data". Rather than trying to write reducers ourselves, we're now going to focus on defining "where is this data coming from?", "how should this update be sent?", "when should this cached data be re-fetched?", and "how should the cached data be updated?". How that data gets fetched, stored, and retrieved becomes implementation details we no longer have to worry about.

We'll see how this mindset shift applies as we continue

####refer
https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics#:~:text=RTK%20Query%20Overview%E2%80%8B,data%20fetching%20%26%20caching%20logic%20yourself.




