

# Fruit Inventory Management ADR

Oct 19, 2023

Context: Our team is developing a mobile application named "Fruit Inventory Management."

This application is designed to help users manage their inventory of various fruits, including

tracking the name, price, and quantity of each fruit

1\. Hybrid

  We have chosen to develop the mobile application using React Native.

  React Native allows us to build a single codebase that can run on both iOS and Android

platforms. This choice simplifies development and maintenance and enables us to leverage a

large community of developers and open-source libraries.

2\. Ui Toolkit

  We have decided to stick with React Native's built-in components for the user interface,

with a focus on a clean and user-friendly design.

  Leveraging React Native's built-in components ensures a consistent and native-like user

interface while simplifying development and providing a familiar user experience.

3\. Navigation

  We will use the React Navigation library for navigation within the application.

  React Navigation is a widely adopted library that provides a flexible and customizable

navigation solution for React Native applications. It will enable us to create a smooth and

intuitive navigation experience for users.

4\. Hardware

  We will be using the users device for local storage

  By having local storage it will meet the requirements of storing one json file for the user's

fruits data.

5\. Data Storage

  We will use AsyncStorage for local data storage.


  AsyncStorage is optimal for this situation because the amount of data being used will

only be a json file. By having it local on the users end device, it will allow for no need for other

proprietary libraries and require other node modules. React Native that allows us to store small

amounts of data on the device.

6\. Additional Frameworks or Technology Stacks

We have chosen to develop the app using React Native.

React native allows us to build on top of a single codebase of which is compatible with

iOS and Android. As well as allow us to store data locally on the users end device. This choice

simplifies development and maintenance and enables us to leverage a large community of

developers and open-source libraries.

