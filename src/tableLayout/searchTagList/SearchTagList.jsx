import SearchTag from "../searchTag/SearchTag";

export default function SearchTagList({tags, onTagSelected, onTagRemoved, onTagsCleared}) {
  return (
    <>
      {tags && (
        <>
          <div className="flex">
            <div className="flex-auto" />
            {tags.map((tag) => {
              return (
                <SearchTag
                  tagName={tag}
                  key={tag}
                  onRemove={(event) => {
                    onTagRemoved(event, tag);
                  }}
                  onClick={(event) => {
                    onTagSelected(event, tag);
                  }}
                />
              );
            })}
            <div className="flex-auto" />
          </div>
          <div>
            <button onClick={onTagsCleared}>clear</button>
          </div>
        </>
      )}
    </>
  );
}