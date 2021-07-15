# Design and Workflow

## Abstract
This project was made as a part of MS-engage program 2021. The project aims to use WebRTC to provide a peer to peer chat and video conferencing service. it is deployed at https://engage-project.herokuapp.com/
## Timeline
$sprints has been executed as following:
https://dev.azure.com/basyambhu/basyambhu
## Scrum Sprints
- Sprint 1
  - Adding Auth
  - Basic Landing Page
- Sprint 2
  - Exploring different services and methods for video call
  - Setting up Local Controls
  - Group Video Call
- Sprint 3
  - Screen share feature
  - Remote user controls
  - UI/UX refreshment
- Sprint 4
  - Email Invite feature
  - Chat Feature
  - Documentation and Video
  
## Design
### Overview
This is a web app deployed on https://engage-project.herokuapp.com/. Build using open-source resources including WebRTC and socket.io as its key ingredients.
#### Features
- Authentication
  - signin using using Google OAuth2.0
  - a single account can be used multiple times if you want to utilize multiple cameras
- Video chat rooms
  - you can create an instant meet room by providing room tile.
  - You can share invitation link or enter room by chat invitation link 
  - you can toggle your vido and audio on and off
  - you can toggle remote audio off of all participants separately for you only if you want to focus on a specific group of people
- Screen Share
  - In any chat room any participant can share either
    - their whole screen
    - any specific app window
    - any specific browser tab
  - You can expand any user's video stream to focus on them it is very useful when you want to focus on someone sharing their screens
- Chat Feature
  - An in meet chat to share text and links
  - Automatically detects links in texts adn makes them hyperlinks for easy access
  - notification blinker and sound whenever a new chat is received
- Send Invite by Email
  - Just enter email address of your partner on top bar and send 
  - The reciver gets the direct link to the meet
### Dependencies and Services
  - Authentication
    - OAuth2.0
    - Google Passport.js
  - Video Call and Chat
    - WebRTC
    - Socket.io
  - Relay and connections
    - Xyrsis TURN-STUN servers
  - UI and skeleton
    - React.JS
    - Bootstrap
## Manual
  - Pre-Landing page is a simple login screen that redirects you to google authentication page. A google account is necessary to use the web app.
  - Upon login the landing page welcomes you with your name(fetched from google) and a textbox asking you to enter title of meeting.
  - As soon as you click Enter Meeting the page reloads adn you enter the meeting.
  - inside meeting you have several componenets as follows:
    - you have the a shareable link on top that you can copy using the accompanying button. 
    - on bottom left you can see camera's stream 
    - you can observe the bottom dock now have 6 icons namely switch side dash, toggle video,toggle mic, end call ,share screen and toggle chat window.
    - toggle video and mic switches your remote stream on and off, if the icon is colorful they are on else off
    - end call disconnects you from other peers and send you to landing page
    - share screen gives you a browser pop up which gives you option to share a tab, a window or whole screen activity as your video stream.
    - when you click toggle chat option a chat pane is opened on your right
  - When a user goes to the shared link for a meeting they are asked for authentication and then they enter the meeting with all the above functionality.
  - whenever a chat is sent all the users get a notification sound and chat icon gets a red dot until opened
  - you can hover over remote video and get remote controls including muting that specific stream or expanding it to full screen
  - you can log out anytime using the button on bottom left.

## Chain of Commands
In this section we will get a rough idea of what commands gets triggered and where on specific actions:
  - on loading google passport in app.js is called and it redirecrs to google callback upon successful authentication we are redirected to index.js here usermane is stored in session storage.
  - upon clicking create room a link is generated using UUID and stored in session storage and page is reloaded
  - As you can see in rtc.js if upon loading both url and username are present in session storage we show meet screen instead of landing page
  - Now both audio track and video stram is captured and a new websocket is created to the server audo and video are set in session description of RTC and a new RTCPeerConnection is made
  - the set SDP is relayed through Xyrsis TURN servers and ICEcandidate is made to wait until other party finds a way through firewalls and connections.
  - upon successful connection remote stream is received adn added as a video tag 
  - whenever call is disconnected or browser is closed or internet connection gets distorted the TURN server waits for 5000ms until it sends a close req to RTCPeerConnection.
  - for chat the message is emited to all the connected over Websocket since its a TCP service while RTC is UDP so our text won't get lost.

## Resources Used
  - https://webrtc.org/getting-started/peer-connections
  - https://www.npmjs.com/package/uuid
  - https://socket.io/docs/v4
  - https://xirsys.com/
  - https://www.youtube.com/watch?v=DvlyzDZDEq4&t=893s
 
