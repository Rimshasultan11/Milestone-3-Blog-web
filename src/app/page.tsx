import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Worlds from "./component/Blog/page";
import Post from "./component/Post/page";
import About from "./component/About/page";
import Comment from "./component/Comment";

export default function Home() { 
  return (
    <div >
   <Worlds/>
   <About/>
   <Post/>
   <Comment postId="id"/>
   
    </div>
  );
}
