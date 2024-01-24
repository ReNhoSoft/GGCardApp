import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Tweet } from "react-twitter-widgets";

const youtubeEmbedPrefix = "https://www.youtube.com/embed/";

export default function TechItemMedia({media, description}) {
    return (
      <tr>
        <td colSpan={2} style={{ textAlign: "right" }}>
            <Markdown remarkPlugins={remarkGfm}>{description}</Markdown>
        </td>
        <td colSpan={4} style={{ textAlign: "center" }}>
        {media.type=="youtube" && (
          <iframe
            width="420"
            height="315"
            src={youtubeEmbedPrefix + media.source}
          ></iframe>
        )}
        {media.type == "twitter" && (
            <Tweet tweetId={media.source}/>
        )}
        {media.type == "streamable" && (
          <iframe allow="fullscreen" allowfullscreen height="100%" src={`https://streamable.com/e/${media.source}?nocontrols=1`} ></iframe>
        )}
        </td>
      </tr>
    );
}