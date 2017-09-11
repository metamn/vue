# Vue.js

### Basics

- new components can be added / removed via the router in `router/index.js`
- or imported inside an already added parent component

> For example, you can put each component in its own directory, with its static assets right next to it.
- http://vuejs-templates.github.io/webpack/static.html





## Server side pre-rendering

- used these instructions and all went fine: http://vuejs-templates.github.io/webpack/prerender.html
- the html looks pretty ok: http://imgur.com/a/79daL
- when pre-rendering commented out after a new build the `app` container was empty as expected: `... </head><body><div id=app></div><script type=text/javascript ...`


## Dev console

- after installing Vue Dev Tools I'm able to interact with the app data: http://imgur.com/a/6jgkh


## Page Speed

- 78/100: https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fmetamn.io%2Ftest1%2F
- 71/100 for metamn.io


## Deploying

- after and `npm run build` and copying to http://metamn.io/test1/ the CSS was not loaded
- that's because the CSS link was `href="/static/css/app.ce027eb1c4fdfea5bce4f5e466a381dd.css"`
- changing to `href="http://metamn.io/test1/static/css/app.ce027eb1c4fdfea5bce4f5e466a381dd.css"` did the trick
- the change has to be done in `config/index.js` http://vuejs-templates.github.io/webpack/backend.html
- the change was: `assetsPublicPath: '/test1/',`
