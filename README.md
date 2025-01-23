# IP Wrapper

## Overview
IP Wrapper is a Node.js library that provides functions for managing network interfaces and IP addresses on a Linux system using the `ip` command.

## Installation

To install the library, use npm:

```shell
npm install ip-wrapper
```

## Usage

```javascript
const ipWrapper = require('ip-wrapper');

(async () => {
    const addresses = await ipWrapper.addr.show();
    await ipWrapper.addr.add('enp6s0', '6.6.6.6/32');
    await ipWrapper.addr.remove('enp6s0', '6.6.6.6/32');
    await ipWrapper.addr.flush('enp6s0');
})();
```


## Input validations
- There could be a risk of insertion of malicious user input for code escaped code execution
- Thankfully, `ip-wrapper` is also provided with an assert module 

```javascript

const ipWrapper = require('ip-wrapper');
const assert = ipWrapper.assert;

let interfaceName = 'enp6s0';

if(!assert.isValidInterface(interfaceName)){
    // handle error your own way 
    throw new Error("invalid interface name")
}

(async () => {
    const addresses = await ipWrapper.addr.show();
    await ipWrapper.addr.add(interfaceName, '6.6.6.6/32');
    await ipWrapper.addr.remove(interfaceName, '6.6.6.6/32');
    await ipWrapper.addr.flush(interfaceName);
})();


```

> Your could also bring in any library of your own choice to perform validations and assertions, for e.g., [ip-cidr](www.npmjs.com/package/ip-cidr)


## Examples

All examples are located in the `examples` directory.

## Tests

We use [Jest](https://jestjs.io/) for testing. To run the tests, use the following command:

```shell
npm run test
```

## LICENSE

View the [LICENSE.md](LICENSE.md) file.
