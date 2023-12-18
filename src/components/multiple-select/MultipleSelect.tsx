import { useEffect, useRef, useState } from "react";
import { Chevron } from "../icons";
import {
  Chip,
  DropDown,
  SelectIcon,
  SelectedItemsContainer,
  StyledCloseIcon,
  StyledLi,
  StyledPlaceholder,
  Wrapper,
} from "./MultipleSelect.styles";
import { Item, PropTypes } from "./MultipleSelect.types";
import useOutsideClick from "@base/hooks/useClickOutside";
import { ChevronPosition } from "../icons/Chevron";
import { useSearchParams } from "next/navigation";

export const MultiSelect: React.FC<PropTypes> = ({
  raised = true,
  items,
  placeholder,
  resetOnChange,
  defaultSelected,
  handleClick,
}) => {
  const searchParams = useSearchParams();
  const [selectedItems, setSelectedItems] = useState<Item[]>(
    defaultSelected || [],
  );
  const [opened, setIsOpened] = useState(false);
  const wrapperRef = useRef<null | HTMLDivElement>(null);
  const [wrapperClientHeight, setWrapperClientHeight] = useState(40);

  useEffect(() => {
    setSelectedItems(defaultSelected || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const onClickWrapper = () => {
    setIsOpened(!opened);
  };

  const onClickDeleteItem = (id: string) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  const handleClickOutside = () => {
    setIsOpened(false);
  };
  useOutsideClick(handleClickOutside, wrapperRef);

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      if (selectedItems.length > 0) {
        const newwrapperClientHeight =
          wrapperRef && wrapperRef.current
            ? wrapperRef.current.clientHeight
            : 25;

        setWrapperClientHeight(newwrapperClientHeight);
      } else {
        setWrapperClientHeight(40);
      }
    }
  }, [selectedItems]);

  useEffect(() => {
    if (selectedItems.length === items.length) {
      setIsOpened(false);
    }
  }, [selectedItems, items]);

  const onDropDownClicked = (newItem: Item) => {
    setSelectedItems([...selectedItems, newItem]);
  };

  useEffect(() => {
    handleClick(selectedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems]);

  useEffect(() => {
    if (resetOnChange) {
      setSelectedItems([]);
    }
  }, [resetOnChange]);

  const filteredItems = items.filter(
    (item) => selectedItems.findIndex((sel) => sel.id === item.id) === -1,
  );

  if (!items) return null;

  return (
    <Wrapper raised={raised} onClick={onClickWrapper} ref={wrapperRef}>
      <SelectedItemsContainer>
        {!selectedItems.length && (
          <StyledPlaceholder>{placeholder}</StyledPlaceholder>
        )}

        {selectedItems.map(({ id, name }) => (
          <Chip key={id} onClick={(e) => e.stopPropagation()}>
            <span>{name}</span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                onClickDeleteItem(id ? id : "");
              }}
            >
              <StyledCloseIcon />
            </span>
          </Chip>
        ))}
      </SelectedItemsContainer>
      <SelectIcon>
        <Chevron position={ChevronPosition.Down} />
      </SelectIcon>
      {filteredItems.length > 0 && (
        <DropDown
          opened={opened}
          raised={raised}
          wrapperClientHeight={wrapperClientHeight}
        >
          {filteredItems.map(({ id, name }) => (
            <StyledLi
              key={id}
              onClick={(e) => {
                e.stopPropagation();
                onDropDownClicked({ id, name });
              }}
            >
              {" "}
              {name}
            </StyledLi>
          ))}
        </DropDown>
      )}
    </Wrapper>
  );
};
