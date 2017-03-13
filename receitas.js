/**
* @author Thassio Victor <tvmcarvalho@gmail.com>
* @desc Retorna receitas da API http://www.recipepuppy.com/about/api/
    * @license MIT
    */

'use strict';

const readline = require('readline');
const http = require('http');

const API = 'http://www.recipepuppy.com/api/?q=';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const qst = 'Type in a recipe to search for: ';

rl.question(qst, function(ans) {
    rl.close();
    const recipe = ans.toLowerCase().trim();

    http.get(API + recipe, function(res) {
        let finalData = '';

        res.on('data', function(d) {
            finalData += d;
        });

        res.on('end', function() {
            finalData = JSON.parse(finalData);
            console.log(finalData);
        });
    });
});

