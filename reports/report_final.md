# Info o projekte:
- Meno a priezvisko: Vladyslav Pehushyn
- Názov projektu: Social Network "Cubegram"
- Link na repozitár: https://github.com/valdiks1/social-network-cubegram
- Link na verejnú inštanciu projektu: https://social-network-cubegram.onrender.com/

# Info o reportovanej verzii:
- Tag: final    <!-- Uviesť final_cisloSubverzie, ak ste robili vo finálnej verzii zmeny pred termínom odovzdania -->

# Info k testovaniu:     
<!-- Uveďte credentials testovacích používateľov, ak sú potrebné na otestovanie Vášho projektu. Uveďte aj akékoľvek iné relevantné informácie k testovaniu. Tieto informácie môžete alternatívne poslať aj e-mailom spolu s odovzdaním finálnej verzie (napr. ak nechcete testovacie credentials zverejňovať). -->
To test my application, you need to register. To do this, click the Log in button in the navbar, and you will see a modal window where you can click Sign up to create an account.
The main page with the timer currently works only for authorized users.
To test the timer on the main page, press and hold the spacebar for as long as you like, then release it — the timer will stop.
To stop the timer, simply press the spacebar.
You can test the user search page like this: try searching for me (by the name Vladyslav Pehushyn), or create another user and search for them. You can also find your own profile on this page.
Rooms: On the rooms page, you can create a room and then enter it. To add a user to the room, click on Add users, search for the user you want to add, and add them by clicking the plus button.

# Postup, ako rozbehať vývojové prostredie 
<!-- Postup pre lokálne rozbehanie vývojového prostredia (kto si trúfa, kľudne ako Docker file / Docker compose) -->
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
<!-- V bodoch spísať, ktoré funcionality sú už implementované, rozpracované, neimplementované vôbec -->
implemented:
- Search page(frontend+backend)
- Timer on the Main page
- Log in, Log out, Sign up
- CRUD posts(user can create new posts, edit, delete, read your own posts and read others users posts)
- On the main page, the user can see their attempts.
- Frontend for Records page, Rooms page, Room page
- Info about session(handled data from backend) on Main(Timer) page
- Backend for Rooms and Room pages
- Backend for Records page
- Records data from backend on User and MyProfile page
in progress:
Not implemented:
- Filther on Records page
- Main(Timer) page
    - Attempt graph
    - Functionality for unauthorized users
- My profile page
    - Settings for user(Editing your data and deleting your account)

# Retrospektíva:
<!-- Keby ste to robili znovu, čo by ste urobili inak? -->
<!-- Ste hrdý na výsledky svojej práce? Ktorý aspekt projektu je podľa Vás najviac kvalitný? -->
If I were to do the project again, I would manage my time differently. I consider the code structure to be the highest-quality aspect — I tried to follow a clear architecture and organize everything into folders and components.



