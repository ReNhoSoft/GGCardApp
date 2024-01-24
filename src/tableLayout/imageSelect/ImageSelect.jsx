import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import classes from "./ImageSelect.module.css";

const ImageSelect = forwardRef(
  ({ dropDownData, selectedItem, onItemSelected, category, label }, ref) => {
    const [displayMenu, setDisplayMenu] = useState(false);
    const [selectedTag, setSelectedTag] = useState();

    useEffect(()=>{
      setSelectedTag(() => selectedItem
        ? dropDownData?.find((data) => data.value == selectedItem.name)
        : false) 
    }, [selectedItem]);

    const onItemSelectedInternal = (item) => {
      setDisplayMenu(false);
      onItemSelected(item.value, category);
      setSelectedTag(item);
    };
    return (
      <div
        className={classes.dropdown}
        onMouseEnter={() => setDisplayMenu(true)}
        onMouseLeave={() => setDisplayMenu(false)}
      >
        {selectedTag && <ImageSelectOption item={selectedTag} />}
        {!selectedTag && <div className={classes.dropbtn}>{label}</div>}
        {displayMenu && (
          <div className={classes["dropdown-content"]}>
            {dropDownData.map((item, index) => (
              <ImageSelectOption
                item={item}
                onItemSelected={onItemSelectedInternal}
                category={category}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);


function ImageSelectOption({ item, onItemSelected, category }) {
  return (
    <div
      key={item.value}
      className={classes.dropdownItemContainer}
      onClick={() => {
        if (onItemSelected) onItemSelected(item);
      }}
    >
      <div className={classes.dropdownItem}>
        <div className={classes.itemImage}
          style={{ backgroundPosition: item.iconPosition ? item.iconPosition : "", '--bgImage': `url('.${item.icon}')` }}
        >
          <label className={classes.dropdownItemlabel}>{item.value}</label>
        </div>
      </div>
    </div>
  );
}

export default ImageSelect;