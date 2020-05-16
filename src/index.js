#!/usr/bin/env node

const aptlib = require('otplib')


const secret = 'JJ4E5LI2NZEV5L3T';
const token = aptlib.authenticator.generate(secret);
console.log(token)
