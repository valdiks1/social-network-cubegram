# Info o projekte:
- Meno a priezvisko: Vladyslav Pehushyn
- Názov projektu: Social Network "Cubegram"
- Link na repozitár: https://github.com/valdiks1/social-network-cubegram 
- Link na verejnú inštanciu projektu: https://social-network-cubegram.onrender.com/

# Info o reportovanej verzii:
- Tag: beta  

# Info k testovaniu:
To test my application, you need to register. To do this, click the Log in button in the navbar, and you will see a modal window where you can click Sign up to create an account.
The main page with the timer currently works only for authorized users.
You can test the user search page like this: try searching for me (by the name Vladyslav Pehushyn), or create another user and search for them. You can also find your own profile on this page.
To test the frontend of the room page, you can click any button on the rooms page.

# Postup, ako rozbehať vývojové prostredie 
First, you need to have a Node.js server installed.
In both the frontend and backend folders, run the command npm install.
Next, install PostgreSQL and create a database using the schema located at backend/migrations/schema.sql.
You also need to configure the .env file.

In the .env file, you should set the following variables:
DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT, STATUS, SESSION_SECRET.

Make sure that the STATUS variable is not set to production.

The .env file should be placed in the backend folder.

Now you can run the command npm run dev in both the frontend and backend folders.

# Stav implementácie:
implemented:
- Search page(frontend+backend)
- Timer on the Main page
- Log in, Log out, Sign up
- CRUD posts(user can create new posts, edit, delete, read your own posts and read others users posts)
- On the main page, the user can see their attempts.
- Frontend for Records page, Rooms page, Room page
in progress:
- Main(Timer) page
    - Attempt graph
    - Info about session(handled data from backend)
    - Functionality for unauthorized users
- My profile page
    - Settings for user(Editing your data and deleting your account)
    - Records data from backend
- User page
    - Records data from backend
Not implemented:
- Backend for Rooms and Room pages
- Backend for Records page
- Filther on Records page


# Časový plán:
week 10:
- Info about session(handled data from backend)
- Functionality for unauthorized users
- Records data from backend on Users page and MyProfile page
- Create room functionality
- Read rooms
- Add users to rooms
- Attempt graph on Main page
week 11:
- Records Page with data from backend
- Filther on Records page
- Edit room
- Delete room
- Rooms attempts data from backend 

# Problémy:
- There were no problems.


