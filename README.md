# dynamic-web-header

random-crypto-api is a Typescript/Javascript library to generate random Numbers or Strings.

## Overview

A simple Typescript/JavaScript library for dynamically change site icon and title. This package allows you to change site icon and title on the basis of condition and pages.


## Node.js (Install)

Requirements:

- Node.js
- npm (Node.js package manager)

```bash
npm install dynamic-web-header
```

### Usage



```javascript
import { icon, title} from 'dynamic-web-header';

  <button onClick={ ()=>{(title('My new title'))}}> click </button>  // change the title

  <button onClick={ ()=>{(icon('https://xyz.com/icon.png'))}}> click </button>  // change the icon




// OR 

import dynamicWebHeader from 'dynamic-web-header';

  <button onClick={ ()=>{(dynamicWebHeader.title('My new title'))}}> click </button>  // change the title

  <button onClick={ ()=>{(dynamicWebHeader.icon('https://xyz.com/icon.png'))}}> click </button>  // change the icon
  
```
