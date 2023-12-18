import { getPets } from "@base/get-data-utils";
import Homepage from "./Homepage";
import { HOME_RENDER_LIMIT } from "@base/utils/global-variables";

const Home = async () => {
  const petsData = await getPets({
    enableFetch: true,
    locale: "pt",
    limit: HOME_RENDER_LIMIT,
    ignoreAdopted: 0,
    disableCache: true,
  });

  return <Homepage data={{ petsData }} />;
};

export default Home;
