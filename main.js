var txt = '';
var myargs = process.argv.slice(2);
myargs.forEach(convert)


function convert(value){
    let digits = ['Zero','One','Two','Three','Four',
        'Five','Six','Seven','Eight','Nine'];
    let words = '';
    let counter = 0 ;
    while(counter<value.length){
        words+= digits[value[counter]];
        counter ++;
    }
    txt =  txt + words+ ',';
}
txt = txt.substring(0,txt.length-1);
console.log(txt);