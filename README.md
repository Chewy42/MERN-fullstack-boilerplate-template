# Full Stack React Project Boilerplate
# Free of use to use, modify and distribute, no credit to me required, but much appreciated.
# by @Chewy42 || Matthew Favela B.S. in Data Science at Chapman University, Orange, CA

# STEP 1
## In a terminal window, navigate to the root directory of the project and run the following command: `npm install`
## Preinstalled packages
- React
- React Router DOM (routing between pages)
- Material UI
- Tailwindcss (rapid css styling)
- Hero Icons 
- Axios (api requests)
- Concurrently (to run front-and-back end at the same time)

# STEP 2
## Backend is in the backend folder
## In a terminal window, navigate to the backend directory of the project and run the following command: `npm install`

# STEP 3
## In a terminal window, navigate to the root directory of the project and run the following command: 

### `npm start` -- starts frontend
### `npm run start:backend` -- starts backend
### `npm run start:both` -- starts both frontend and backend 

# What to expect / extra info

## "src" folder
- All of the frontend's main files are in the "src" folder.
- There are two sub-folders "Components" and "Contexts"
- Any and all components you create, organize them in components with the 
first letter of the file being a capitol letter: "Homepage.jsx" or "Navbar.jsx"
- If you're wondering why we use .jsx instead of .js, .jsx is tailored for working with React
- All routing will be done through the App.jsx
* To incorporate a Private or Public route, it should look like this: 
```<Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />```
