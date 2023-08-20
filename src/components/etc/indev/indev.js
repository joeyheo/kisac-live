// KISAC.LIVE V2 CLIENT
// This is the main players page.

import React from "react";
import { Segment, Image, Card} from "semantic-ui-react";

// IMAGE IMPORT

// MAIN FUNCTION
/*
<Card fluid color='black' header='Tournament Bracket' />
<Card fluid color='orange' header='Option 2' />
<Card fluid color='yellow' header='Option 3' />
*/
export default function inDev() {
  return(
    <Card centered fluid>
         <Segment textAlign='center'>
    <Image src='https://c.tenor.com/GfSX-u7VGM4AAAAC/coding.gif' size='big' centered />
   Believe it or not, everything you see on the website is written by us. It takes us to code stuff...
    </Segment>
    </Card>
   
     
  );
}

