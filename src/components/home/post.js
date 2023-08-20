// KISAC.LIVE V2 CLIENT

import React, { Component, useEffect, useState, useRef } from "react";
import "../../App.css";
import { Image } from "semantic-ui-react";

// LIVE EVENTS DISPLAY
import LiveHorizontalList from "../stream/horizontal_scroll/index";

// ADVERTISEMENT IMPORT
import TallAd from "../etc/advertisement/tall_ad";


import { Message, Grid,Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
// IMAGE IMPORT
// import irene from "../../resources/images/24_IreneYang.jpg" <3;
import { db } from "../../firebase/firebaseConfig";

// POST CARDS
import Post from '../home/postcard';

import {
  getDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  Timestamp,
  doc,
  where,
  setDoc,
  orderBy,
} from "firebase/firestore";

export default function Postpage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const postCollectionRef = query(collection(
      db,
      `/posts`
    ), orderBy("posttime"));
    const data =  getDocs(postCollectionRef).then((res) => {
      console.log("success", res);
      setPost(res.docs.map((doc) => ({ ...doc.data() })));
      console.log(post)
    });

  }, []);
  let postList;
  if (!post) {
    postList = "there is no player recored!";
  } else {
    //console.log(players.length);
    postList = post.reverse().map((post, k) => (
      <Post className="col-4" post={post} key={k} />
    ));
  }
  
  return(
  <>
    <div class="three nine wide column">
    {post.map((post, k) => (
      <Grid.Column width={5}>
         <Post className="col-4" post={post} key={k} />
      </Grid.Column>
    ))}
    </div>
  </>
  );
}