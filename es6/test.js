'use strict';

const sentences = [
    { subject: 'Java', verb: 'is', object: 'great'},
    { subject: 'Ember', verb: 'is', object: 'large'},
];
function say({subject, verb, object}) {
    console.log('${subject} ${verb} ${object}');
}

for (let s of sentences) {
    say(s);
}