import React, { useState } from "react";
import { Container, Form } from "semantic-ui-react";
import moment from "moment";
import { addDoc, doc, collection, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const date_create = moment().format("YYYY-MM-DDThh:mm");

const CreatePlayer = () => {
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [sport, setSport] = useState("badminton");
  const [date, setDate] = useState(date_create);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    let season;
    switch (sport) {
      case "tennis":
        season = "season1";
        break;
      case "pingpong":
        season = "season1";
        break;
      case "volleyball":
        season = "season1";
        break;
      case "swimming":
        season = "season1";
        break;
      case "basketball":
        season = "season2";
        break;
      case "pingpong":
        season = "season2";
        break;
      case "swimming":
        season = "season2";
        break;
      case "soccer":
        season = "season3";
        break;
        case "tennis":
        season = "season3";
        break;
        case "swimming":
        season = "season3";
        break;
        case "badminton":
        season = "season3";
        break;

      default:
        break;
    }

    const theDate = new Date(date)

    const docRef = await addDoc(collection(db, `/posts`), {
        author: author,
        image: image,
        sport: sport,
        content: content,
        posttime: theDate,
        title: title,

      }).then(()=>{
        console.log("succesfully created a post");
      }).catch((err)=>{console.log(err);});
  };
  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
      >
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required size="10" onChange={(e)=>setTitle(e.target.value)} value={title} />
        <label for="image">Image Link:</label>
        <input type="text" id="image" name="image" required size="10" onChange={(e)=>setImage(e.target.value)} value={image} />
        <label for="author">Author</label>
        <input type="text" id="author" name="author" required size="10" onChange={(e)=>setAuthor(e.target.value)} value={author} />

        <label for="sport">Select the sport</label>
        <select name="sport" id="sport" required onChange={(e)=>setSport(e.target.value)} value={sport}>
          <option selected value="badminton">Badminton</option>
          <option value="baseball">Baseball</option>
          <option value="basketball">Basketball</option>
          <option value="soccer">Soccer</option>
          <option value="swimming">Swimming</option>
          <option value="pingpong">Table Tennis</option>
          <option value="tennis">Tennis</option>
          <option value="volleyball">Volleyball</option>
        </select>

        <label for="content">Content:</label>
        <input type="text" id="content" name="content" required size="10" onChange={(e)=>setContent(e.target.value)} value={content} />
        <input type="submit" />
      </Form>
    </Container>
  );
};

export default CreatePlayer;
