const routine = {
    sunday:[
        {subject: "Software Engineering [Practical]", instructor: "Dr. AS + SG + T", from: "10:15", to: "12:45", group: "alt. week"},
        {subject: "Computer Organization & Architecture", instructor: "Prof. Dr. SS", from: "12:45", to: "2:25", group: "both"},
        {subject: "Computer Graphics [Practical]", instructor: "ST + TA", from: "2:25", to: "4:55", group: "C"},
        {subject: "Communication English [Practical]", instructor: "RT + MD + MB", from: "2:25", to: "4:05", group: "D"},
        {subject: "Communication English", instructor: "RT", from: "4:05", to: "4:55", group: "D"},
    ],
    monday:[
        {subject: "Probability & Statistics", instructor: "NBA", from: "10:15", to: "11:55", group: "both"},
        {subject: "Software Engineering", instructor: "SG", from: "11:55", to: "1:35", group: "both"},
        {subject: "Instrumentation II", instructor: "SST", from: "2:25", to: "4:05", group: "both"},
    ],
    tuesday:[
        {subject: "Software Engineering", instructor: "SG", from: "10:15", to: "11:55", group: "both"},
        {subject: "Instrumentation II", instructor: "SST", from: "11:55", to: "1:35", group: "both"},
        {subject: "Instrumentation II [Practical]", instructor: "SST + SKC + KN", from: "2:25", to: "4:55", group: "alt. week"},
        {subject: "Computer Organization & Architecture", instructor: "Prof. Dr. SS + TA", from: "2:25", to: "4:55", group: "alt. week"},
    ],
    wednesday:[
        {subject: "Data Communication [Practical]", instructor: "Dr. NBA + BA + SC", from: "10:15", to: "12:45", group: "alt. week"},
        {subject: "Computer Graphics", instructor: "ST", from: "12:45", to: "2:25", group: "both"},
        {subject: "Probability & Statistics", instructor: "SS", from: "3:15", to: "4:55", group: "both"},
    ],
    thursday:[
        {subject: "Computer Organization & Architecture", instructor: "Prof. Dr. SS", from: "10:15", to: "11:55", group: "both"},
        {subject: "Communication English", instructor: "RT", from: "11:55", to: "1:35", group: "both"},
        {subject: "Communication English", instructor: "MD", from: "2:25", to: "3:15", group: "both"},
        {subject: "Data Communication", instructor: "Dr. NBA", from: "3:15", to: "4:55", group: "both"},
    ],
    friday:[
        {subject: "Communication English", instructor: "RT", from: "10:15", to: "11:05", group: "C"},
        {subject: "Communication English [Practical]", instructor: "MD + MB + RT", from: "11:05", to: "12:45", group: "C"},
        {subject: "Data Communication", instructor: "Dr. NBA", from: "12:45", to: "2:25", group: "both"},
        {subject: "Computer Graphics", instructor: "ST", from: "3:15", to: "4:55", group: "both"},
    ]
}

console.log(Object.keys(routine)[new Date().getDay()]);
module.exports = routine