/**
* @author Thassio Victor <tvmcarvalho@gmail.com>
* @desc Retorna receitas da API http://www.recipepuppy.com/about/api/
    * @license MIT
    */

'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const qst = 'Type in a recipe to search for: ';

rl.question(qst, function(ans) {
    rl.close();
    console.log(ans);
});

