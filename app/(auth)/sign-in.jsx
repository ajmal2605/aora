import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image,KeyboardAvoidingView, Platform } from "react-native";

import { images } from "../../constants";
import { CustomButton, FormField } from "../../components";
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 2 }}
      >
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-1"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <View className="flex justify-center items-center">
          <Image
            source={images.thinkingSignin}
            resizeMode="contain"
            className="w-[154px] h-[200px]"
          />

          <Text style={{ textAlign: 'center'}} className="font-grandCruLightS pb-[5px] pt-[30px] ">
            <Text style={{ fontSize: 20}}>Plan your Breaks</Text>
            {'\n'}
            <Text style={{ fontSize: 30 }}>Professionally</Text>
            </Text>
          </View>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder={"Enter your Email"}
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-4"
            placeholder={"Enter your Password"}
          />

          <CustomButton
            title="Log In"
            handlePress={submit}
            containerStyles="mt-14"
            isLoading={isSubmitting}
            textStyles="text-[16px]"
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-[14px] text-[#222] font-mregular ">
              Already have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-[14px] font-msemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
