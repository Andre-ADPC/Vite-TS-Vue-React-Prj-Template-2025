# Package Management Guide

## Overview

This document serves as a comprehensive guide for managing dependencies in this project using multiple package managers, including PNPM, NI, NPM, YARN, and Composer (for PHP Backend frameworks). It includes best practices, configuration steps, and CI/CD integration strategies using Jenkins. The guide is mainly tailored for this public project, offering flexibility to contributors with different preferences while maintaining secure and efficient dependency management. However, the same principles can be applied to any other project as well.

---

## Supported Package Managers

### PNPM (Preferred for This Project)

**Why PNPM?**

- **Efficient Dependency Management:** Faster installations and lower disk usage due to symlinked dependencies.
- **Strict Compatibility:** Prevents installing incorrect dependency versions.
- **Ideal for Monorepos:** Built-in support for managing multiple packages.

**Installation**

```bash
npm install -g pnpm
```

**Basic Commands**

- `pnpm install`: Installs dependencies.
- `pnpm add <package>`: Adds a new dependency.
- `pnpm update`: Updates all dependencies.
- `pnpm remove <package>`: Removes a dependency.

**Configuration**

1. **Convert Project:**
   ```bash
   pnpm install
   ```
2. **Lockfile Management:** Ensure the `pnpm-lock.yaml` file is committed to version control for consistent installations.
3. **Loose Node Modules Layout (if needed):**
   Add the following to `.npmrc` if compatibility issues arise:
   ```
   shamefully-hoist=true
   ```

**Pros:**

- Superior performance and space efficiency.
- Enhanced dependency consistency.
- Great for scalable, large projects.

**Cons:**

- Minor learning curve for new users.
- Compatibility issues with some legacy packages.

---

### NI

**Why NI?**

- **Flexible Multi-Manager Workflow:** Simplifies switching between package managers (NPM, PNPM, YARN).
- **Streamlined Commands:** Unified syntax for package management.

**Installation**

```bash
npm install -g @antfu/ni
```

**Basic Commands**

- `ni`: Install dependencies (auto-detects the package manager).
- `nr <script>`: Runs package scripts.
- `ni -g <package>`: Installs a global package.
- `nu`: Updates all dependencies.

**Pros:**

- Simplifies collaboration in multi-manager environments.
- Reduces cognitive load for contributors.

**Cons:**

- Adds an abstraction layer that may confuse users unfamiliar with NI.

---

### NPM

**Why NPM?**

- **Widespread Adoption:** Familiarity across teams.
- **Robust Ecosystem:** Supported by almost all Node.js projects.

**Basic Commands**

- `npm install`: Installs dependencies.
- `npm add <package>`: Adds a new dependency.
- `npm update`: Updates dependencies.

**Pros:**

- Ubiquitous and widely supported.
- Stable and reliable.

**Cons:**

- Slower compared to PNPM.
- Larger disk usage for dependency installations.

---

### YARN

**Why YARN?**

- **Faster Installs:** Parallelized dependency installation.
- **Deterministic Lockfiles:** Ensures consistent installs.

**Basic Commands**

- `yarn install`: Installs dependencies.
- `yarn add <package>`: Adds a new dependency.
- `yarn upgrade`: Updates dependencies.

**Pros:**

- Speed improvements over NPM in some cases.
- Compatible with most NPM packages.

**Cons:**

- Heavier memory usage during installations.
- Overhead of managing an additional tool.

---

### Composer (For PHP Backend)

**Why Composer?**

- **Specialized for PHP:** Manages PHP libraries and dependencies effectively.
- **Used by Bedrock:** Composer is integral for managing WordPress dependencies in a Bedrock setup.

**Basic Commands**

- `composer install`: Installs dependencies.
- `composer require <package>`: Adds a dependency.
- `composer update`: Updates dependencies.

**Pros:**

- Tailored for PHP development.
- Integrates seamlessly with CI/CD pipelines.

**Cons:**

- Limited to PHP projects.
- Requires additional setup for non-PHP developers.

---

## CI/CD Integration with Jenkins

### Jenkins Setup for Dependency Management

1. **Install PNPM on Jenkins Nodes**

   ```bash
   npm install -g pnpm
   ```

2. **Jenkins Pipeline Configuration**
   Use the following pipeline script to manage dependencies:

   ```groovy
   pipeline {
       agent any
       stages {
           stage('Install Dependencies') {
               steps {
                   script {
                       // Install PNPM
                       sh 'npm install -g pnpm'

                       // Install project dependencies
                       sh 'pnpm install'
                   }
               }
           }
           stage('Build') {
               steps {
                   sh 'pnpm run build'
               }
           }
       }
   }
   ```

3. **Webhook Integration**

   - Trigger Jenkins builds with a GitHub webhook.
   - Configure `post-receive` hooks to validate dependencies via PNPM.

4. **Monitoring Dependency Health**
   - Use Jenkins plugins (e.g., Dependency-Check) to monitor for vulnerabilities.
   - Notify the team via Slack or email when issues arise.

---

## Summary Tables

### Package Managers Comparison

| Feature                    | PNPM    | NI       | NPM         | YARN        | Composer |
| -------------------------- | ------- | -------- | ----------- | ----------- | -------- |
| **Speed**                  | High    | Moderate | Moderate    | High        | Moderate |
| **Disk Efficiency**        | High    | Moderate | Low         | Moderate    | Moderate |
| **Strict Dependency Mgmt** | High    | Moderate | Low         | Moderate    | High     |
| **Ecosystem**              | Growing | Niche    | Widely Used | Widely Used | PHP-Only |

### Jenkins Integration Overview

| Task                    | Tool/Step                                | Notes                                         |
| ----------------------- | ---------------------------------------- | --------------------------------------------- |
| Install Dependencies    | PNPM / Composer                          | Add installation steps in Jenkins pipeline.   |
| Monitor Vulnerabilities | Dependency-Check Plugin / Custom Scripts | Alerts for outdated or insecure dependencies. |
| Trigger Builds          | GitHub Webhook                           | Automates CI/CD workflow.                     |
| Build Artifacts         | PNPM / Composer                          | Ensures consistency with lockfiles.           |

---

## Final Notes

By adopting PNPM as the primary package manager and leveraging NI for flexibility, your project will benefit from robust and efficient dependency management. Integrating Jenkins further ensures automation, scalability, and reliability. This setup, combined with a clear package management policy, supports long-term maintainability and fosters collaboration within the developer community.
