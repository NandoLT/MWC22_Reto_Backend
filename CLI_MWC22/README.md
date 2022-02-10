##CLI-MCW22
______________________________
### Installing CLI-MCW
#### First step is install our cli app globally to have access everywhere.
1. Move to root directory of our app /CLI_MWC22
2. Open a terminal
3. Run npm command
```
$ npm install -g .
```
4. check that the installation was correct
```
$ npm ls -g --depth=0
    [console output]
    C:\Program Files\nodejs -> .\
    ├── cli_mwc22@1.0.0 -> Route to direcory 
    └── npm@8.1.2
```

### Commands list:
1. <u>cli-mwc</u> call the applicaction:
```
$ cli-mcw
```
Then pass the commands below:

A. <u>data-info</u> to get info about MWC dates. 
```
$ cli-mwc data-info
```
B. <u>devs-list</u> to get info about developers. 
```
$ cli-mwc devs-list
```

C. <u>create-dev*</u> create new developer with an interactive command line.
```
$ cli-mwc create-dev 
```
##### * Then CLI ask for some parameters {name, email, phone, category, date}