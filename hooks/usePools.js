import { useEffect, useState } from "react";
import { getStakingContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";

const usePools = () => {
  const [pools, setPools] = useState([]);

  useEffect(() => {
    const contract = getStakingContract(readOnlyProvider);
    contract
      .id()
      .then((totalPoolsIndex) => {
        console.log("The Total Pool ID: ", Number(totalPoolsIndex));

        const allPools = [];
        for (let i = 0; i < Number(totalPoolsIndex); i++) {
          contract
            .getPoolByID(i)
            .call()
            .then((pool) => {
              allPools.push(pool);
              if (allPools.length === Number(totalPoolsIndex)) {
                setPools(allPools);
              }
            })
            .catch((error) => {
              console.error("Error fetching pool data:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching total pool ID:", error);
      });
  }, []);

  return pools;
};

export default usePools;
