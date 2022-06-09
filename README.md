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


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ankit-v2-1/authentication-api/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.