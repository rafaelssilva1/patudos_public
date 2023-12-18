import { PropTypes } from "./Filters.types";
import useViewport from "@base/hooks/useViewport";
import FiltersMobile from "./mobile/FiltersMobile";
import FiltersDesktop from "./desktop/FiltersDesktop";

const Filters: React.FC<PropTypes> = ({ data }) => {
  const { viewport } = useViewport();
  const isMobile = viewport?.extraSmall;

  return isMobile ? (
    <FiltersMobile data={data} />
  ) : (
    <FiltersDesktop data={data} />
  );
};

export default Filters;
