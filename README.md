# expenses_consolidator
An ETL program to consolidate all my different bank transactions into a single csv. This csv is then used to log all my expenses in Google Sheets 

Currently supports the following banks:
- Chase
- Discover
- US Bank

### How to use:

First, install the packages by running:
`npm i`

Next place your transactions csv files into the "input" folder.

Then run the program with this command:
`node app.js`

Look for a folder called "output". The resulting `expenses.csv` file should be there.


### Future Plans
- implement database feature by integrating Prisma to turn the transactions to a user-friendly database viewer

