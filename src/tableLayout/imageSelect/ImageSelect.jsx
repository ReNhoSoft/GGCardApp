import { useState } from "react";
import classes from "./ImageSelect.module.css";

export default function ImageSelect({
  dropDownData,
  selectedItem,
  onItemSelected,
  category,
  label
}) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const selectedTag = selectedItem
    ? dropDownData?.find((data) => data.value == selectedItem.name)
    : null;

  const onItemSelectedInternal = (item) => {
    setDisplayMenu(false);
    onItemSelected(item.value, category);
  };

  return (
    <div
      className={classes.dropdown}
      onMouseEnter={() => setDisplayMenu(true)}
      onMouseLeave={() => setDisplayMenu(false)}
    >
      {selectedTag && <ImageSelectOption item={selectedTag}/>  }
      {!selectedTag && <div className={classes.dropbtn}>{label}</div>}
      {displayMenu && (
        <div className={classes["dropdown-content"]}>
          {dropDownData.map((item, index) => (
            <ImageSelectOption item={item} onItemSelected={onItemSelectedInternal} category={category}/>
          ))}
        </div>
      )}
    </div>
  );
}

function ImageSelectOption({item, onItemSelected, category}) {
  return (
    <div
      key={item.value}
      className={classes.dropdownItemContainer}
      onClick={() => { if(onItemSelected) onItemSelected(item)}}
    >
      <div className={classes.dropdownItem}>
        <img src={item.icon} />
        <label className={classes.dropdownItemlabel}>{item.value}</label>
      </div>
    </div>
  );
}
