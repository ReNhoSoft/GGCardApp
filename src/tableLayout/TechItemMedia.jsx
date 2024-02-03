import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Tweet } from "react-twitter-widgets";
import { useRouteLoaderData } from "react-router-dom";

const youtubeEmbedPrefix = "https://www.youtube.com/embed/";

export default function TechItemMedia({media, description, onClickDelete}) {
    const token = useRouteLoaderData('root');
    
    return (
      <tr>
        <td colSpan={7} style={{ textAlign: "left" }}>
          <div style={{ display: "flex", width: "100%", margin: "auto" }}>
            <div style={{ width: "10%" }}>&nbsp; </div>
            <div style={{ width: "30%" }}>
              <Markdown remarkPlugins={remarkGfm}>{description}</Markdown>
            </div>
            <div style={{ width: "70%" }}>
              {media.type == "youtube" && (
                <iframe
                  width="100%"
                  height="315"
                  src={youtubeEmbedPrefix + media.source}
                ></iframe>
              )}
              {media.type == "twitter" && <Tweet tweetId={media.source} />}
              {media.type == "streamable" && (
                <iframe
                  allow="fullscreen"
                  allowfullscreen
                  width="100%"
                  height="500px"
                  src={`https://streamable.com/e/${media.source}`}
                ></iframe>
              )}
            </div>
            <div style={{ width: "10%" }}> 
                {token.isValid() && <button style={{marginLeft:"20px"}}  onClick={onClickDelete}> Delete </button>}
            </div>
          </div>
        </td>
      </tr>
    );
}