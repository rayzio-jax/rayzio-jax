const fs = require("fs");

const birthDate = new Date("2003-05-17"); // <--- your birthday
const now = new Date();

let age = now.getFullYear() - birthDate.getFullYear();
const m = now.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
	age--;
}

let readme = fs.readFileSync("README.md", "utf8");
readme = readme.replace(/{{AGE}}/g, `${age}`);
fs.writeFileSync("README.md", readme);
