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