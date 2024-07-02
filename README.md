# V.A.M.: The Virtual Art Museum

## What is V.A.M?
V.A.M. is a Virtual Art Museum that acts as a hub for artists to showcase their work year-round. Artists can curate their digital galleries and explore other exhibits.

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. Open another terminal window and `cd` into the directory labeled "api."
1. Run `json-server --watch database.json --port 8088`
1. Run `npm install` and wait for all dependencies to be installed
1. Run `npm run dev` to verify that installation was successful.

### Login/Register

Upon first running the application, you will be prompted with a login screen. If you want to use an existing account, enter `jtl.art@gmail.com` into the text box and click login. This will take you to the home dashboard.

If you want to register as a new user, click the `Not a Member Yet?` button. This will take you to the Register page. Input the relevant information and create your account. After clicking register, it will automatically log you in as that user.

### Home Page

After logging in, you will be brought to the home page of V.A.M. that displays information about the virtual art museum and currrent galleries.

Regardless of the user, you will see all galleries currently available at V.A.M.

### Galleries

Clicking on the `Galleries` tab in the navbar will bring you to the Galleries page. This page will display all galleries currently available at V.A.M. : gallery name and artist, with a button to visit said gallery.

Clicking on `Visit Gallery` will direct you to the gallery itself.

### My Galleries

Clicking on the `My Galleries` tab in the navbar will bring you to the My Galleries page. This page acts as the artist's portal (dashboard). This page will display the current user's artist name, artist statement, and  galleries.

On each gallery card, there are 3 options to click on: `Visit Gallery`, `Add Art to Gallery`, and `Delete Gallery`. 

- Clicking on `Visit Gallery` will direct you to the gallery itself. 
- Clicking on `Add Art to Gallery` will pull up a form to add art to the gallery.
- Clicking on `Delete Gallery` will permanently remove an gallery from the database and it will no longer appear. 

### New Gallery

Clicking on the `New Gallery` tab in the navbar will bring you to the New Gallery page. This page will display buttons to Create a New Gallery for an Exiting Artist or a New Artist.

- Clicking on `Create Gallery for Existing Artist` will direct you to a form to create a new gallery for an existing artist. 
- Clicking on `Create Gallery for New Artist` will direct you to a form to create a new gallery for a new artist.

### Logout

Clicking on the `Logout` tab in the navbar will successfully log the current user out of the application and redirect them back to the login screen.