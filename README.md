## Description:
![OPIRREN full logo black white bkg](https://user-images.githubusercontent.com/109186471/204033658-61c786aa-6f84-4ee5-9b5d-82cc0496822f.png)


- **_Origin:_** Operation Iranian Renaissance (OpIrRen), is a creation of the Atheist Republic Persian community.
- Our community sought to directly respond to the needs and pleas for help from our members living inside Iran amidst the current uprising and violent  crackdown, by translating guides on how to protest safely, treat gunshot wounds, treat tear gas, etc. 
- However, we can not release these materials under the name of our current organization because atheism is punishable by death in Iran, so we must remove that affiliation from these manuals, hence launching under a new name. 
- **_Visit the deployed site [here](https://opirren.fly.dev/)._** 

## Design:
- Fully responsive
- Prototyped in Figma
- Implemented with MDBootstrap and Emotion
- Development of User stories
- Snapshot of some design vision-boarding: 
<img width="444" alt="Screen Shot 2022-11-25 at 4 39 00 PM" src="https://user-images.githubusercontent.com/109186471/204032352-1dad02b2-31a6-4ed1-bed6-cf4d81742d3b.png">

## Functionalities:
- Multilingual, full English & Persian translation
- Right-to-Left direction switching to service Persian language
- Dynamic routing for the selected language
- Collapsible header navigation bar
- Each page is fully responsive for mobile devices
- Easily downloadable PDFs and pre-made social media posts for simple distribution of PDFs
- Stripe integration for donations
- User authorization with session tokens
- A restricted page for administrators 

## Technologies: 
- Figma
- Node.js
- PostgreSQL
- DrawSQL
- Ley
- React
- Next.js
- Next-i18next, for internalization
- i18nexus for management of string translations and structure of locale json files
- i18nexus-cli for working with i18nexus API
- Typescript
- REST API
- MDBootstrap
- Emotion
- Stripe
- Docker
- Fly.io

## Screenshots: 
### Landing Page: English & Persian
![Landing page bilingual](https://user-images.githubusercontent.com/109186471/204032707-e55718c6-8081-486b-b488-c3dbd0dbe8c1.png)

### Mission Page: English & Persian
![Mission page bilingual](https://user-images.githubusercontent.com/109186471/204032741-cd190f87-6a42-4c62-9c2e-0f67970176d6.png)

### Preview of Collapisble Menu & Mobile device view (featuring Projects page in English and Donation page in Persian) 
![Mobile devices](https://user-images.githubusercontent.com/109186471/204032770-5af91536-58f1-40ee-afe3-5c2e6eaf145d.png)

### Registration page:
![sign in page](https://user-images.githubusercontent.com/109186471/204032818-bbe99f15-4ed2-4308-a29a-de5bf78fe6f6.png)

### Login page:
![login page](https://user-images.githubusercontent.com/109186471/204032837-4ecd30f5-bacc-46f2-9606-17d9cc84bf97.png)

### Restricted Admin page: 
![admin page (1)](https://user-images.githubusercontent.com/109186471/204032917-ad53c63d-0fe6-4b6f-8185-4cef8e06ae2b.png)


## Project Management:
- Managing an international team of 7
- Creating workflow for translation team onboarding
- Working with community to create scope and vision of think-tank
- Navigating challenging and sensitive security concerns
- Research and compiling documents to be translated
- Creation of visual language, logo, and visual assets 

## Instructions for Setup:

- Use `git clone <repository>` to duplicate the repository
- Install PostgreSQL and set up database
- Create a database and a user
- Make a new `.env` file
- `.env-example` should be used to copy the environment variables into `.env`
- If you want to create new translations and namespaces create a free account on [i18nexus](https://i18nexus.com/)
- Once you are done creating translated strings & namespaces in i18nexus go to the 'Export' tab and copy the project API key into the desinated spot in `.env`
- If you are using different languages besides Persian you must change the language code from `'fa'` to the relevant language code in the following files: `/components/navigation.js` & `next-i18next.config.js`
    - Note that the Navigation bar will still implement right-to-left direction switching for any replacement language
- For the rest of the PostgreSQL database, replace the xxxx placeholders with your username, password, and database name
- `yarn install`
- `yarn migrate up`
- Run `yarn dev` to launch the server
- Currently, the scripts in `package.json` are written to only pull from the i18nexus API when running `yarn dev`
- When new .json files are pulled in from i18nexus, the "common" namespace will be in a raw format that will mess up the naming conventions of the Navigation bar. To fix this, go into `/public/locales/en/common.json` and  `/public/locales/fa/common.json` and wrap everything inside in curly braces and give it the namespace identifier `"common":` like so: 
```
{
  "common": {
    "translation_key": "value",
    "translation_key2": "value2",
    "translation_key3": "value3",
  }
}
```

## Deploy on Fly.io
- Generate a Fly.io Token, called GitHub Actions Deploy Token and copy the text
- Make a new repository secret  called FLY API TOKEN
- Using the command line, sign in to Fly.io via `flyctl auth login`
- Make a flyctl app `flyctl apps create —name <app name>`
- Make the Fly.io configuration files
- Add database login information with Fly.io secrets `flyctl secrets set PGHOST=localhost PGDATABASE=$(openssl rand -hex 16) PGUSERNAME=upleveled$(openssl rand -hex 16) PGPASSWORD=$(openssl rand -base64 32)`
- Add built-time environment variables to the fly.toml and dockerfile configuration files, more information here: https://fly.io/docs/languages-and-frameworks/nextjs/#what-about-build-time-environment-variables 
- For the PostgreSQL database, create a 1GB volume with `flyctl volumes create postgres --size 1 --region fra'
- Launch!: `flyctl deploy`
