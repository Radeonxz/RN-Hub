import { useState, useEffect } from "react";
import { View, Text, Dimensions, TextInput } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartYLabel,
  ChartPathProvider
} from "@rainbow-me/animated-charts";
import { AntDesign } from "@expo/vector-icons";

import { DetailBodyProps } from "./DetailBody.model";
import styles from "./styles";
import Filter from "../Filter";

const DetailBody = ({
  name,
  symbol,
  currentPrice,
  prices,
  priceChangePercentage
}: DetailBodyProps) => {
  const [coinValue, setCoinValue] = useState<string>("1");
  const [usdValue, setUSDValue] = useState<string>(currentPrice.usd.toString());
  const [selectedRange, setSelectedRange] = useState("1");

  const percentageColor =
    priceChangePercentage < 0 ? "#ea3934" : "#16c784" || "white";
  const chartColor = currentPrice.usd > prices[0][1] ? "#16c784" : "#ea3943";

  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    setUSDValue(
      (
        (parseFloat(coinValue.replace(",", ".")) || 0) * currentPrice.usd
      ).toString()
    );
  }, [coinValue]);

  useEffect(() => {
    setCoinValue(
      (
        (parseFloat(usdValue.replace(",", ".")) || 0) / currentPrice.usd
      ).toString()
    );
  }, [usdValue]);

  const formatCurrency = (value: string) => {
    "worklet";
    if (value === "") {
      if (currentPrice.usd < 1) return `$${currentPrice.usd}`;
      return `$${currentPrice.usd.toFixed(2)}`;
    }
    if (currentPrice.usd < 1) return `$${parseFloat(value)}`;
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const onSelectedRangeChange = (selectedRangeValue: string) => {
    setSelectedRange(selectedRangeValue);
  };

  return (
    <View>
      <View style={styles.filtersContainer}>
        <Filter
          filterDay="1"
          filterText="24h"
          selectedRange={selectedRange}
          setSelectedRangeChange={onSelectedRangeChange}
        />
        <Filter
          filterDay="7"
          filterText="7d"
          selectedRange={selectedRange}
          setSelectedRangeChange={onSelectedRangeChange}
        />
        <Filter
          filterDay="30"
          filterText="30d"
          selectedRange={selectedRange}
          setSelectedRangeChange={onSelectedRangeChange}
        />
        <Filter
          filterDay="365"
          filterText="365d"
          selectedRange={selectedRange}
          setSelectedRangeChange={onSelectedRangeChange}
        />
        <Filter
          filterDay="max"
          filterText="all"
          selectedRange={selectedRange}
          setSelectedRangeChange={onSelectedRangeChange}
        />
      </View>
      <ChartPathProvider
        data={{
          points: prices.map((price: [number, number]) => ({
            x: price[0],
            y: price[1]
          })),
          // points: prices.map(([x, y]: [number, number]) => ({ x, y })),
          smoothingStrategy: "bezier"
        }}
      >
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <ChartYLabel format={formatCurrency} style={styles.currentPrice} />
            {/* <Text style={styles.currentPrice}>${currentPrice.usd}</Text> */}
          </View>
          <View
            style={{
              ...styles.priceChangeContainer,
              backgroundColor: percentageColor
            }}
          >
            <AntDesign
              name={priceChangePercentage < 0 ? "caretdown" : "caretup"}
              size={12}
              color={"white"}
              style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text style={styles.priceChange}>
              {priceChangePercentage?.toFixed(2)}%
            </Text>
          </View>
        </View>
        <View>
          <ChartPath
            strokeWidth={2}
            height={screenWidth / 2}
            stroke={chartColor}
            width={screenWidth}
          />
          <ChartDot style={{ backgroundColor: chartColor }} />
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", alignSelf: "center" }}>
              {symbol.toUpperCase()}
            </Text>
            <TextInput
              style={styles.input}
              value={coinValue}
              keyboardType="numeric"
              onChangeText={setCoinValue}
            />
          </View>

          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", alignSelf: "center" }}>USD</Text>
            <TextInput
              style={styles.input}
              value={usdValue}
              keyboardType="numeric"
              onChangeText={setUSDValue}
            />
          </View>
        </View>
      </ChartPathProvider>
    </View>
  );
};

export default DetailBody;
