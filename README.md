# Engage Teams Project
A video call with chat implementation using WebRTC, Socket.io and Node.js. Deployed at https://engage-project.herokuapp.com/ test it there for best results.
## Design and Documentation
Checkout the full manual at https://github.com/YB221/engage-project/blob/main/Design.md
# Before you start
- create a Google OAuth(many yt videos available) and update credentials and call back URL in src/passport-setup.js(line 23) and add base url of your app in events.js(line 156) for example "localhost:5000" or "https://engage-project.herokuapp.com/"
- add your mail credentials in index.js for email service on line number 44 (I used a shell email that I will dispose later I recommend you to do the same)

# Getting Started
-  `git clone https://github.com/YB221/engage-project`
-  `cd engage-project`
-  Run `npm i`
- `npm start`


# Features
- Multiple-participants
- Toggling of video stream
- Toggling of audio stream (mute & unmute)
- Maximizing remote stream
- Screen sharing
- Text chat
- Mute individual participant
- Send email to other participants

# ScreenShots




| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="1604" alt="Login Page" src="https://github.com/YB221/engage-project/blob/main/img/Screenshot%20from%202021-07-13%2020-54-37.png/">  Login Page |  <img width="1604" alt="homepage" src="https://github.com/YB221/engage-project/blob/main/img/Screenshot%20from%202021-07-13%2020-55-21.png"> homepage |<img width="1604" alt="sidebar" src="https://github.com/YB221/engage-project/blob/main/img/Screenshot%20from%202021-07-13%2020-55-31.png"> Sidebar|
|<img width="1604" alt="MailInvite" src="https://github.com/YB221/engage-project/blob/main/img/Screenshot%20from%202021-07-13%2021-41-52.png"> Mail Invite |  <img width="1604" alt="screen Share" src="https://github.com/YB221/engage-project/blob/main/img/Screenshot%20from%202021-07-13%2022-13-52.png">Screen Share|<img width="1604" alt="Invite Confirmation" src="https://github.com/YB221/engage-project/blob/main/img/Screenshot%20from%202021-07-13%2021-42-26.png"> Invite Confirmation|
|<img width="1604" alt="Multi-user" src="https://github.com/YB221/engage-project/blob/main/img/Screenshot%20from%202021-07-13%2021-43-27.png"> Multi-User Call |  <img width="1604" alt="single user chat" src="https://github.com/YB221/engage-project/blob/main/img/Screenshot%20from%202021-07-13%2021-42-55.png"> Single User call|<img width="1604" alt="Chat Box" src="https://github.com/YB221/engage-project/blob/main/img/Screenshot%20from%202021-07-13%2021-43-53.png"> Chat Box|


 



