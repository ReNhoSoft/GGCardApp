import { useState } from "react";
import CardTag from "./CardTag";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Card({card}) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="card">
      <div className="header">
        <h1>{card.header?.toUpperCase()}</h1>
      </div>
      <div className="body">
        <Markdown remarkPlugins={[remarkGfm]}>{card.body}</Markdown> 
        {!showVideo && card.media && <button onClick={() => setShowVideo(true)} >Show Video</button> }
        {showVideo && card.media && (
          <video muted={true} controls={true} autoPlay={true}>
            <source
              src={card.media.source}
              type={card.media.type}
            />
          </video>
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