'use strict';

const sentences = [
    { subject: 'JS', verb: 'is', object: 'great'},
    { subject: 'Angular', verb: 'is', object: 'large'},
];
function say({subject,verb,object}) {
    console.log('${subject} ${verb} ${object}');
}

for (let s of sentences) {
    say(s);
}