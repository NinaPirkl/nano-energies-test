# Nanoenergies tester candidate

## Prerequisites

* Docker Desktop

## Creating test environment

1) Run either `run.sh` or `run.bat` based on your operating system and your preference.
   run.sh is for Unix-like shell, which you can easily find on Windows as well (GitBash, cygwin, WSL, etc.).
   Both will install two docker images, `testapi:v1` and `testui:v1`, and execute `docker-compose up`.
2) After which API should be available at http://localhost:8084 and UI at http://localhost:8085.
3) If any of the ports are already occupied by something else (unlikely),
   then modify first number in property `- ports` within docker-compose.yml file.

API and UI services / containers are independent, unrelated, and each is meant for different part of the test.

## Test duration

It is up to you (as candidate) how much time do you want to devote to implementation of the test suites.
You can choose fixed amount of time (for example 2 hours) and do what you can in that time, or spent as much time
as you want until you deem the test suites are good enough.

We will always be comparing scope and quality of the test suites in respect of how much time it took.
Also, there will be a discussion at the end, so there you will have a chance to explain your choices.

## 1) API tests

Verify the API behaves according to its Open API specification, which can be found at http://localhost:8084/oas.

Authentication is required for few methods, so there you can use:

```json
{ "login": "tester", "pswd": "123" }
```

or

```json
{ "login": "admin", "pswd": "pa88w0rd" }
```

## 2) UI tests

### Login to frontend web application

The angular frontend application uses public API available on https://reqres.in.

Login details are:<br/>
**Username:** eve.holt@reqres.in<br/>
**Password:** cityslicka

### Test scenarios

1) Create UI test for successfully login to the web application and logout from application.
2) Check that after login the authorization token QpwL5tke4Pnpja7X4 is successfully stored in browser local storage.
3) Check that user list is successfully loaded and paging is functional together with possibility to change number of users per page.
4) Check that URL on user list contains number of current page and number of users per page and these two routing parameters
   are changing correctly when you navigate between user list pages.
   URL pattern for paging should be: /users/list/{number-of-page}/{number-of-users-per-page}
5) Check that each user card on user list contains avatar, full name, email and See details link which navigate to the user detail page.
6) Check that user detail page contains big user photo with size 400x400px, full name, email, and short description under the user photo.
7) Check that web application behave correctly when you change user id directly in browser URL bar
   to non-existing user id (for example id = 80). Correct behavior in this case would be re-direct to 404 page.
8) Check that web application redirect to 404 page when you navigate to non-existing URL, for example http://localhost:8085/test.