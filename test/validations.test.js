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
const validIpCidr = "172.16.16.0/24";
const invalidIpCidr = "172.16.16.300/24";
const validMTUvalue = 1000;
const invalidMTUvalue = "invalid_mtu";

describe("Validation", () => {
    test("Should be valid interface name", () => {
        expect(isValidInterface(validDummyInterfaceName)).toBeTruthy();
    });

    test("Should be valid ip address", () => {
        expect(isValidIP(validIpAddress)).toBeTruthy();
    });

    test("Should be valid mac address", () => {
        expect(isValidMACAddress(validMacAddress)).toBeTruthy();
    });

    test("Should be valid CIDR", () => {
        expect(isValidCIDR(validIpCidr)).toBeTruthy();
    });

    test("Should be valid MTU value", () => {
        expect(isValidMTU(validMTUvalue)).toBeTruthy();
    });

    test("Should be invalid interface name", () => {
        expect(isValidInterface(invalidInterfaceName)).toBeFalsy();
    });

    test("Should be invalid ip address", () => {
        expect(isValidIP(invalidIpAddress)).toBeFalsy();
    });

    test("Should be invalid mac address", () => {
        expect(isValidMACAddress(invalidMacAddress)).toBeFalsy();
    });

    test("Should be invalid CIDR", () => {
        expect(isValidCIDR(invalidIpCidr)).toBeFalsy();
    });

    test("Should be valid MTU value", () => {
        expect(isValidMTU(invalidMTUvalue)).toBeFalsy();
    });
});
