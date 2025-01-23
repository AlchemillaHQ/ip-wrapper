const { isIP } = require("net");

/**
 * Checks if a given string is a valid interface name
 *
 * @param {string} interfaceName - The string to be checked for shell injection and string escaping
 * @returns {boolean} Returns true if the string is a valid interface name
 */
function isValidInterface(interfaceName) {
    const interfaceRegex = /^[a-zA-Z0-9_-]+$/;

    // Valid interface shouldn't be escaped
    return interfaceRegex.test(interfaceName);
}

/**
 * Checks if a given string is a valid CIDR notation.
 *
 * @param {string} cidr - The string to be checked for CIDR validity.
 * @returns {boolean} Returns true if the string is a valid CIDR notation, false otherwise.
 */
function isValidCIDR(cidr) {
    const parts = cidr.split("/");
    const ip = parts[0];
    const subnet = parts[1];

    return (
        isIP(ip) &&
        subnet !== undefined &&
        !isNaN(parseInt(subnet)) &&
        ((isIP(ip) === 4 && subnet >= 0 && subnet <= 32) ||
            (isIP(ip) === 6 && subnet >= 0 && subnet <= 128))
    );
}

/**
 * Checks if a given MTU is valid.
 * @param mtu
 * @returns {boolean}
 */
function isValidMTU(mtu) {
    return !isNaN(parseInt(mtu)) && mtu > 0;
}

/**
 * Checks if a given string is a valid IP address.
 * @param ip
 * @returns {boolean}
 */
function isValidIP(ip) {
    return isIP(ip) !== 0;
}

/**
 * Validates a MAC address format.
 *
 * @param {string} macAddress - The MAC address to validate.
 * @returns {boolean} True if the MAC address is valid, false otherwise.
 */
function isValidMACAddress(macAddress) {
    const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return macRegex.test(macAddress);
}

module.exports = {
    isValidCIDR,
    isValidMTU,
    isValidIP,
    isValidMACAddress,
    isValidInterface,
};
