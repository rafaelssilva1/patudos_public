import SortBy from "@base/components/sort/Sort";
import { SortWrapper, Wrapper } from "../Filters.styles";
import { PropTypes } from "../Filters.types";
import FiltersContent from "../components/FiltersContent";

const FiltersDesktop: React.FC<PropTypes> = ({ data }) => {
  if (!data) return null;

  return (
    <Wrapper>
      <FiltersContent data={data} />
      <SortWrapper>
        <SortBy />
      </SortWrapper>
    </Wrapper>
  );
};

export default FiltersDesktop;
