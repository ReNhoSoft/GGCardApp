import SearchTag from "./SearchTag";

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
          <div >
            <button className="bg-green-900 text-red-200 rounded-lg mt-1 mb-1 w-16" onClick={onTagsCleared}>clear</button>
          </div>
        </>
      )}
    </>
  );
}