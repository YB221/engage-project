let express = require( 'express' );
require("dotenv").config();
let html = require('html');
const url = require('url');
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;
//global.window = new JSDOM(html).window;
const sessionStorage = require('node-sessionstorage');
let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
console.log(server);
const passport = require('passport');
require('./passport-setup');
app.engine('html', require('ejs').renderFile);
app.use(express.static('views'));

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {

    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
    console.log("req");
}

// Initializes passport and passport sessions
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Example protected and unprotected routes
var room_url="";
if(process.env.PROD){
    app.get('*' , (req,res)=>{
        res.render('./home.html');
    })
}
app.get('/', (req, res) => {

    
    room_url=`${req.protocol}://${req.get("host")}${req.originalUrl}`;
    
    
    if(req.user)
    {
    res.redirect('/good');
    }
    else
    res.render('./home.html');

})

app.get('/failed', (req, res) => {
    //res.send(`FAILEDDDDDDDDDDDDDDDDDDDDXD`);
    res.render('./home.html');
})

// In this route you can see that if the user is logged in u can acess his info in: req.user
//app.get('/good', isLoggedIn, (req, res) => res.send(`Welcome mr ${req.user.displayName}!`))

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  }
);

app.get('/logout', function(req, res) {
    console.log("logged out!");
    req.logout();
    res.redirect('/');
});

let stream = require( './emit' );
let path = require( 'path' );
let favicon = require( 'serve-favicon' );

app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

app.get( '/good', ( req, res ) => {
    
    //module.exports={yourName};
    //console.log(req._json.image.url);
    console.log(req.user.photos[0].value)
    res.render( __dirname + '/index.html',{yourName:req.user.displayName,room_url:room_url});

} );


io.of( '/stream' ).on( 'connection', stream );
const port = process.env.PORT||5000;
server.listen( port );
