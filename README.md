# hashid-csv-decoder

## Installation and running

### Pre-requisites
1. NodeJS and NPM are installed on your path (http://nodejs.org to install for your machine)
2. NPM configured for your network set up (proxy password provided if behind proxy)

### Install
1. Clone this repository or download via zip and extract
2. Run `npm install` in the project directory

### Running
Run the following command: `node app.js my-list-of-ids.csv mysalt` where:
- `my-list-of-ids.csv` is a csv file that contains a single column of salted IDs with no heading
- `mysalt` is the salt value that was used when encoding

The resuts will be available in the directory that the command was run from in a file called `results.csv`

## Limitations

- Currently only single value hashes are supported (i.e. a hash could contain multiple values).
- Source CSV can only be one column without heading row

## Contributing

Pull requests are welcome if issues arise or the tool needs to be modified to suit your purposes.
