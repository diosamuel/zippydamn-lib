<h1 align="center"> ZippyDamn-lib!</h1>

<h2 align="center">
ZippyDamn-lib! is a ZippyShare Unofficial library (downloader & search) for nodejs</h2>

## Looking for a CLI?
> Try [Zippydamn! CLI](https://www.npmjs.com/package/zippydamn)

<div align="center">
    <img src="https://img.shields.io/github/forks/diosamuel/zippydamn-lib?style=for-the-badge">
    <img src="https://img.shields.io/github/stars/diosamuel/zippydamn-lib?style=for-the-badge">
    <img src="https://img.shields.io/github/license/diosamuel/zippydamn-lib?style=for-the-badge">
</div>

<div align="center">
<img src="https://nodei.co/npm/zippydamn-lib.png">
</div>

## Installation

Use the package manager npm to install _ZippyDamn!_ CLI

```bash
npm install zippydamn-lib
```

## Usage

```bash
const zippy = require('zippydamn-lib')

await zippy.extract('https://www19.zippyshare.com/v/lKeHaNxX/file.html')
await zippy.search('Attarashi Gakko')

```

# Update

### Change callback code to async await :D
Callback is suck you know? >:), so i decided move to async await! :D

---
## UPDATE V0.0.6 !
### ZippyDamn search need a Google CSE API Key to run
1. Open [https://developers.google.com/custom-search/v1/overview](https://developers.google.com/custom-search/v1/overview)
2. Click "Get a Key"
3. Write your project name
4. Replace "YOUR_API_KEY" with your Google Key in .env file
  ```GOOGLE_CSE_KEY = "YOUR_API_KEY"```

![](./tutorial.gif)

## Contributing <3
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

---

Made with <3 by Virdio
