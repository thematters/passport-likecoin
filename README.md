# passport-likecoin

[Passport](http://passportjs.org/) strategy for authenticating with [LikeCoin](http://like.co/) using the OAuth 2.0 API.

---

## Install

```bash
$ npm install @matters/passport-likecoin
```

## Usage

#### Configure Strategy

The LikeCoin authentication strategy authenticates users using a LikeCoin
account and OAuth 2.0 tokens.  The app ID and secret obtained when creating an
application are supplied as options when creating the strategy.  The strategy
also requires a `verify` callback, which receives the access token and optional
refresh token, as well as `profile` which contains the authenticated user's
LikeCoin profile.  The `verify` callback must call `cb` providing a user to
complete authentication.

```js
passport.use(new LikeCoinStrategy({
    clientID: LIKECOIN_CLIENT_ID,
    clientSecret: LIKECOIN_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/likecoin/callback"
  },
  function(accessToken, refreshToken, params, profile, cb) {c
    const likerId = params.user;

    User.findOrCreate({ likerId }, function (err, user) {
      return cb(err, user);
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'likecoin'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```js
app.get('/auth/likecoin',
  passport.authenticate('likecoin'));

app.get('/auth/likecoin/callback',
  passport.authenticate('likecoin', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

## License

[The MIT License](./LICENSE)