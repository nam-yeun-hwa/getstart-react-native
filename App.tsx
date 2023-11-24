/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Header from "./src/components/layout/Header";
import WeeklySchedule from "./src/components/weeklySchedule/WeeklyCarousel";
import WarningNoPost from "./src/components/warningSign/WarningNoPost";
import AddButton from "./src/components/weeklySchedule/AddButton";

function App(): JSX.Element {
  const [weeklyList, setWeeklyList] = useState([
    {
      weekNumber: 1,
      content:
        "Track your ovulation cycle to an idea of when you will be ovulating.",
    },
    {
      weekNumber: 1,
      content: "Study about symptoms of ovulation",
    },
    {
      weekNumber: 1,
      content: "Take folic acid",
    },
    {
      weekNumber: 2,
      content: "Keep a record of your weight ",
    },
    {
      weekNumber: 2,
      content: "Reduce caffeine intake ",
    },
    {
      weekNumber: 2,
      content: "Take folic acid",
    },
    {
      weekNumber: 3,
      content: "Get an at-home pregnancy test ",
    },
    {
      weekNumber: 3,
      content: "Buy superfood that is good for pregnant women",
    },
    {
      weekNumber: 3,
      content: "Take folic acid",
    },
    {
      weekNumber: 4,
      content: "Eat leafy greens to increase iron intake. ",
    },
    {
      weekNumber: 4,
      content: "Schedule an appointment with a OBGYN.",
    },
    {
      weekNumber: 4,
      content: "Take folic acid",
    },
    {
      weekNumber: 5,
      content: "Take folic acid",
    },
    {
      weekNumber: 6,
      content: "Keep a record of your weight ",
    },
    {
      weekNumber: 6,
      content: "Take folic acid",
    },
    {
      weekNumber: 6,
      content: "Create a fiber-rich diet for better bowel movements. ",
    },
    {
      weekNumber: 7,
      content: "Take folic acid",
    },
    {
      weekNumber: 7,
      content: "Create a fiber-rich diet for better bowel movements. ",
    },
    {
      weekNumber: 7,
      content: "Reduce caffeine intake ",
    },
    {
      weekNumber: 8,
      content: "Reduce caffeine intake ",
    },
    {
      weekNumber: 8,
      content: "Eat more calcium. ",
    },
    {
      weekNumber: 9,
      content: "Consult your doctor about increasing the food portion. ",
    },
    {
      weekNumber: 9,
      content: "Do light exercises",
    },
    {
      weekNumber: 9,
      content: "Schedule a visit to the dentist",
    },
    {
      weekNumber: 10,
      content: "Seek medical help if morning sickness is severe. ",
    },
    {
      weekNumber: 10,
      content:
        "Before having any food, check to see if it's safe to consume during pregnancy. ",
    },
    {
      weekNumber: 10,
      content:
        "Consider implenting a new diet plan to increase calcium consumption. ",
    },
    {
      weekNumber: 11,
      content:
        "Ask your doctor about which medication is safe to take during pregnancy. ",
    },
    {
      weekNumber: 11,
      content: "Eat iron-rich foods to prevent anemia. ",
    },
    {
      weekNumber: 11,
      content: "Learn about the Down Syndrome screening. ",
    },
    {
      weekNumber: 12,
      content:
        "Consider purchasing materinity pillows for your comfort in bed. ",
    },
    {
      weekNumber: 13,
      content: "Consider storing the cord blood for the baby.  ",
    },
    {
      weekNumber: 13,
      content:
        "Look for symptoms of UTIs, such as itchiness or burning sensation. ",
    },
    {
      weekNumber: 13,
      content: "Get a pair of materinity tights for circulation. ",
    },
    {
      weekNumber: 14,
      content:
        "Ask your doctor about if you need any supplements and medications. ",
    },
    {
      weekNumber: 14,
      content: "Maintain a well-balanced diet. ",
    },
    {
      weekNumber: 15,
      content: "Buy healthy snacks to catch up your increased appetite.",
    },
    {
      weekNumber: 15,
      content:
        "Talk to your doctor about morning sickness if the symptom is severe. ",
    },
    {
      weekNumber: 16,
      content: "Do Kegel exercise 2-3 times a day for pelvic muscle strength. ",
    },
    {
      weekNumber: 16,
      content: "Learn about the pros and cons of amniotic fluid test",
    },
    {
      weekNumber: 16,
      content: "Wear comfortable shoes. ",
    },
    {
      weekNumber: 17,
      content: "Schedule an ultrasound to find out the gender of your baby. ",
    },
    {
      weekNumber: 17,
      content: "Plan a diet that can help you take plenty of iron.",
    },
    {
      weekNumber: 18,
      content: "Create a weight increase chart to see the trend. ",
    },
    {
      weekNumber: 18,
      content: "Switch to materinity underwear. ",
    },
    {
      weekNumber: 18,
      content: "See if the 3D ultrasonography is available at your clinic. ",
    },
    {
      weekNumber: 19,
      content:
        "Consider purchasing a seatbelt extender designed for pregnant women. ",
    },
    {
      weekNumber: 19,
      content: "Create a weight increase chart to see the trend. ",
    },
    {
      weekNumber: 19,
      content:
        "Consider purchasing a seatbelt extender designed for pregnant women. ",
    },
    {
      weekNumber: 20,
      content: "Talk to your doctor if you are experiencing symptoms of UTIs. ",
    },
    {
      weekNumber: 20,
      content:
        "Research if there's any remedy for reducing the appearance of stretch marks. ",
    },
    {
      weekNumber: 21,
      content:
        "Designate a few minutes each day and communicate with your baby. ",
    },
    {
      weekNumber: 21,
      content:
        "Consult a doctor if your belly feels tight and painful frequently. ",
    },
    {
      weekNumber: 21,
      content:
        "Research if there's any class available in your area about breastfeeding. ",
    },
    {
      weekNumber: 22,
      content: 'Plan a "baby-moon" ',
    },
    {
      weekNumber: 22,
      content: "Start planning for a baby nursery at home. ",
    },
    {
      weekNumber: 23,
      content: "Eat leafy greens to increase iron intake. ",
    },
    {
      weekNumber: 23,
      content: "Consider taking an antenatal class for healthy pregnancy. ",
    },
    {
      weekNumber: 23,
      content:
        "Choose skin care products that are designed for sensitive skin type or pregnant women. ",
    },
    {
      weekNumber: 24,
      content: "Listen to soothing and calm music. ",
    },
    {
      weekNumber: 24,
      content: "Stretch your muscles often. ",
    },
    {
      weekNumber: 25,
      content: "Consult your doctor about your magnesium intake. ",
    },
    {
      weekNumber: 25,
      content:
        "Learn about different breathing methods you can use during labor. ",
    },
    {
      weekNumber: 25,
      content: "Schedule screening for gestational diabetes",
    },
    {
      weekNumber: 26,
      content: "Stretch your muscles often. ",
    },
    {
      weekNumber: 26,
      content: "Research different delivery methods available to you. ",
    },
    {
      weekNumber: 27,
      content: "Stay hydrated. ",
    },
    {
      weekNumber: 27,
      content: "Eat small portions of snacks often throughout the day. ",
    },
    {
      weekNumber: 27,
      content: "Stretch your muscles often. ",
    },
    {
      weekNumber: 28,
      content: "Go for a walk outside or do a light workout. ",
    },
    {
      weekNumber: 28,
      content: "Stay hydrated. ",
    },
    {
      weekNumber: 29,
      content:
        "Massage your belly with oil or cream to help reduce the appearance of strech marks. ",
    },
    {
      weekNumber: 29,
      content: "Be mindful about your stress level. ",
    },
    {
      weekNumber: 30,
      content: "Be aware of the signs of premature birth. ",
    },
    {
      weekNumber: 30,
      content: "Create a plan for the delivery. ",
    },
    {
      weekNumber: 30,
      content: "Make a shopping list for newborn items. ",
    },
    {
      weekNumber: 31,
      content: "Learn about the symptoms of pre-eclampsia. ",
    },
    {
      weekNumber: 31,
      content:
        "Apply sunscreen regularly as your skin can become sensitive during pregnancy. ",
    },
    {
      weekNumber: 31,
      content: "Purchase carbon monoxide detectors for your home. ",
    },
    {
      weekNumber: 32,
      content:
        "Consider taking supplements that helps you produce breastmilk. ",
    },
    {
      weekNumber: 33,
      content: "Learn about the cord blood storing or donation option. ",
    },
    {
      weekNumber: 33,
      content: "Pack a hospital bag. ",
    },
    {
      weekNumber: 33,
      content: "Do light exercise reguarly. ",
    },
    {
      weekNumber: 34,
      content:
        "Create your own checklist and start preparing for the birth of your baby. ",
    },
    {
      weekNumber: 34,
      content: "Learn about the pros and cons of breastfeeding",
    },
    {
      weekNumber: 34,
      content: "Double-check your hospital bag. ",
    },
    {
      weekNumber: 35,
      content:
        "Birth ball exercise can help induce the baby to move their head down. ",
    },
    {
      weekNumber: 35,
      content: "Stretch your legs often to promote circulation. ",
    },
    {
      weekNumber: 35,
      content: "Practice breathing methods before going into labor",
    },
    {
      weekNumber: 36,
      content: "Start setting up a nursery room suitable for a newborn. ",
    },
    {
      weekNumber: 37,
      content:
        "Review each delivery method and determine if you'd like to induce labor. ",
    },
    {
      weekNumber: 37,
      content:
        "Consider downloading the contraction timer app on your phone to prepare for labor. ",
    },
    {
      weekNumber: 38,
      content: "Do light exercise or go for a walk. ",
    },
    {
      weekNumber: 38,
      content:
        "Consider downloading the contraction timer app on your phone to prepare for labor. ",
    },
    {
      weekNumber: 39,
      content: "Place a waterproof mattress cover in case your water breaks. ",
    },
    {
      weekNumber: 39,
      content:
        "Consider downloading the contraction timer app on your phone to prepare for labor. ",
    },
    {
      weekNumber: 39,
      content: "Do light exercise or go for a walk. ",
    },
    {
      weekNumber: 40,
      content: "Do light exercise or go for a walk. ",
    },
    {
      weekNumber: 40,
      content:
        "Consider downloading the contraction timer app on your phone to prepare for labor. ",
    },
  ]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <WeeklySchedule></WeeklySchedule>
        <WarningNoPost />
        <AddButton />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
