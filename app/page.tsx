import Image from "next/image";
import getStandings from "./util/getStandings";
import { AllFixtures, Standing } from "@/types";
import StandingsAndFixtures from "./home/StandingsAndFixtures";
import getFixturesForFiveLeagues from "./util/getFixturesForFiveLeagues";

export default async function Home() {
  const standingsData: Standing[] = await getStandings();
  const filteredFixtures: AllFixtures[] = await getFixturesForFiveLeagues();
  return (
    <div className="flex flex-col w-full justify-center items-center md:p-10">
      <StandingsAndFixtures
        standingsData={standingsData}
        filteredFixtures={filteredFixtures}
      />
    </div>
  );
}
