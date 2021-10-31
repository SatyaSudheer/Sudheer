#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name, 
    tagLine: `Hello, nice to meet you!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold:true,
    clear: true,
});

console.log(`
Satya Sudheer 

Ample of experience in the field of IT specializing in the internet development, Object Oriented Programming, Relational Database, Graphical User Interfaces and client/ server architecture using VB.Net, C#.Net, ASP.Net, HTML, XML, Java Script, Web Servers like Microsoft IIS, Databases like SQL Server, Oracle, Teradata, Application Servers like Geo-Server.

🐣 Twitter: https://twitter.com/satya_sudheer
📖 Github: https://github.com/satyasudheer
`);
