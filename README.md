# nextjs-starter-dimension
A Next.js starter based on the Dimension site template, designed by HTML5 UP. Credit goes to Hunter Chang's repo [here](https://github.com/codebushi/nextjs-starter-dimension). Check out https://codebushi.com/nextjs-website-starters/ for more Next.js starters and templates.

## Preview

[Here](https://nextjs-dimension-template-d1l06d0fi-karkir0003.vercel.app/)

## Getting Started

To get started, simply fork the repo, clone the repository, and run `npm install`

```
# Fork and Clone the repo
1. After forking the repo, click the green "Code" button
2. Under the "Clone" subsection, copy the HTTPs URL (for this repo, the url is https://github.com/karkir0003/nextjs-dimension-template.git, but that URL will defer a slight bit for your fork)
3. git clone <https URL>

# Move into the new directory
cd nextjs-dimension-template/

# Install npm packages
npm install

# Start up the next.js dev server, browse to http://localhost:3000/
npm run dev
```

## Generating the Static Site

```
# Build and export the site, the static files are generated in the out/ folder
npm run export
```

## CI/CD
Continuous Integration (CI) and Continuous Deployment (CD) is a very important best practice during development. This repo comes with some Github Actions under the `.github/workflows` directory for running some build checks and deploying to Vercel as a preview or production deploy. Note that **production deploy** only happens when changes are pushed to the `main` branch, but **preview deploy** happens on pull requests to `main` or pushes to dev branches other than `main`.

### How to setup Vercel
1. Create an account in Vercel
2. Create a Vercel project
3. Add the required Vercel Secrets in GitHub through the following ([source](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel#configuring-github-actions-for-vercel)):

   a. `VERCEL_TOKEN`: Get the Vercel Token through [these instructions](https://vercel.com/guides/how-do-i-use-a-vercel-api-access-token). Make sure to copy this token into Github Secrets as per this [doc](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository)

   b. Install [Vercel CLI](https://vercel.com/cli) and run `vercel login`

   c. `cd nextjs-dimension-template` and run `vercel link`. Note that `.vercel` folder created from `vercel link` is in the `.gitignore`. You should see a file called `project.json` under `.vercel/` folder. **NOTE: You should link to the existing project you created in Vercel console when running `vercel link`**

   d. Populate the `VERCEL_PROJECT_ID` secret in GitHub using the `projectId` field from `.vercel/project.json`
   
   e. Populate the `VERCEL_ORG_ID` secret in GitHub using the `orgId` field from `.vercel/project.json`
4. Check the deploy for your project to see if the template is visible
5. **OPTIONAL:** If you want to set a custom domain, follow these [docs](https://vercel.com/docs/projects/domains/add-a-domain)