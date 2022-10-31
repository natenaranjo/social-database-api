<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="center">Social Database API</h2>

  <p align="center">
    Explore the document by the links below:
    <br />
    <br />
    <a href="https://watch.screencastify.com/v/JmbQkSzD5UduvjHJOKc7"><strong>Watch Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/natenaranjo/social-database-api">Explore the docs </a>
    ·
    <a href="https://github.com/natenaranjo/social-database-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/natenaranjo/social-database-api/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Project Screenshot][project-screenshot]](https://github.com/natenaranjo/social-database-api)

Here I learned how to write a NoSQL Database using MongoDB and Mongoose to create a Social Network Database API.  This project challenged me on building a database with the following tools:

[[![NodeJs][NodeJs-url]]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Installation

To install please clone the repo and open up in VSCODE or any editor of your choice.


To install all the necessary dependencies please run the following:
> npm install

To start the application:
> npm run start

Open up Insomnia use the following below to access the database:

Make sure to set the port to what you run in the Server.js.

- Users
  > http://localhost:3001/api/users/

- Thoughts
  > http://localhost:3001/api/thoughts


<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- USAGE EXAMPLES -->
## Usage



<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- ROADMAP -->
## Roadmap

- [x] When I enter the command to invoke the application
  - [x] The server is started and the Mongoose models are synced to the MongoDB database.
- [x] When I open the API GET routes in Insomia for users and thoughts
  - [x] The data for each of these routes is displayed in a formated json.
- [x] When I test API POST, PUT, and DELETE routes in Insomia
  - [x] I am able to successfully create, update, and delete users and thoughts in my database.
- [x] When I test API POST and DELETE routes in Insomina
  - [x] I am able to successfully create and delete reactions to thoughts and add and remove friends to a user.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- LICENSE -->
## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

- Main Developer (Nate)



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/natenaranjo/social-database-api.svg?style=for-the-badge
[contributors-url]: https://github.com/natenaranjo/social-database-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/undefined/social-database-api.svg?style=for-the-badge
[forks-url]: https://github.com/natenaranjo/social-database-api/network/members
[stars-shield]: https://img.shields.io/github/stars/natenaranjo/social-database-api.svg?style=for-the-badge
[stars-url]: https://github.com/natenaranjo/social-database-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/natenaranjo/social-database-api.svg?style=for-the-badge
[issues-url]: https://github.com/natenaranjo/social-database-api/issues
[license-shield]: https://img.shields.io/github/license/natenaranjo/social-database-api.svg?style=for-the-badge
[license-url]: https://github.com/natenaranjo/social-database-api/blob/master/LICENSE.txt
[project-screenshot]: ./public/img/screenshot.png
[project-screenshot-2]: ./public/img/screenshot-2.png
[project-screenshot-3]: ./public/img/screenshot-3.png
[project-screenshot-4]: ./public/img/screenshot-4.png
[project-screenshot-5]: ./public/img/screenshot-5.png
[NodeJs-url]: https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg
