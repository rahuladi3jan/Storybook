![Statements](https://img.shields.io/badge/statements-94.75%25-brightgreen.svg?style=flat)
![Branches](https://img.shields.io/badge/branches-90.83%25-brightgreen.svg?style=flat)
![Functions](https://img.shields.io/badge/functions-97.91%25-brightgreen.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-95.26%25-brightgreen.svg?style=flat)

# Getting Started with Storybook Storybook

## Node

## use nvm.

Use node version 16.0.0 or above

## Initial Setup

Go to project and clone it. [https://github.com/rahulsingh806080/storybook](Go to Project)

After cloning

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start` for running project on local. Project will run on port 8001.

Runs the app in the development mode.\
Open [http://localhost:8001](http://localhost:8001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Branch Creation

for creating new Branch always take checkout from `main` branch
Branch name format : `task/yourName` i.e (`mudraButton/sumit` , `tooltipBugs/sumit`)

## `pre-commit hook`

Pre-commit hook will run before commit and it will check eslint errors and fix them, It will run prettier. It will test the test cases if there is any changes in .test.tsx file. It will run `npm run build` and if all these subtask will be successful then only commit will be made.
You can run `npm run test` for checking test cases.
You can check all test scenarios on sonar also using `npm run test-sonar` script.
If there are any eslint errors you can run `npm run lint:fix` and then fix errors manually.
You can run `npm run build` and check for errors in build and then can fix them manually.

After pushing create MR for `main` branch.

We have a pipeline which run for every MR. As soon as you raise MR, this pipeline will run and it will check eslint errors and if build is creating successfully. You can check this running pipeline here.

[https://gitlab.storybookfinance.com/services/frontend-engg/web/libraries/storybook-storybook/-/pipelines](Check pipeline)

MR will be merged after at least 1 approval.

When MR will be merged then again cicd pipeline will run on main branch which will publish mudrabook on npm. Now user can update mudrabook and can use new version.

After the successful completion of this pipeline. We will have to create build on jenkins.
[https://jenkins.storybookfinance.com/job/PRF-INTERNAL-ENGG-BUILDS/job/FRONTEND/job/storybook-storybook-docker-build/](Create Build)
During this job, we will update the version key in package.json.

After the successful build creation we will have run another job which will deploy mudrabook.
[https://jenkins.storybookfinance.com/job/PRF-INTERNAL-ENGG-PROD-K8S-DEPLOY/job/FRONTEND/job/prod-storybook-storybook-k8s-deploy/](Deploy Mudrabook)

If you don't have access of above jenkin jobs link, please create a ticket for devops teams.
[https://mystorybook.atlassian.net/jira/software/c/projects/PRFDEVOPSB/boards/218](Create Ticket)

After the successful run of deployment job, mudrabook will be deployed and can be accessed here. [https://storybook.storybookfinance.com/](Mudrabook)

Since we have updated the version while deploying so we will have to update that same version on our main branch.

# Storybook

### Implementation

- We have two folders
  1. Atoms
  2. Molecules
- Then we have a folder of that component we are going to build. It has mainly 6 files. For example we are developing mudra Avatar, so we will create mudraAvatar folder in atoms and then will add these files to this mudraAvatar folder.
  1. index.ts
  2. mudraAvatar.stories.tsx
  3. mudraAvatar.tsx
  4. mudraAvatar.test.tsx
  5. propTypes.ts
  6. styles.scss
- After building the component, adding styles, adding proptypes, rendering in strorybook and adding test cases. We need to export our component, component proptype interface (IMudraAvatarProps) and proptypes if we declared any in our index.ts file of mudraAvatar folder.
- Then we need to export \* from “./mudraAvatar” in index.ts file in atoms or molecules.
- So Complete structure of components is

  components

        - atoms

            — mudraAvatar

                —- index.ts (export component, props interface and propTypes (if any) )

                —- mudraAvatar.stories.tsx

                —- mudraAvatar.tsx

                —- mudraAvatar.test.tsx

                —- propTypes.ts (If required)

                —- styles.scss

            — index.ts (export all from all folders of atoms)

        - molecules

            —mudraHeader

                —- index.ts (export component, props interface and propTypes (if any) )

                —- mudraHeader.stories.tsx

                —- mudraHeader.tsx

                —- mudraHeader.test.tsx

                —- propTypes.ts (If required)

                —- styles.scss

            — index.ts (export all from all folders of molecules)

- After all this just run “npm start” and storybook will be on port 8001.
- We have one pre-commit hook which will run before you commit your code.
  - It will use prettier to make code better.
  - It will check for eslint errors and will fix those and will give error for whose which can be fixed manually only. You can check for those errors by running “npm run lint:fix”.
  - It will create a build to check if there is no error in build making.
  - After success of all three above tasks only, it will be committed.

### Contribution

- Rahul


### Consumption

- create .npmrc file in root folder and get access from team members.
- run “npm install @services/storybook-storybook” it will install the latest version of storybook.
- Then you can import atoms or molecules or icons and can start using them.

![alt text](https://cdn.pchf.in/screenshot/button.png)

#### Atoms

```tsx
import { MudraButton } from "@services/storybook-storybook/atoms/index";
import {
  MudraButtonVariant,
  MudraButtonState,
  MudraButtonSize,
  MudraButtonWidth,
  MudraButtonIconAlignment,
} from "@services/storybook-storybook/atoms/index";

const Page = () => {
  return (
    <MudraButton
      variant={MudraButtonVariant.Primary}
      size={MudraButtonSize.Small}
      width={MudraButtonWidth.Auto}
      iconAlignment={MudraButtonIconAlignment.LeftAligned}
      state={MudraButtonState.Enabled}
      label="Primary Button"
      onClick={() => {
        console.log("I'm clicked");
      }}
    />
  );
};

export default Page;
```

#### Molecules

```tsx
import { MudraAccordion } from "@services/storybook-storybook/molecules/index";

const Page = () => {
  return (
    <MudraAccordion title="Contact Details">
      <div>
        <div>
          <h1>Mobile Number</h1>
          <p>0000000000</p>
        </div>
        <div>
          <h1>Personal Email ID</h1>
          <p>abcxyz@gmail.com</p>
        </div>
      </div>
    </MudraAccordion>
  );
};

export default Page;
```

#### Icons

```tsx
import { Logout } from "@services/storybook-storybook/icons";

const Page = () => {
  return <Logout />;
};

export default Page;
```

```
- To know more about storybook consumption please go [https://storybook.storybookfinance.com/](https://storybook.storybookfinance.com/)

```
