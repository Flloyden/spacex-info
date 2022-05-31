# SpaceX Info
Projektgrupp 8 består av gruppmedlemmarna Adam Lloyd, Kin Lok Lee och Pontus Nordström. De har tillsammans i kursen Flerplattformsapplikationer för webbtekniker använt sig av JavaScripts biblioteket React. Detta för att skapat en webbapplikation baserat på det externa webb API:et [SpaceX-API](https://github.com/r-spacex/SpaceX-API). 

Webbapplikationen har som främsta syfte att ge användaren information om olika raketers uppskjutningar, både uppkommande och genomförda sådana. I sin tur kan användaren få ytterligare bakgrundsinformation om varje uppskjutning och raket. 

## Ramverk & motivering
Projektgruppen har valt JavaScripts biblioteket React främst för att det är väletablerat inom många företag - det är många företag som använder sig av detta bibliotek. I till exempel många jobbannonser finns React som ett krav för att kunna få söka till jobbet. Det är med andra ord klokt att välja detta bibliotek att bekanta sig med för att göra sig redo för framtida uppdrag och jobb.

### Andra ramverk
Ramverket Angular är också etablerat inom många företag, men har valts bort därför att det upplevs som svårare att lära sig för många, i jämförelse med React. I och med projektets begränsade tid (på cirka två veckor) menar projektgruppen att tiden inte skulle räckt till - att både lära sig ramverket och i sin tur applicera det. Exempel på svårigheter med ramverket är hanteringen och uppsättningen av beroenden mellan komponenter. Dessutom, att det använder sig av TypeScript som det primära programmeringsspråket. Detta, vilket projektgruppen inte är bekant med sen tidigare, och som därför kan vara en ytterligare bidragande svårighet i att använda ramverket [1].

Ramverket Svelte har valts bort därför att det är ett mycket mindre nätverk (community), i jämförelse med React. Att välja ett bibliotek som React med större popularitet och fler användare har sina fördelar i att lättare kunna hitta referensmaterial och resurser [2]. I till exempel Stack Overflow finns enbart ett tusentals diskussioner i kategorien Svelte. Detta i jämförelse med React som har mer än 250 000 diskussioner. Det betyder att det är svårare att få hjälp med ett problem som utvecklare.

## API
Det API som används inom projektet är [SpaceX-API](https://github.com/r-spacex/SpaceX-API). Detta API gör det möjligt att hämta information om t.ex. både kommande och avklarade uppsjutningar, raketinformation och mycket mer. 

## Spara data
För att göra applikationen lite mer interaktiv kan man lägga till uppskjutningar i en egen lista för att kunna ha bättre koll på de uppskjutningar man tycker verkar intressant. Om man vill kan man senare ta bort en uppskjutning från sin lista.

## Boostrap
För designa applikationen och göra den responsiv har bootstrap används.

## Referenser
[1] ”8 Reasons You Shouldn’t Invest in Development with Angular and Why”, Stay on top with the latest tech trends, 25 november 2020. https://2muchcoffee.com/blog/8-reasons-you-shouldnt-invest-in-development-with-angular-and-why/
(åtkomstdatum 24 maj 2022).

[2] ”Why people aren’t switching to Svelte yet”, LogRocket Blog, 16 november 2020. https://blog.logrocket.com/why-people-arent-switching-to-svelte-yet/
(åtkomstdatum 24 maj 2022).













# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
