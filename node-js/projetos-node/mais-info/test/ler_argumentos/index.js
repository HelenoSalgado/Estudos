// nome

console.log(process.argv);

const argv = process.argv.slice(1);

console.log(argv);

const exten = argv[0].split('.')[1];

console.log(exten);