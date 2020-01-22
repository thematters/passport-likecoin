var util = require('util');
var OAuth2Strategy = require('passport-oauth2');


/**
 * `Strategy` constructor.
 *
 * The LikeCoin authentication strategy authenticates requests by delegating to
 * LikeCoin using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your LikeCoin Application ID
 *   - `clientSecret`  your LikeCoin Secret
 *   - `callbackURL`   URL to which LikeCoin will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new LikeCoinStrategy({
 *         clientID: 'Application ID',
 *         clientSecret: 'Secret'
 *         callbackURL: 'https://www.example.net/auth/likecoin/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
    options = options || {};
    options.authorizationURL = options.authorizationURL || 'https://like.co/in/oauth';
    options.tokenURL = options.tokenURL || 'https://api.like.co/oauth/access_token';

    OAuth2Strategy.call(this, options, verify);
    this.name = 'likecoin';
}


/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;