const { describe, expect } = require("@jest/globals");
const {
    isValidInterface,
    isValidMACAddress,
    isValidIP,
    isValidCIDR,
    isValidMTU,
} = require("../src/utils.js");

const validDummyInterfaceName = "eth_dummy";
const validIpAddress = "192.168.100.100";
const validMacAddress = "00:11:22:33:44:55";
const invalidInterfaceName = "eth;|";
const invalidIpAddress = "192.168.300.300";
const invalidMacAddress = "00:11:22:33:44:ZZ";

describe("Validation", () => {
    test("Should be invalid", () => {
        expect(isValidInterface(invalidInterfaceName)).toBeFalsy();
    });

    test("Should be valid", () => {
        expect(isValidInterface(validDummyInterfaceName)).toBeTruthy();
    });
});
