## Requirements

In order to run this project, first you need to make sure that you have the following requirements installed on your computer:

- php (version 7.2.19 was used)
- MySQL (version 5.7.24 was used)
- node.js (v10.16.3 (LTS) was used)
- composer (version 1.9.0 was used)

## How to install

First, clone this repository.

Second, open the project directory and run the following command in a terminal (git bash was used on Windows):

```
cp .env.example .env
```
this will make a copy of the .env file where you will need to add information for the database and the project.

Third, run the following commands to install node and laravel dependencies:

> For node

```
npm install
```
> For laravel

```
composer install
```

Next, run this additional command to generate an encryption key that is required for your .env file.

```
php artisan key:generate
```

At this point, if no errors have been occured upon running the above commands, all the dependencies should be installed.

The last step is to create a database and add some initial data for testing the API.

First create a database with a name of your choosing and open the .env file to include the name of the DB, the username and the password (if any) in the fields:

- DB_DATABASE= (any name)
- DB_USERNAME= (username, default is root)
- DB_PASSWORD= (leave empty if not given any)

Next, start the database (e.g. within XAMPP, Laragon if on Windows) and run the following command to make the database migrations and install the tables for the project on the database:

```
php artisan migrate
```
If no errors have been occured you should see something similar to the following on your terminal:

```
Migration table created successfully.
Migrating: 2014_10_12_000000_create_users_table
Migrated:  2014_10_12_000000_create_users_table (0.08 seconds)
Migrating: 2014_10_12_100000_create_password_resets_table
Migrated:  2014_10_12_100000_create_password_resets_table (0.13 seconds)
Migrating: 2019_08_19_000000_create_failed_jobs_table
Migrated:  2019_08_19_000000_create_failed_jobs_table (0.08 seconds)
Migrating: 2019_10_09_194933_create_forms_table
Migrated:  2019_10_09_194933_create_forms_table (0.08 seconds)
```

Next, within a database management program (like phpmyadmin for example), find the database you have created and add some initial data in the **Forms** table.

Lastly, open two separated terminal windows in the project folder and run the following commands:

> Window 1 - Running node for live rendering of changes.

```
npm run watch
```

> Window 2 - Running laravel internal server.

```
php artisan serve
```

The second command will provide you with a localhost address where you can see the project live on your browser.

