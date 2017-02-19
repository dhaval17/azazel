![Azazel](https://raw.githubusercontent.com/dhaval17/azazel/assets/title.png)
#
![Azazel](https://raw.githubusercontent.com/dhaval17/azazel/assets/logo.png)

#### Why ?
To log the headers and libraries used in webpage for future reference

#### How ?
Here' how you can get this thingy rolling

##### Server

1. `npm install`
2. `node app.js`

Also you need MongoDB, Feel free to edit code for other DBs

##### Extension

Note : The Extensions are tweaked version of Wapplyzer

###### Firefox

Temporary Way :

1. Edit `extension/firefox/data/js/panel.js` Line 23
2. Load the driver.js in `about:debugging`

Semi - Permanent way

1. Edit `extension/firefox/data/js/panel.js` Line 23
2. Now zip the contents of the folder
3. Sign the extension at `https://addons.mozilla.org/en-US/developers/addon/submit/distribution`
4. Install the `.xpi`

###### Chrome

1. Edit `extension/chrome/js/driver.js` Line 195
2. `chrome://extensions/`
3. "Load Unpacked Extension"
4. Choose `chrome` folder

#### Contributions
- Pull Requests will be appreciated
- Creating Issues works too
