# Expenses Consolidator
An ETL program to clean up and consolidate all my different bank transactions into a single csv file. I can then use this csv in Google Sheets where I categorize and analyze my expenses. 

![flow](https://user-images.githubusercontent.com/54592360/232820984-41f6676b-a3cc-4c13-97fb-f0322c5e357f.png)

Currently supports the following banks:
- Chase
- Discover
- US Bank

### How to use:
First, clone this repo & install the dependencies by running:
`npm i`

Then go your respective bank and download the transactions from as a CSV file.

Next place your csv files into the "input" folder.

Then run the program with this command:
`node app.js`

Look for a folder called "output". The resulting `expenses.csv` file should be there.

You can now import this csv file into Google Sheets where you can categorize, sum, etc.  

### Future Plans
- implement database feature by integrating Prisma to turn the transactions to a user-friendly database viewer

