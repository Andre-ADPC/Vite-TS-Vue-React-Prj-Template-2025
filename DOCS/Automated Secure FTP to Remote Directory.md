# Automated Secure FTP to Remote Directory

In reference to a question on Stackoverflow which was [reviewed and closed](https://stackoverflow.com/posts/299412/revisions) due to a seemingly stupidly-ignorant, assumptive moderation back in 2014 with NO explicit reason as to why, except for **"Not suitable for this site"**, <u>nor providing suitable guidance</u> on altering the question, or posting it on another Stack channel.

The **Post Closed** details:

> **Post Closed** as "Not suitable for this site" by nobody, Kevin Panko, Yu Hao, 4dgaurav, Mark Rotteveel.
>
> Yes, I'm calling you out and in public, people. It's time the "false gods" of dev get pointed out for their atrocious behaviour.

Despite their spite, the question continues to be asked even in 2024.

Why ask this question, well in short, finding suitable alternatives with the unique features of WinSCP like the example given below, will solve the path to a solution to apply something like Jenkins for example to initiate an automatic update of a website hosted on some Hosing service which ONLY allows FTP uploads. Hetzner Cloud Shared VPSs for example.

## WinSCP Feature Required in Linux OS - Ubuntu 22.04

> **Keep Remote Directory up to Date**
>
> - Keep remote directory up to date is a **unique feature of WinSCP**. With it you may let WinSCP watch for changes in a local directory and have it automatically reflect the changes on the selected remote directory.
> - Using it, you can, with some limitations, work with local files using your favorite tools and the effect would be as if you were working with remote files directly. In other words, the feature partially replaces commercial remote directory drive mapping tools.

## Moving Forward - Applying the Described Functionality

Before we fork off into a Linux variant of WinCSP, let's stick to Windows, and Windows 10 and 11 specifically and attempt to resolve the following challenge:

**We assume the following:**

- We have a Jenkins Server installed on Windows 10, and we'll adapt this process for Winsows 11 in parallel as we develop a solution.
- We have a registered TLD, hosted on a Shared Virtual Private Server (VPS) (assume Hetzner Cloud, which should be applicable to other vendors as well) accessible via a CDN service like Cloudflare.
- We have a Private or Public Repository on GitHub and have configured a webhook to instruct Jenkins that commits were made from a local IDE dev environment the Repo
