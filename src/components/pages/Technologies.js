import React from "react";
import  "../../style.css";
import { Row, Container, Card } from "reactstrap"
import "../../style.css";

function Technologies() {
  return (
    <Container>
      <Row>
  <h1>Below is a list of the different technologies I have used.</h1>
  </Row>
    <Row>
 <Card>
<div className="tech1">

            <img className="techimg" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012011/stocklogos-template-01.png?itok=DapYF29D" alt="html"></img>
           
</div>
</Card>
<Card>
<div className="tech2">
  
  <img className="techimg" src="https://cdn.freebiesupply.com/logos/thumbs/2x/css-3-logo.png" alt="css"></img>
  
</div>
</Card>
 
<Card>
<div className="tech3">
  
  <img className="techimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtxdAFUa1PtSnn2Rc04H9sAgwVMOvpDgM3koBo9--68F-V5Qd7&usqp=CAU" alt="JS"></img>
  
</div>
</Card>

<Card>
<div className="tech4">
  
  <img className="techimg" src="https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png" alt="Jquery"></img>
  
</div>
</Card>
  </Row>
  <Row>
  <Card>
<div className="tech5">
  
  <img className="techimg" src="https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png" alt="node"></img>
  
</div>
</Card>

<Card>
<div className="tech6">
  
  <img className="techimg" src="https://miro.medium.com/proxy/1*XP-mZOrIqX7OsFInN2ngRQ.png" alt="express"></img>
  
</div>
</Card>

<Card>
<div className="tech7">
  
  <img className="techimg" src="https://pngimg.com/uploads/mysql/mysql_PNG22.png" alt="mysql"></img>
  
</div>
</Card>

<Card>
<div className="tech8">
  
  <img className="techimg" src="https://cdn.iconscout.com/icon/free/png-256/sequelize-1-1175002.png" alt="sequelize"></img>
  
</div>
</Card>
  </Row>
  <Row>
    <Card>

    </Card>
    
    <Card>
<div className="tech9">
  
  <img className="techimg" src="https://banner2.cleanpng.com/20180702/bgt/kisspng-mongodb-database-nosql-postgresql-mongo-5b39f9e3445fa6.5652746415305261792801.jpg" alt="mongodb"></img>
  
</div>
</Card>
<Card>
<div className="tech10">
  
  <img className="techimgreact" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react"></img>
  
</div>
</Card>

<Card>

</Card>
  </Row>
  
  </Container>
  
  );
}

export default Technologies;
