export default function SearchTag({tagName, onRemove, onClick, ...props}) {
    return (
      <div className="SearchTag" {...props}>
        <div>{tagName.toUpperCase()}</div>
        <button onClick={onRemove}>X</button>
      </div>
    );
}