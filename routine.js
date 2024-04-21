const routine = {
    sunday:[
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"}
    ],
    monday:[
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
    ],
    tuesday:[
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
    ],
    wednesday:[
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
    ],
    thursday:[
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"}
    ],
    friday:[
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
        {subject: "something", instructor: "someone", from: "this", to: "then", group: "both"},
    ]
}

console.log(Object.keys(routine)[new Date().getDay()]);
module.exports = routine