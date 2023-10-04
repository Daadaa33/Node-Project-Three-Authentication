# Node Project Three - Authentication

[abdidakir qulle](https://github.com/Daadaa33)

In this project, you will build API for a bookstore and use Prisma with Supabase.

In this project, you will be building a backend application for a bookstore. They want us to create for them a way to add books in their database and manage the information of their bookstore. The books will have authors.

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository (Not Gabi's by mistake!).
* [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
* [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [ ] Push commits: git push origin `<firstName-lastName>`.


### Minimum Viable Product

#### Setup

After cloning, Run `npm install`

 Your prisma has already some schema, you will need to change the `datasource db` inside your `prisma.schema` file to:

 ```
 datasource db {
  provider          = "postgresql"
  url               = env("DATABASE_URL")
}
 ```

You will need to go ahead and create your model for `owner`

Make sure your models and fields follow this instruction:

1. bookstore - fields: id, ownerId, name, location, created, updated
2. author - fields: id, name, created, updated.
3. book - fields: id, authorId, bookstoreId, title, price, image, created, updated.
4. owner - fields: id, name, email, password, created, updated

You will also need to copy the code from your last project to complete this project.

#### Add authentication

In the `owner` file, add sign-up and login endpoints. The sign-up endpoint should create account for the owner and create a hashed password with `bcrypt` and store the information in the `Supabase` database.

The login endpoint should generate a token you can for the frontend and to authenticate the current user. Use `JSON Web Tokens` or `JWT`.

#### Add Middleware

In the `middleware` folder, add a method to check if the user is authenticated. Use this method to check if user is logged in when making changes to the bookstore.

#### Use Supabase database

Instead of using SQLite database, change to Supabase by following this instruction:

1. Sign up at supabase.com
2. Create new project
3. Inside the project you created, go to `Settings` and then click `Databases`
4. Under `Connection string`, switch to `url` and copy the link.
5. Create `.env` file in your project's root directory if you already don't have it.
6. Add `DATABASE_URL='the url you copied'` in the .env file.
7. Inside `prisma` folder, you will have `prisma.schema` file, change the `datasource` to

 ```
 datasource db {
  provider          = "postgresql"
  url               = env("DATABASE_URL")
}
 ```


#### Delete what you don't need.

Delete files such as the `SQLite` database, migrations and other files you don't need before pushing.

### Stretch Goals

- Add a validation library such as `Zod` to validate the schema before adding anything to the database.
- Create roles where the owner can add, update, delete everything but other users can only add or edit.