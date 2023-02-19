import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Catagories from "../components/Catagories";
import FeaturedRow from "../components/FeaturedRow";
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>
        <UserIcon size={35} color={"#00CCBB"} />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={35} color={"grey"} />
          <TextInput placeholder="Restaurants " />
        </View>
        <AdjustmentsVerticalIcon size={35} color={"#00CCBB"} />
      </View>
      <ScrollView className="bg-gray-100" contentContainerStyle={{}}>
        {/* Catagories */}

        <Catagories />
        {/* Featured Row */}

        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid Placements for our partners"
        />
        <FeaturedRow
          id="2"
          title="Featured1"
          description="Paid Placements for our partners"
        />
        <FeaturedRow
          id="3"
          title="Featured2"
          description="Paid Placements for our partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
