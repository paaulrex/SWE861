# Software Construction course Assignment

## Overview

This repository contains the implementation of features for a web application for my graduate-level course.

## Features
<!-- - **Week 1:** Cloud Image Upload -->
- **Week 2:** Social media authentication

## Table of Contents
<!-- 1. [Cloud Image Upload](#cloud-image-upload) -->
1. [Social Media Authentication](#social-media-authentication)
    - [Technologies Used](#technologies-used)
    - [Setup Instruction](#setup-instruction)
    - [Setting Up GitHub Pages](#setting-up-github-pages)
    - [Social Media Authentication](#social-media-authentication)
    - [Account Disconnection Instructions](#account-disconnection-instructions)


## Technologies Used
- **Backend Framework:** [Node.js](https://nodejs.org)
- **Frontend Framework:** [HeroUI v2](https://heroui.com) | [Tailwind CSS](https://tailwindcss.com/) | [Next.js](https://nextjs.org/docs/getting-started)
- **Authentication Library:** [Firebase Authentication](https://firebase.google.com/)
- **Database for user info:** [Firebase LocalStorageDB](https://firebase.google.com/)
- **Environment Management:** [GitHub Pages](https://github.com)

## Setup Instruction
1. **Clone the repo:**
  ```bash
  git clone https://github.com/paaulrex/SWE861.git
  cd SWE861
  ```
2. **Install dependencies:**
  ```bash
  npm install heroui-cli
  npm install
  ```
3. **Set up Firebase Authentication**
    1. Sign up using google email
    2. Create a project
    3. Click `Build` and then click `Authentication`
    4. Click `Get Started` button, which will then take you to `Sign-in method` tab.
    5. Select `Email` under `Native Providers` and `Google` under `Additional providers`
    6. *(Optional)* Select more additional providers: (For this example, we will use GitHub)
        1. Select `GitHub` under `Additional providers`
        2. Click `Enable` button and copy the callback URL
        3. Go to your GitHub `Settings`
        4. Select `Developer Settings`
        5. Create an `OAuth App` and fill out all the information, make sure you **paste** the callback URL in there.
        6. Add `http://localhost/` and add your domain or GitHub pages link on there, separate them with a `,`
        7. Retrieve the `Client ID` and `Client Secret` then input it into your Firebase GitHub provider
        8. Click `Save`

4. **Set up environment variables:**
  Create a `.env.local` file and define the required environment variables:
  <small>**Note:** Feel free to change name as needed, but as for HEROUI Library or NEXTJS, I needed to input "NEXT_PUBLIC_(YOUR_CHOSEN_VAR_NAME)" for my authentication login to work.</small>
  ```bash
  NEXT_PUBLIC_FBASE_API_KEY=<YOUR.API.KEY>
  NEXT_PUBLIC_FBASE_AUTH_DOMAIN=<YOUR.AUTH.DOMAIN>
  NEXT_PUBLIC_FBASE_PRID=<YOUR.PROJECT.ID>
  NEXT_PUBLIC_FBASE_STB=<YOUR.STORAGE.BUCKET>
  NEXT_PUBLIC_FBASE_MSG_ID=<YOUR.MESSAGE.ID>
  NEXT_PUBLIC_FBASE_APP_ID=<YOUR.APP.ID>
  ```
5. **Start the application locally (localhost:3000):**
  ```bash
  npm run dev
  ```

## Setting up GitHub Pages
1. Go to your repository's `setting`
2. Click on `Pages`
3. Under `Build and deployment` change the dropdown to `GitHub Actions`
4. *(Optional) Enter custom domain.*

## Social Media Authentication
### Steps
1. **User Initiates Login:**
    - User clicks the 'Continue with Google' button.
![The Login that shows 'Continue with Google' button](/readme%20pics/3.png)
2. **Redirect to Social Media Authorization Page:**
    - The application redirects thte user to the social media provider's authorization page.
![Picture that shows redirection](/readme%20pics/1.png)
3. **User Grants Permission:**
    - The user logs in to their social media account and grants permission to share their profile data.
![Picture showing user granting permission to use their social media account](/readme%20pics/2.png)
4. **Authorization Callback:**
    - The provider redirects back to the application's callback URL with an authorization code.
5. **Token Exchange:**
    - The application exchanges authorization code for an access token.
6. **User Data Retrieval:**
    - The access token is used to fetch the user's profile information from social media provider.
7. **User Session Creation:**
    - The application creates a session for the users and redirects them to the protected resources.
![Redirects/changes view of the page to show user credentials](/readme%20pics/4.png)

>**Note:** Your information does get stored in Indexed DB, firebaseLocalStorage. Your email gets stored in **my** firebase authentication, and I check them and delete those accounts/emails daily (if there are any). Please disconnect your account from my project, if you do connect it. Since there is no reason for you to be connected to my project other than for testing purposes.


## Account Disconnection Instructions
#### Disconnect Google Account from this project
1. Go to your `Google Account`
2. Go to `Security` tab
3. Scroll down to see `Your connections to third-party apps & services` block and click `See all connections`.
4. Click `project-sweng861-wk2hw`
5. Click `Delete all connections you have with project-sweng861-wk2hw`
6. Click `Confirm`
7. Boom! You're disconnected from the project!

#### Disconnect GitHub account from this project
1. Go to your Github `Settings`.
2. Click `Applications` under `Integrations`.
3. Select & Click `Authorized OAuth Apps`.
4. Locate `project-sweng861-wk2hw`.
5. Click `...` then click `Revoke`.
6. Click `I understand, revoke access` button.
7. Boom! You're disconnected from the project!
<small>**Note:** Once you've revoked access, my OAuth App users will be back to 1 (which is just my acccount).
Alternatively, you can wait until I revoke access.</small>

## License
This project is licensed under the [MIT License](LICENSE).

***

Feel free to explore the codebase and reach out if you have any questions or feedback.