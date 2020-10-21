## About this project

Boilerplate project on GraphQL + Relay

## REST-ful Routing

Given a collection of records on a server, there should be a uniform URL and HTTP request method used to utilize that collection of records.

**Cons:**

- Highly related/relational data;
  ![image](https://user-images.githubusercontent.com/16644017/96094877-db664600-0f08-11eb-94b3-162a5de16883.png)

- Over server of data;

## GraphQL

Looks to fix inconsistencies with REST-ful rounting.  
![image](https://user-images.githubusercontent.com/16644017/96095878-2e8cc880-0f0a-11eb-9a2d-7c267ba06618.png)

Architecture w/ NodeJS
![image](https://user-images.githubusercontent.com/16644017/96361470-dd2a4680-1160-11eb-9215-b8a70875f886.png)

## GraphQL Schema

![image](https://user-images.githubusercontent.com/16644017/96361586-07c8cf00-1162-11eb-812b-5950ee8e041d.png)

## Setup steps

**1. Install Packages**

```
npm install -S express express-graphql graphql lodash
```

**2. Setup Schemas**
**3. Setup MOCK or production-based API**

```
npm i -S json-server
```

```
// package.json
"scripts": {
  "json:server": "json-server --watch db.json"
}
```

![image](https://user-images.githubusercontent.com/16644017/96366627-a6b1f300-1183-11eb-8a4b-e531bd4f32d0.png)

**4. Setup axios**

```
npm i -S axios
```

**5. Relate a `Company` to a particular `User`**

![image](https://user-images.githubusercontent.com/16644017/96365728-9dbe2300-117d-11eb-82cb-076b3519f4c9.png)

The `resolve` function purpose is to populate the company property in the User type!  
In other words, each edge of our graph can be represented by a `resolve` function.
![image](https://user-images.githubusercontent.com/16644017/96366138-a19f7480-1180-11eb-8158-d3158d5477b3.png)

The current setup makes our search to start from our User node.
![image](https://user-images.githubusercontent.com/16644017/96366285-b29cb580-1181-11eb-89de-541e6334e7d7.png)

**6. Multiple RootQuery entry points**  
Right now, we don't have the capability to fetch data without starting from the User node. We can only access the `Company` through the `User`.  
By setting up Multiple RootQuery, we can allow our query to start from the `Company`  
_i.e.: http://localhost:3000/companies/2/users_

![image](https://user-images.githubusercontent.com/16644017/96366571-52a70e80-1183-11eb-9442-a76bc989bea2.png)

Solving the `circular reference (i.e.: User -> Company && Company -> User)`. Turn the fields attribute into a function. With the way `closures` work in JavaScript, the fields property does NOT get executed until after the entire file gets executed.

![image](https://user-images.githubusercontent.com/16644017/96366773-d8778980-1184-11eb-9f8b-14cbfeffd46a.png)

**7. Front End GraphQL Clients**

![image](https://user-images.githubusercontent.com/16644017/96393462-25e20e00-11fa-11eb-9a9a-41d4fa244c44.png)

![image](https://user-images.githubusercontent.com/16644017/96393396-efa48e80-11f9-11eb-9168-bd0a3d81c50d.png)

- **Lokka** (Simplest. Some extra features such as Caching compared to GraphiQL).

- **Apollo Client (i.e.: Apollo Stack).** Used in place of the Express-GraphQL back-end. The downside is that is made by the Meteor team who aren't experienced in building application for the GraphQL world, nor that are especially focused on using them. **[Best choice thus far for small-mid range application]**

- **Relay.** Most difficult. Used by the Facebook team. Extra ordinarily complicated. Implementing mutations is a factor of 10 more complicated to do it. Most performant for Mobile, but it is overkill for Startup companies who needs simples application or prototypes.

## GraphQL Express VS Apollo Server

![image](https://user-images.githubusercontent.com/16644017/96393830-46f72e80-11fb-11eb-8621-b32e7f3088b8.png)

**GraphQL Express** is considered to be more stable and less prone to changes. Its syntax is considered to be Reference GraphQL because is closer to the raw implementation also used by the Facebook team.  

**Apollo Server** 


## Author

**Giwoo G Lee**  
App Development

**Reference to:**  
Stephen Grider course on Udemy about GraphQL
