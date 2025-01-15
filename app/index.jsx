import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-white h-full">
      <Loader isLoading={loading} />

      {/* <Image
        source={images.noise}
        className="absolute z-[-1] top-[784px] left-[0]"
        resizeMode="contain"
      /> */}

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          {/* <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          /> */}
          <Image
            source={images.beingAtPeace}
            className="max-w-[370px] w-full h-[370px]"
            resizeMode="contain"
            />
          

          <View className="relative mt-4">
            {/* <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text> */}

            {/* <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            /> */}
            
            {/* <Text className="text-center font-grandCruLightS text-[20px]">
            Welcome to your
            </Text>
            <Text className="text-center font-grandCruLightS">
              Break Planning Companion
            </Text> */}

            <Text style={{ textAlign: 'center'}} className="font-grandCruLightS pb-[80px] pt-[30px] ">
            <Text style={{ fontSize: 30 }}>Welcome </Text>
            <Text style={{ fontSize: 20 }}>to your</Text>
            {'\n'} {/* New line for "Break Planning Companion" */}
            <Text style={{ fontSize: 20 }}>Break Planning </Text>
            <Text style={{ fontSize: 30 }}>Companion</Text>
            </Text>


          </View>

          {/* <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text> */}

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-[350px] min-h-[56px] y-[688px]"
            textStyles="text-[16px]"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
