To begin with, you need a cloudinary and formspree.io account, gatsby and node.js, and of course a program where you can edit code, I'd recommend Visual Studio Code.

1. Clone the project

First you need to clone the project from github.

2. Running npm-install on front and backend

When the project is cloned you need to fire up 2 terminals, one for the frontend (portfolio_aliev1) and one for the backend map (portfolio_backend).

After that you need to run npm install on both of the directories. 
```shell
    # Copy this into command prompt
     npm install
```

3. Add your own cloudinary key

Open the backend folder, go to the settings.json file which is located in portfolio_backend/extensions/upload/config/settings.json, here you should fill in your own information from cloudinary. After you've done this go to the package.json file and remove strapi-provider-upload-cloudinary": "^3.0.0", you will have to download it after you've done an npm install.

4. Installing cloudinary

```shell
   npm i strapi-provider-upload-cloudinary@3.0.0
```

5. Running the backend in strapi

Now after everything is installed, we should be redirected to the strapi admin menu in localhost:1337 by typing the following command:

```shell
  npm run develop
```

Strapi should start and now you can start creating your account with your details. You can add jobs, projects and blogs. When you're done adding information you can press ctrl c in the backend terminal. Then type npm run develop in the backend again, this is done to update strapi.

6. Running the frontend

Now you can go to the frontend terminal and type the following command. Make sure the backend is running when you do this otherwise it won't work.

```shell
  gatsby develop
```

Once it starts without any errors, you can check the page on your browser at localhost:8000.