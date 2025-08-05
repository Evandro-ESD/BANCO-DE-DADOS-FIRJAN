const XLSX = require('xlsx');
const workbook = XLSX.readFile('./arquivo.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const dados = XLSX.utils.sheet_to_json(worksheet);

console.log(dados);