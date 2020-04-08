# OurFitnessPal

## App setup

### Environment variables
We use the [dotenv](https://github.com/bkeepers/dotenv) gem for handling our environment variables in the test and development environments.

You simply create a file called .env in the root directory and add your environment variables.
Generate the .env file using this command - `echo "DEVISE_JWT_SECRET_KEY=$(bin/rake secret)" >> .env`
This will generate the file and a devise jwt secret key.


## Testing

### Cypress:
1. Start your rails server in test mode - `bin/rails server -e test -p 5002` you can view this at http://localhost:5002
2. Start up the cypress server with - `yarn cypress open --project ./spec`
3. If this is your first time using cypress it will then install it for you
4. Cypress will then open, allowing you to run the tests
5. The docs can be found [here](https://github.com/shakacode/cypress-on-rails)