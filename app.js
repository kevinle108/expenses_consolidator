const fs = require('fs')
const ObjectsToCsv = require('objects-to-csv');

async function main() {
  const path = './input/'
  const files = await fs.promises.readdir(path)
  const inputs = files.filter(file => file.toLowerCase().includes('.csv'))

  const transactions = []

  await Promise.all(inputs.map( async (input) => {
    await processFile(path+input, transactions)
  }));

  (async () => {
    const csv = new ObjectsToCsv(transactions);
    await csv.toDisk('./output/expenses.csv');
  })(); 
}

main()

async function processFile(input, transactions) {
  const bank = getBankFromFileName(input)
  console.log(`READING FILE: ${input}`)
  console.log(`DETERMINED BANK IS: ${bank}`)

  const fileData = await fs.promises.readFile(input);
  const lines = fileData.toString()
                        .replaceAll('"', '')
                        .split('\n')
                              
  for (let i = 1; i < lines.length; i++) {
    const transactionString = lines[i];
    if (transactionString == '') continue
    const obj = convertStringToObject(bank, transactionString)
    transactions.push(obj)                       
  }                
}

function getBankFromFileName(input) {
  const chaseStartText = 'Chase'
  const discoverStartText = 'DFS'
  const usbankStartText = 'Credit Card - '
  if (input.includes(chaseStartText)) return 'chase'
  else if (input.includes(discoverStartText)) return 'discover'
  else if (input.includes(usbankStartText)) return 'usbank'
  else return Error(`Error: Could not figure out Bank based on file name: ${input}`)
} 

function getBankIndex(bank) {
  const chase = {
    date: 1,
    description: 2,
    amount: 5
  }

  const discover = {
    date: 1,
    description: 2,
    amount: 3
  }

  const usbank = {
    date: 0,
    description: 2,
    amount: 4
  }

  if (bank == 'chase') return chase;
  else if (bank == 'discover') return discover;
  else if (bank == 'usbank') return usbank;
  else return Error('Error: No Bank Index found')
}

function convertStringToObject(bank, transactionString) {
  const transactionArray = transactionString.split(',')
  const bankIndex = getBankIndex(bank)
  const date = new Date(transactionArray[bankIndex.date])
  const amount = normalizeAmount(bank, transactionArray[bankIndex.amount])
  const description = transactionArray[bankIndex.description]
  const obj = {
    bank: bank,
    date,
    amount,
    description,
    reason: '',
    category: '',
    notes: ''
  }
  return obj
}

function normalizeAmount(bank, amountString) {
  let amount = amountString
  if (bank == 'discover') {
    if (amount[0] == '-') {
      amount = '-' + amount.substring(1)
    }
    else {
      amount = amount.substring(0)
    }
  }
  else {
    if (amount[0] == '-') {
      amount = amount.substring(1)
    }
    else {
      amount = '-' + amount.substring(0)
    }
  }
  return parseFloat(amount)
}