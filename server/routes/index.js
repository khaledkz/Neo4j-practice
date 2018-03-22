var express = require('express');
var router = express.Router();
 
const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '123456'));
const session = driver.session();

// const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('user', 'password'));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addperson',(req,res)=>{

  
const personName = 'Alice';
const resultPromise = session.run(
  'CREATE (a:Person {name: $name}) RETURN a',
  {name: personName}
);

resultPromise.then(result => {
  session.close();

  const singleRecord = result.records[0];
  const node = singleRecord.get(0);

  console.log(node.properties.name);

  // on application exit:
  driver.close();
});


});
 
module.exports = router;
