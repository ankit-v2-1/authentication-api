## Running the app locally

1. Sign up for an account on Planetscale and create user table.

    ```
    CREATE TABLE `users` (
    `name` varchar(255)NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255),
    UNIQUE(email)
    );
    ```

2. Once you've created your database you can then copy `.env.example` to `.env` and update the file's environment variables with your database credentials.

   ```bash
   $ cp .env.example .env
   ```

3. install dependencies and run locally

    ```
    $ yarn install
    $ yarn start

    Navigate to http://localhost:3000.
    ```