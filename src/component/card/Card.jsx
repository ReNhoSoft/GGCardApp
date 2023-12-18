import { useState } from "react";
import CardTag from "../CardTag";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import classes from "./Card.module.css"

export default function Card({card}) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="card">
      <div className="header">
        <h3>{card.header?.toUpperCase()}</h3>
      </div>
      <div className="body">
        <Markdown className='Markdown'
        remarkPlugins={[remarkGfm]}>{card.body}</Markdown> 
        {/* <CmdInputMarkdown input={card.body}/> */}
        {!showVideo && card.media && <button onClick={() => setShowVideo(true)} >Show Video</button> }
        {showVideo && card.media && (
          <div className={classes.videoContainer}>
            <video muted={true} controls={false} autoPlay={true} loop={true}>
              <source
                src={card.media.source}
                type={card.media.type}
              />
            </video>
            <button class={classes.close} onClick ={() => setShowVideo(false)}>Close</button>
          </div>
        )}
      </div>
      <div className="tags">
        <div className="filler"></div>
        {card.tags?.map((tag) => (
          <CardTag key={tag} tag={tag} />
        ))}
      </div> 
    </div>
  );
}