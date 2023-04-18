# Expenses Consolidator

![flow](https://user-images.githubusercontent.com/54592360/232820984-41f6676b-a3cc-4c13-97fb-f0322c5e357f.png)

### About
Every month, I categorize all my expenses for the month to see where all my money went. Originally, I would copy the bank transactions line-by-line onto a spreadsheet. This process was very tedious and error-prone. I discovered that for most banks you can download the transactions as a CSV file. However, every bank presents the transactions different (ie. "+" vs "-" amounts). So I built this program to clean up all the transaction data and output it as a single CSV file which I can then import into Google Sheets to run my calculations, turning what used to be a couple hours of work every month into a few minutes!



### How to use:
First, clone this repo & install the dependencies by running:
`npm i`

Then go your respective banks and download the transactions from as a CSV file. Don't change the csv file name as this program uses the file name to determine how to clean up the transaction data.

Next place your csv files into the "input" folder.

Then run the program with this command:
`node app.js`

Look for a folder called "output". The resulting `expenses.csv` file should be there.

You can now import this csv file into Google Sheets where you can categorize, sum, etc.  

Currently supports the following banks:
- Chase
- Discover
- US Bank

### Future Plans
- implement database feature by integrating Prisma and SQLite to turn the transactions to a user-friendly database viewer
- support for other banks

