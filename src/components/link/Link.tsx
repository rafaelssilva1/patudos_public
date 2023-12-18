import useLocale from "@base/hooks/useLocale";
import { PropTypes } from "./Link.types";
import Link from "next-intl/link";

const BaseLink: React.FC<PropTypes> = ({
  href,
  hideLocale = false,
  children,
  ...props
}) => {
  const { locale } = useLocale();

  const parsedHref = href.match(/^mailto:/i) ? href : `/${href}`;

  return (
    <Link href={parsedHref} locale={locale} {...props}>
      {children}
    </Link>
  );
};

export default BaseLink;
