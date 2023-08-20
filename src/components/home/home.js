// KISAC.LIVE V2 CLIENT

import React, { Component, useEffect, useState, useRef } from "react";
import "../../App.css";

// ADVERTISEMENT IMPORT
import TallAd from "../etc/advertisement/tall_ad";


// IMAGE IMPORT
import { db } from "../../firebase/firebaseConfig";

// POST CARDS
import Post from '../home/postcard';
import Postpage from '../home/post';
import Competitioncool from '../competition/competitioncool';

import {
  collection,
  getDocs,

} from "firebase/firestore";


export default function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const postCollectionRef = collection(
      db,
      `/posts`
    );
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
    postList = post.map((post, k) => (
      <Post className="col-4" post={post} key={k} />
    ));
  }  
  return(
  
<div class="ui grid">
  <Competitioncool/>
    <div class="three nine wide column">
    <Postpage/>
    <div class="ui message">
         <div class="header">
           Login or Signup!
         </div>
         <p>To see posts, you must create or login to your account. If you are logged in, just ignore this message.</p>
       </div>
    </div>
    <TallAd/>
  </div>
  );
}