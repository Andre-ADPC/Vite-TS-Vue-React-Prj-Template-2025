# A Jenkins Pipeline for Vue.JS Applications

## Employing Jenkins in the Project Repository

A development team should preferably have the freedom to modify the building process as they see fit via the applied CI/CD Pipeline Agents they might have access to.

When applying Jenkins as the CI/CD of choice, each Git-based Source Control Managed (SCM) project also contains one or more `Jenkinsfiles` in the **`/(root)`** folder.

Whether the Project is using a single Monolithic, a Hybrid, or a Microservice-based Architectural choice, a suitable `Jenkinsfile` should be placed in each /root-section of every **key project folder**, i.e. the "**master**" **root** folder or insidt a **rest-api**, a **gql-api**, an **spa-01**, or an **spa-02** folder, etc.

We typically setup a Jenkins project as follows:

- Install or have access to an existing Jenkins Master Server.

- Add any required Agents under the Master Server as either a Permanent or Cloud-based Agent.

- Permanent Agents are stand-alone dedicated servers with one sole purpose, running Jenkins.
- Cloud-based Agents typically fall into local or remote hostings of services like Docker, Rancher, Kubernetes, or one of the Cloud SPs' offerings from the likes of AWS, AZURE, or GCP.

- Add a Workflow to the required Agent's Job que.
- Apply a "Pipeline Script from the SCM root" using either a Declarative Pipeline or a Scripted Pipeline syntax.

Perhaps you have worked on projects before where the building process and Jenkins were part of the admin team. As frontend developers you might have had difficulties to introduce new processes and steps in the CI/CD pipeline and it possibly constrained you to apply new technologies.

Hopefully, the solutions presented here can alleviate some of those growth-pains.

## Installing Project Dependencies

In a typical CI/CD scenario the following is often the norm:

It is a common but poor practice to install dependencies in CI pipelines using the general package manager installation commands:

Using the following Package Manager Commands:

```bash
ni            # The Ni Package Manager
npm install   # The NPM Package Manager
yarn install  # The Yarn Package Manager
pnpm install  # The pNPM Package Manager
bun install   # The Bun Package Manager
```

This is actually wrong, since npm install may install a newer minor release for either your dependencies and/or sub-dependencies.

In a nutshell: This way it is possible that your build works on your developer laptop but it fails to compile in Jenkins, simply because npm install installed a minor sub-dependency that had a breaking change.

In order to avoid this issue simple use:

```bash
ni --frozen
npm ci
yarn install --frozen-lockfile # Yarn 1
yarn install --immutable       # Yarn Berry
pnpm install --frozen-lockfile
bun install --frozen-lockfile

```

and add `package-lock.json` to the project's GIT, as it will ensure that the exact package and versions listed in the file will be applied during the build.

## Auditing Dependencies

There is no need for anything else than:

```bash
ni audit
npm audit --parseable --production
yarn install  # The Yarn Package Manager
pnpm install  # The pNPM Package Manager
bun install   # The Bun Package Manager

```

This way we are sure that main dependencies have no security issues. I am not checking for any vulnerabilities in dev packages since they are not directly used and it is not possible at the moment to define a threshold to exclude minor issues.

I am also checking if packages are outdated by executing the command:

```bash
ni outdated
npm outdated || exit 0
yarn install  # The Yarn Package Manager
pnpm install  # The pNPM Package Manager
bun install   # The Bun Package Manager

```

This way the pipeline won't fail if the packages are outdated. It is also not possible here to define a threshold here.
Check linting

Eslint is my favorite option for linting and format checks, since the
integration with IDEs and console command is almost perfect!

If you are using vue-cli to setup your project, we simply need to execute in Jenkinsfile:

```bash
nr lint
npm run lint
yarn install
pnpm install
bun install

```

## Unit Testing

A unit testing approach with "**coverage**"" is another insurance mechanism for capturing bugs before rolling the application out to production.

The following packages have been used for testing:

> - @vue/cli-plugin-unit-jest
> - jest
> - jest-junit
> - example jenkins plugin
> - cypress

Simple execute the following:

```bash
ni run
npm run test:unit -- --ci --coverage
yarn install
pnpm install
bun install

```

After successfully integrating Jenkins with Jest you will get a nice overview of the test results directly into Jenkins:

[Screenshot 1](./screenshot-01.webp)

## E2E Testing

I used an end-to-end testing as a smoke test for my website. This way I am sure that the website was deployed successfully.

I chose for this case nightwatch and installed it using vue-cli:

```bash
vue add e2e-nightwatch

```

After building the application, I made the dist directory as the root directory for my web server.
Once it is successfully built, we can execute the smoke test with the following command:

```bash
no run
npm run test:e2e -- --headless --url https://www.example.com --config video=false
yarn run
pnpm run
bun run

```

**Some points there:**

A "**headless**" E2E configuration is used since this is an automated test and no interaction is required.

Depending on additional media types that might or might not require testing, optional configuration flags like **`--config video=false`** or **`--config podcast=false`** could be set as required.

### An Example `Jenkinsfile` Implementation of The Process

This is an example pipeline which could be adapted and applied to a Vue.JS project. Feel free to experiment with it!

```groovy
pipeline {
  agent any
  stages {
    stage('Check for vulnerabilities') {
      steps {
        sh 'npm audit --parseable --production'
        sh 'npm outdated || exit 0'
      }
    }

    stage('download dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Check linting') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Check unit:test') {
      steps {
        sh 'npm run test:unit -- --ci --coverage'
      }
      post {
        always {
          junit 'junit.xml'
          example exampleReportFile: 'coverage/example-coverage.xml'
        }
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Check unit:e2e') {
      steps {
        sh 'npm run test:e2e -- --headless --url https://www.example.com --config video=false || exit 0'
      }
    }
  }
}
```

---

### A Review of Applying the CI/CD Approaches Discussed

Here's what can be considered an objective analysis of the proposed practices, highlighting potential gains and pitfalls, followed by reputable references to support the insights.

---

### 1. Install Dependencies (`npm ci` vs. `npm install`)

#### Gains

- **Reproducibility**: Using `npm ci` ensures that the exact dependency versions specified in `package-lock.json` are installed, minimizing "it works on my machine" issues.
- **Speed**: `npm ci` is optimized for CI environments and skips unnecessary steps like dependency version resolution.
- **Stability**: Prevents breaking builds caused by unintended updates in dependencies or sub-dependencies.

#### Pitfalls

- **Reliance on Accurate `package-lock.json`**: The approach depends heavily on keeping `package-lock.json` accurate and up to date. Any inconsistencies between `package.json` and `package-lock.json` can lead to unexpected behavior.
- **Lack of Flexibility**: If there is a need to test newer versions of dependencies, this approach might be too restrictive.

**Recommendation**: Adopt `npm ci` for CI/CD pipelines but ensure a process for regularly updating and auditing the lock file to avoid version drift.

---

### 2. Audit Dependencies

#### Gains

- **Focus on Production Security**: Limiting `npm audit` to production dependencies avoids unnecessary noise from dev dependencies.
- **Automation**: Security issues in critical dependencies can be caught early in the pipeline, reducing risks.

#### Pitfalls

- **Limited Context on Vulnerabilities**: Without a defined threshold, critical issues might be overshadowed by minor ones, or false positives could clog the process.
- **Ignoring Dev Dependencies**: While dev dependencies aren't shipped to production, vulnerabilities in tools like linters or test frameworks could still be exploited during development.

**Recommendation**: While limiting audits to production dependencies is practical, periodically auditing all dependencies (e.g., during a monthly CI run) ensures comprehensive security hygiene.

---

### 3. Check Outdated Dependencies

#### Gains

- **Pipeline Stability**: The command `npm outdated || exit 0` prevents builds from failing unnecessarily due to outdated packages.
- **Visibility**: Developers are made aware of outdated dependencies without immediate disruption.

#### Pitfalls

- **Deferred Technical Debt**: Over time, outdated dependencies could accumulate, increasing the effort required for upgrades and risking incompatibilities.
- **No Automation for Updates**: Manual intervention is required to address outdated packages.

**Recommendation**: Combine this step with tools like [Renovate](https://renovatebot.com/) or [Dependabot](https://github.com/dependabot) to automate dependency updates while maintaining stability.

---

### 4. Linting with ESLint

#### Gains

- **Standardized Code Quality**: Consistent linting ensures adherence to coding standards across the team.
- **Integration**: ESLint integrates seamlessly with IDEs and Jenkins pipelines, enhancing the developer experience.

#### Pitfalls

- **Overhead in Large Projects**: Linting can become resource-intensive for large codebases if not optimized.
- **False Positives**: Strict linting rules may occasionally highlight issues that aren't critical, requiring manual overrides.

**Recommendation**: Regularly fine-tune ESLint configurations and rules to balance strictness and practicality, avoiding developer frustration.

---

### 5. Unit Testing and Coverage

#### Gains

- **Increased Reliability**: Running unit tests with Jest and coverage analysis ensures bugs are caught early, reducing production defects.
- **Detailed Insights**: The example plugin provides comprehensive test result visualizations within Jenkins.

#### Pitfalls

- **Flaky Tests**: Poorly written tests can lead to false negatives, reducing trust in the pipeline.
- **Performance Impact**: Extensive test suites might slow down pipelines if not parallelized or optimized.

**Recommendation**: Adopt Jest for unit testing with CI-friendly options (`--ci --coverage`) and regularly maintain test suites to ensure reliability and efficiency.

---

### Objective Opinion

The described practices demonstrate a strong, pragmatic approach to maintaining quality, security, and stability in a CI/CD pipeline. The reliance on `npm ci`, focused audits, and integrated testing aligns well with modern best practices. However, regular maintenance of `package-lock.json` and careful management of technical debt from outdated dependencies are critical for long-term success.

---

### References

1. [npm Documentation on `npm ci`](https://docs.npmjs.com/cli/v9/commands/npm-ci) - Official guidance on the benefits and use of `npm ci`.
2. [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/) - Insights into dependency auditing and managing security vulnerabilities.

I trust these insights will serve you well in your Jenkins pipeline endeavors.
