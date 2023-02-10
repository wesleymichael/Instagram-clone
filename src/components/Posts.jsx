import listaposts from './listaPosts'
import Post from "./Post";

export default function Posts(){    
    return (
        <div className="feed">
            {listaposts.map( (p) => (
                <Post post={JSON.stringify(p)}/>
            ))}
        </div>      
    )
}
