> :warning: **Support Android Only**: unfortunately my mac is dead so i can't handle IOS.

> :heavy_check_mark: App is completely **responsive** and adapts well to all viewports.

## Get Started
To get started you can run the app in development

```
git clone https://github.com/abdallaemadeldin/chatapp.git
cd chatapp
yarn
yarn start
yarn android
```

## File Structure

```
chatapp
├─ src
│  ├─ components
│  ├─ hooks
│  │  ├─ chat.hook.js
│  │  └─ login.hook.js
│  ├─ lib
│  │  └─ windowStack.js
   └─ screens
      ├─ Chat
      │  ├─ Chat.js
      │  └─ styles.js
      └─ Login
         ├─ Login.js
         └─ styles.js
         
```
## Build IOS
In case you want to build this project on IOS you need to do some steps.
```
  1- Link `react-native-vector-icons` manually on xcode.
  2- cd ios && pod install
  3- cd .. && yarn start
  4- yarn ios
```
