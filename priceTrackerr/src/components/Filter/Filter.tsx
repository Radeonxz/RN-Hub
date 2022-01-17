import { View, Text, Pressable } from "react-native";

const Filter = ({
  filterDay,
  filterText,
  selectedRange,
  setSelectedRangeChange
}: any) => {
  const isFilteredSelected = (filter: string) => filter === selectedRange;
  return (
    <Pressable
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: isFilteredSelected(filterDay)
          ? "#1e1e1e"
          : "transparent"
      }}
      onPress={() => setSelectedRangeChange(filterDay)}
    >
      <Text style={{ color: isFilteredSelected(filterDay) ? "white" : "grey" }}>
        {filterText}
      </Text>
    </Pressable>
  );
};

export default Filter;
