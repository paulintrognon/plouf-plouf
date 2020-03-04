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
