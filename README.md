# 19 Progressive Web Applications (PWA): Text Editor

[![Heroku App](https://img.shields.io/badge/Heroku-Deployed-blueviolet?logo=heroku)](https://github.com/jenho-webdev/JATE_Text_Editor)
[![Github Repo](https://img.shields.io/badge/GitHub_Project_Board-Deployed-blue?logo=github)](https://github.com/jenho-webdev/JATE_Text_Editor)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/jenho-webdev/Jate_Text_Editor/blob/main/LICENSE)


A simple text editor that runs in the browser as a Progressive Web App (PWA). This application allows you to create and edit notes or code snippets, even without an internet connection. The content you create is stored using IndexedDB for data persistence, and the app is fully functional offline.
## Table of Contents

- [19 Progressive Web Applications (PWA): Text Editor](#19-progressive-web-applications-pwa-text-editor)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Mock-Up](#mock-up)
  - [Contributing](#contributing)
  - [License](#license)
  - [Credits](#credits)
  - [Contact](#contact)
## Features

- Create and edit notes or code snippets
- Works offline using IndexedDB for data storage
- Installable as a Progressive Web App
- Uses CodeMirror for a rich text editing experience

## Usage
Create new notes or code snippets.
Edit and update your content.
The content is automatically saved to IndexedDB whenever you click off the editor or lose focus.
Install the app as a Progressive Web App by clicking the "Install" button.

## Technologies Used
HTML, CSS, JavaScript
Express.js (Node.js framework)
CodeMirror for the text editor component
IndexedDB for offline data storage
Workbox for service worker and caching strategies

## Mock-Up

The following animation demonstrates the application functionality:

![Demonstration of the finished Module 19 Challenge being used in the browser and then installed.](./Assets/00-demo.gif)

The following image shows the application's `manifest.json` file:

![Demonstration of the finished Module 19 Challenge with a manifest file in the browser.](./Assets/01-manifest.png)

The following image shows the application's registered service worker:

![Demonstration of the finished Module 19 Challenge with a registered service worker in the browser.](./Assets/02-service-worker.png)

The following image shows the application's IndexedDB storage:

![Demonstration of the finished Module 19 Challenge with a IndexedDB storage named 'jate' in the browser.](./Assets/03-idb-storage.png)


## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License
This project is licensed under the [![MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://github.com/jenho-webdev/Jate_Text_Editor/blob/main/LICENSE)

## Credits

This PWA Text Editor is a project developed as part of a coding challenge or course. The application may have been designed based on specific requirements and guidelines.

The development of this program was supported by the course materials and resources provided by the bootcamp.

Shield and badges used in this markdown document were sourced from Shields.io.

## Contact

For any inquiries or questions, welcome to contact me @
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/jen-h-202a1723/)[![Github][Github-shield]](https://github.com/jenho-webdev/Personal-Portfolio)[![Slack][slack-shield]](https://jenworkspace-as73396.slack.com/archives/C052QLTJQHG)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[Github-shield]:https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[slack-shield]:https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white

