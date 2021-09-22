import React from 'react';
import { useSelector } from 'react-redux';
import { PostType } from '../App';
import Posts from './Posts';

const Landing = ({posts}:{posts:PostType[]}) => {
  const user = useSelector((state: any) => state.user);
    console.log(posts);
    const story = React.useRef<any>();
    React.useEffect(() => {
        story.current.scrollBy({
            top:0,
            left:1000,
            behaviour: "smooth"
        })
    },[])
  return (
        <div className="container landing">
            <div className="row">
                <div className="col-8">
                    <div className=" card story" ref = {story}>
                        {[...Array(15)].map((_,i) => (
                             <div className="story-img">
                                 <img src={user.profilePicture} alt="" />
                             </div>
                        ))}    
                    
                    </div>
                    <div className="posts">
                       {
                           posts.length > 0 ? (
                            posts.map((post) => (
                                <Posts post={post}/>
                            ))
                           ): null
                        }
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
            
        </div>
    )
}

export default Landing;
