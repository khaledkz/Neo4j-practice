// MATCH (person) where person.name="wafa mousaa" or person.name="khaled kharaz"return person
// create(wafama)-[:Related_To]->(khaledkz)
// (TomH)-[:ACTED_IN {roles:['Jim Lovell']}]->(Apollo13)
// create(wafama:person {name:'wafa mousaa',age:'15'})
//Create Team Name Liverpool
CREATE(LiverPool: team { name: 'Liver Pool', date: 2011, players: 15, country: 'Leb' })
//Create Player Name Mo Salah
CREATE(MoSalah: player { name: 'Mohammed Salah', age: 26 })
//create relation between player and team
CREATE(MoSalah) - [: playWith { role: 'golar' }] -> (LiverPool);

//create family relations
CREATE(kharaz:family { name:'kharaz', location: 'Leb' })
CREATE(moussa:family { name:'moussa', location: 'qatar' })
CREATE(Sharay:family { name: 'Sharay', location: 'Leb' })
CREATE(jarshi:family { name: 'jarshi', location: 'Leb' })
CREATE(Ajawi:family { name: 'Ajawi', location: 'Leb' })
CREATE(Elzib:family { name: 'Elzib', location: 'Leb' })
CREATE(Ahmad:family { name: 'Ahmad', location: 'Leb' })
 
CREATE(khaled:Person { name: 'khaled', location: 'UK' })
CREATE(ysf:Person { name: 'ysf', location: 'UK' })
CREATE(Asaad:Person { name: 'Asaad', location: 'Leb' })
CREATE(Mostafa:Person { name: 'Mostafa', location: 'Leb' })
CREATE(Omar:Person { name: 'Omar', location: 'Leb' })
CREATE(hadi:Person { name: 'hadi', location: 'Leb' })
CREATE(fatima:Person { name: 'fatima', location: 'Leb' })
CREATE(diaa:Person { name: 'diaa', location: 'Leb' })
CREATE(Mariya:Person { name: 'Mariya', location: 'UK' })
 

CREATE(nour:Person { name: 'nour', location: 'UK' })

CREATE(MoShi5:Person { name: 'Mohamed Shi5', location: 'UK' })

CREATE(Nazha:Person { name: 'Nazha', location: 'Leb' })

CREATE(Tasnim:Person { name: 'Tasnim', location: 'Leb' })



CREATE(wafa:Person { name: 'wafa', location: 'UK' })
CREATE(iman:Person { name: 'iman', location: 'Tu' })
CREATE(jana:Person { name: 'jana', location: 'Tu' })
CREATE(sara:Person { name: 'sara', location: 'Tu' })
CREATE(boshra:Person { name: 'boshra', location: 'Tu' })
CREATE(raghad:Person { name: 'raghad', location: 'Tu' })
CREATE(Mohamed:Person { name: 'Mohamed', location: 'qa' })




CREATE(alaa:Person { name: 'alaa', location: 'Tu' })
CREATE(MostafaSha:Person { name: 'MostafaSha', location: 'Tu' })
CREATE(omran:Person { name: 'omran', location: 'Tu' })


CREATE (khaled)-[:Family]->(kharaz), (Asaad)-[:Family] -> (kharaz), (ysf)-[:Family] ->(kharaz), (Mariya) - [:Family]->(kharaz)
,(Mostafa)-[:Family]->(kharaz),(hadi)-[:Family]->(kharaz),(fatima)-[:Family]->(kharaz),
(Omar)-[:Family]->(kharaz),(diaa)-[:Family]->(kharaz) 

CREATE (iman) - [:Family] -> (moussa), (Mohamed) - [:Family] -> (moussa), (wafa) - [:Family] -> (moussa)

,(jana)-[:Family]->(moussa),(sara)-[:Family]->(moussa),(boshra)-[:Family]->(moussa),
(raghad)-[:Family]->(moussa)

CREATE (alaa) - [:Family] -> (Sharay), (MostafaSha) - [:Family] -> (Sharay), (omran) - [:Family] -> (Sharay)
CREATE (Nazha) - [:Family] -> (Ajawi)
CREATE (nour) - [:Family] -> (jarshi)
CREATE (Tasnim) - [:Family] -> (Elzib)
CREATE (MoShi5) - [:Family] -> (Ahmad)
 
CREATE  (khaled) - [:husband { relation: 'husband' }] -> (wafa)
CREATE (ysf) - [:husband { relation: 'husband' }] -> (nour)
CREATE(alaa) - [:husband { relation: 'husband' }] -> (iman)
CREATE(Asaad) - [:Love { relation: 'Love' }] -> (Nazha)
CREATE  (MoShi5) - [:husband { relation: 'husband' }] -> (fatima)
CREATE(Mohamed) - [:Love] -> (Tasnim)



CREATE(omran) - [:Friends] -> (Asaad)
 
CREATE(khaled) - [:Friends] -> (MoShi5)
 
CREATE(Mohamed) - [:Friends] -> (khaled)
CREATE(khaled) - [:Friends] -> (MostafaSha)
CREATE(ysf) - [:father] -> (Mariya)
CREATE(nour) - [:selfat] -> (wafa)
CREATE(Tasnim) - [:Friends] -> (wafa)