# v5.2.0

- Remove Plausible Analytics

# v5.1.0

- Add Plausible Analytics (https://docs.plausible.io)
- Restrict Docker in 127.0.0.1

# v5.0.2

- Add build stage in Dockerfile to prevent downtime

# v5.0.1

- Add restart:always for docker's prod build

# v5.0.0

- Add bulk import feature (located under /import)
- Add "Tirer au sort" button on top if >100 values
- Update all dependencies to latest version (incl React 17)
- Refactoring: all components are now FC (no more classes), more organized components folder

## v4.8.0

- Remove "New" button (as thought too dangerous)
- Remove max height on list of values
- Clicking on site title no longer removes everything
- Add "Remove all" button on edit screen
- Add "Redo without selected value" button

## v4.7.0

- Max draw animations dropped from 10 to 6 for faster draw times
- Long list of values now have a max height
- Browser scroll to selected value on draw

## v4.6.0

- Add E2E tests
- Add Husky (pre-commint linting check)
- Add github action for E2E tests

### v4.5.1

- Fix custom fonts that were loading incorrectly
- Upgrade dependencies
- Fix anonymous functions warnings

## v4.5.0

- Display an error message if an error is catched when loading from slug
- New slug format using JSON for futur flexibility
- Now using TypeScript with strict mode
- Fix page title for the result page
- Better looking share input for Chrome
- Bump next.js to v9.3

### v4.4.2

- Results pages are now noindex
- Fix type error

### v4.4.1

- Can now change ports thanks to new .env file

## v4.4.0

- Add docker-compose
- Differentiate docker dev & prod
- Add Copyleft reference in footer

### v4.3.3

- Fix share link

### v4.3.2

- Add tooltips (as `title=".."` properties) on form inputs to help the user

### v4.3.1 (2020-03-05)

- Fix offline cache by changing draw result route from /r?:slug to /r#:slug

## v4.3.0 (2020-03-04)

- Change draw result route from /d/:slug to /r?:slug (to make offline caching simpler)
- Scroll to top of the page when changing page
- Scroll to top of the page when starting new draw

## v4.2.0 (2020-03-03)

- Reintroduce offline fonctionnality with next-offline
- Draw result pages are now marked as `noindex` (fixes #32)
- The two names that serves as example are now male and female

## v4.1.0 (2020-02-28)

- Safer values: can now add "=>" and comas in value input
- Backward compatibility with old draws (new draws have -v2 suffix)

### v4.0.1 (2020-02-28)

- Add missing robots.txt & sitemap.txt
- Add deploy inscructions in readme

# v4.0.0 (2020-02-28)

**New features**

- Can now edit values
- On navigator native "back" action, keeps the values
- When > 10 values, don't go through all values (fixes #12)

**Complete rewrite**

- Full rewrite in TypeScript
- Use Next.js framework for server side rendering & code splitting
- Add dockerfile

# v3.0.0 (2019-09-28)

**No tracking**

- Remove API
- Upgrade dependencies
- Remove Google Analytics
- Gender neutral wording for draws
- Better readme

## v2.1.0 (2018-04-04)

- Google Analytics added

# v2.0.0 (2018-03-03)

**Improuved PWA experience:**

- App now works 100% offline: draws are made locally
- Remove Controllers/Models/Routes as they are now useless
- Remove database code as now useless
- Small updates and fixes

## v1.5.0 (2018-02-12)

- Move sensible db credential information to a seperate js file
- Fix grammar

## v1.4.0 (2017-09-28)

- Change wording
- Change meta description

### v1.3.1 (2017-09-27)

- Now able to use different port for API hosting on server and API calling from client

## v1.3.0 (2017-09-26)

- Redesign of home page
- Add bugs link in footer
- Change interal api code structure
- Add response service in api which logs all requests and errors

### v1.2.1 (2017-09-26)

- Fix example config
- Remove autoFocus on share input after draw

## v1.2.0 (2017-09-24)

- Add "add value" button
- Add more explanations

### v1.1.1 (2017-09-23)

- Fix footer floating in the middle of the page

## v1.1.0 (2017-09-23)

- Responsive design for small devices
- Fix multiple row values
- Smoother animation on validate button
- Css cleanup

### v1.0.1 (2017-09-23)

- Fix header white top margin bug
- Shorter delay before share box appearance

# v1.0.0 (2017-09-23)

- First version :)
