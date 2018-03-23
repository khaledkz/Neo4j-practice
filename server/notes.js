// MATCH (person) where person.name="wafa mousaa" or person.name="khaled kharaz"return person

// create(wafama)-[:Related_To]->(khaledkz)

// (TomH)-[:ACTED_IN {roles:['Jim Lovell']}]->(Apollo13)


// create(wafama:person {name:'wafa mousaa',age:'15'})


//Create Team Name Liverpool

CREATE(LiverPool:team {name:'Liver Pool', date:2011,players:15,country:'Leb'})

//Create Player Name Mo Salah

CREATE(MoSalah:player {name:'Mohammed Salah', age:26}) 

