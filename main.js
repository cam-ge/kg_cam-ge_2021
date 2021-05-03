var txt = '';
var myargs = process.argv.slice(2);
myargs.forEach(convert)


function convert(value,index,array){
    var digits = ['Zero','One','Two','Three','Four',
        'Five','Six','Seven','Eight','Nine'];
    var num = parseInt(value);
    var words = '';
    var counter = 0 ;
    while(counter<value.length){
        words+= digits[value[counter]];
        counter ++;
    }
    txt =  txt + words+ ',';

}
txt = txt.substring(0,txt.length-1);
console.log(txt);