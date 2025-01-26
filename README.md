# SWE861 Assignment Project

## Overview

This repository contains the implementation for a web application that consists of assignments in SWENG-861 Software Construction

## Features
- **Week 1:** Cloud Image Upload
- **Week 2:** Social media authentication

## Table of Contents
1. [Cloud Image Upload](#cloud-image-upload)
2. [Social Media Authentication](#social-media-authentication)


## Technologies Used
- **Backend Framework:** [Node.js](https://nodejs.org) with [Express.js](https://expressjs.com)
- **Frontend Framework:** [HeroUI v2](https://heroui.com) | [Tailwind CSS](https://tailwindcss.com/) | [Next.js](https://nextjs.org/docs/getting-started)
- **Authentication Library:** [Firebase Authentication](https://firebase.google.com/)
- **Database for user info:** [Firebase](https://firebase.google.com/)
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
  a. Sign up using google email
  b. Create a project
  c. Click "Build" and then click "Authentication"
  d. Click "Get started" button
  e. Click "Email" under "Native providers"
  f. Choose additional providers
    <sub><sup>**Note:** For the homework, I used only Google authentication. If you want to add more other social media auths, you will need a developer account from their respective domains.
    </sup></sub>
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

## GitHub Pages Instructions
1. Go to your repo's setting
2. Click on "Pages"
3. Under 'Build and deployment' change the dropdown to 'GitHub Actions'
4. (Optional) Enter custom domain.
5. Watch the build process on 'Action' tab.

## Social Media Authentication
### Steps
1. **User Initiates Login:**
    - User clicks the 'Continue with Google' button.
2. **Redirect to Social Media Authorization Page:**
    - The application redirects thte user to the social media provider's authorization page.
3. **User Grants Permission:**
    - The user logs in to their social media account and grants permission to share their profile data.
4. **Authorization Callback:**
    - The provider redirects back to the application's callback URL with an authorization code.
5. **Token Exchange:**
    - The application exchanges authorization code for an access token.
6. **User Data Retrieval:**
    - The access token is used to fetch the user's profile information from social media provider.
7. **User Session Creation:**
    - The application creates a session for the users and redirects them to the protected resources.

## License
This project is licensed under the [MIT License](LICENSE).

---

Feel free to explore the codebase and reach out if you have any questions or feedback.