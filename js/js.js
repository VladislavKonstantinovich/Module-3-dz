let info = {
    firstName: 'Vlad',
    secondName: 'Prushchak',
    coins: '0',
    "дата народження": '20.11.2004',
    age : {
    age2033: 29,
    age2010: 6,
    age2011: 7,
    age2012: 8,
    age2013: 9,
    age2014: 10,
    age2015: 11,
    age2016: 12,
    age2017: 13,
    age2018: 14,
    age2019: 15,
    age2020: 16,
    }
}

for (let value of Object.values(info.age)) {
    switch (value) {
        case 29:
            console.log('У 2033 буде ' + value + ' років');
            break;
        
        case 6:
            console.log('У 2010 буде ' + value + ' років');
            break;

        case 7:
            console.log('У 2011 буде ' + value + ' років');
            break;

        case 8:
            console.log('У 2012 буде ' + value + ' років');
            break;

        case 9:
            console.log('У 2013 буде ' + value + ' років');
            break;

        case 10:
            console.log('У 2014 буде ' + value + ' років');
            break;

        case 11:
            console.log('У 2015 буде ' + value + ' років');
            break;

        case 12:
            console.log('У 2016 буде ' + value + ' років');
            break;

        case 13:
            console.log('У 2017 буде ' + value + ' років');
            break;

        case 14:
            console.log('У 2018 буде ' + value + ' років');
            break;

        case 15:
            console.log('У 2019 буде ' + value + ' років');
            break;

        case 16:
            console.log('У 2020 буде ' + value + ' років');
            break;

        default:
            break;
    }
}

const entries = Object.entries(info);
entries.pop();

for (const entry of entries) {
    const key = entry[0];
    const value2 = entry[1];
  
    console.log(`${key}: ${value2}`);
}