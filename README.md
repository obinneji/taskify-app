# Taskify: Task manager app
With basic react knowledge I stumbled on the [Appwrite](https://cloud.appwrite.io/) [hashnode](https://hashnode.com) hackathon, So I decided to jump on it and use this platform to develop my skills. I built a task manager app with can perform CRUD functionality and also add authentication to the app so only users can access the app features. The app has a simple UI and it's very functional.

## Team Details

This is a solo project

* Obinneji Chibuzor (Obinneji Chibuzor Francis )
    

## Description of Project

Taskify is a task management app designed to help individuals stay organized, prioritize tasks, and boost productivity. The app provides a user-friendly interface and powerful features to manage tasks efficiently. With Taskify, users can create tasks, edit tasks and delete tasks. Taskify also provides a productivity tips section for users to be motivated and keep pushing on their tasks. For this version, only the test user is allowed to create, read, update, and delete tasks in the app.


## Tech Stack

* Vite + React
    
* tailwindcss
    
* Appwrite Cloud
    
    * Authentication
        
    * Database
        
* Vercel
    

I utilized the following Appwrite services to build the project:

1. Authentication: Appwrite's authentication service was crucial for implementing secure user registration and login functionalities. It allowed me to manage user accounts securely and only authorized users have access to the app's main features.
    
2. Database: Appwrite's database service provided the foundation for storing and retrieving task-related data. I utilized the database to store task details, including title, description, and date.
    

## Challenges Faced

During the development process, I encountered a few challenges that I overcame successfully:

1. Designing the UI: As a developer that was familiar with building already designed websites creating a UI design was a challenge. Started looking out for inspiration from the Figma community, Behance, and dribble. The most effective was the Figma community. Using the tailwindcss framework came with a little challenge as this project was a way to learn and understand the framework, thanks to [tailwindcss documentation](https://tailwindcss.com/docs/installation)
    
2. User authentication: Implementing efficient User authentication and persisting the login was a challenge. The Appwrite documentation was useful although it requires a lot of studying in other to understand.
    
3. Deployment: Deploying the app came with its own challenges. Experienced a tough time passing the environment variables in the app to deployed app on Vercel, thanks to [vercel docs](https://vercel.com/docs) the solution came through. Cors error also occurred as I initially integrated my app with localhost on the appwrite console. On deployment the new domain could not access the server, thanks to my friend [Osaretin Frank](https://hashnode.com/@Osas2211) for giving me the solution as I solved it by changing the integration from localhost to "\*". An error was noticed after deployment as on refresh it will display a 404 error to solve this is to create a vercel.json file in the root directory of my app. In that file write this code.
    

```plaintext
{
    "routes": [{ "src": "/[^.]+", "dest": "/", "status": 200 }]
  }
```

## Public Code Repo

[Github Repo](https://github.com/obinneji/taskify-app)

## Demo Link

[Demo link](https://taskify-webapp.vercel.app)

[Demo video](https://youtu.be/vieGEq8jZHg)

## Conclusion

I want to appreciate appwrite and hashnode for this opportunity provided to developers to build products and also get rewarded.

#Appwrite #AppwriteHackathon

