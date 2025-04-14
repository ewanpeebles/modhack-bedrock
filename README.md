# ModHack: Bedrock edition
This project lets you create mods for Minecraft: Bedrock edition.
---
**Important: this project is still in alpha. It is not ready for use.**

This app will soon let you easily write mods in a similar way to [bridge.](https://bridge-core.app), but a lot more simple.
It is intended for people who want to write mods but don't know how to code.
This was written using [Node.js](https://nodejs.org) and [Electron](https://www.electronjs.org).

How to install:
Go to the releases section of this page (right under the About section) and download the latest release.
As of now, the project is in alpha. It will have major issues and probably will not work.

How to edit:
1. Install the prerequesites:
    - [Node.js](https://nodejs.org)
    - A text editor (all editing is done with [Visual Studio Code](https://code.visualstudio.com))
    - Optional - [Git](https://git-scm.com) or [GitHub Desktop](https://desktop.github.com) to clone the repository
    (otherwise you can just download it - use one of these if you intend to contribute though!)
2. Download the repository (If you intend to collaborate, _please fork the repo first_):
    - From Git bash: `git clone https://github.com/ewanpeebles/modhack-bedrock.git`
    - From GitHub Desktop: Sign in, and add a repository and choose "Clone". Clone from `github.com/ewanpeebles/modhack-bedrock`.
    - Without either: From this webpage, click `Code` -> `Download ZIP` and extract to wherever you want.
3. Open the folder in a terminal (or in VSCode's integrated terminal)
4. Run `npm install --save-dev electron@latest`
5. To run the program, run `npm run start`. If you are in VSCode, you can just debug it as well with the `Main + renderer` debug config.
6. If you would like to contribute, please open a merge request.