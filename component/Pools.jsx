import { Flex, Card, Text } from "@radix-ui/themes";

export const Pools = (
  poolID,
  amount,
  stakeToken,
  totalStakers,
  totalStaked,
  rewardReserve,
  rewardRate
) => {
  return (
    <div>
      <Flex gap={4} align={"center"}>
        <Card style={{ width: 200 }}>
          <Flex>
            <Text as="div" size="2" weight="bold">
              Total Stakers:
            </Text>

            <Text as="div" size="2" weight="bold">
              {totalStakers}
            </Text>
          </Flex>

          <Flex>
            <Text as="div" size="2" weight="bold">
              Total Staked:
            </Text>

            <Text as="div" size="2" weight="bold">
              {totalStaked}
            </Text>
          </Flex>

          <Flex>
            <Text as="div" size="2" weight="bold">
              Reward Reserve:
            </Text>

            <Text as="div" size="2" weight="bold">
              {rewardReserve}
            </Text>
          </Flex>

          <Flex>
            <Text as="div" size="2" weight="bold">
              Reward Rate:
            </Text>

            <Text as="div" size="2" weight="bold">
              {rewardRate}
            </Text>
          </Flex>

          <button
            className="bg-blue-600 py-2 px-4 rounded-md"
            onClick={() => stakeToken(poolID, amount)}
          >
            Stake
          </button>
        </Card>
      </Flex>
    </div>
  );
};
