---
external: false
title: Chaotic Introduction to Robotics
description: Robotics is not my cup of tea, but I am always up for challenges
date: 2023-12-11
---

I have been studying at UMPSA Pekan for 2 months and must say that the campus life here is sometimes pretty chaotic, especially when I have been trying to balance between studying, friends and the _Robotics Club_ which I joined accompanied with some of my new pals.

It all started with one of my pals that has previously studied Diploma in **Electronic Engineering** and is with me in the _Robotics Club_. Thus, it was a start of desperate attempt to catch up considering the fact that I haven't even touched a single topic in robotics before this. In order to impress my peers, I have decided to embark into the unknown seas of robotics _blind-walkthrough style_.

## Arduino

What was the first thing that comes up to my mind when I think about robotics? Hmmm... I am thinking probably **Arduino**. I mean, even my friends own their own electronic components like an _Arduino_ boards, and other things like a _Multimeter_ and _LEDs_. 

Therefore, my first reaction was to buy something online and ship it to my campus. Some of the first electronic components that I bought was from this LAFVIN Arduino Sensor Kit Module that costed **RM90**, that came with the _Arduino Uno R3 CH340_ Board.

{% image src="/posts/chaotic-encounter-with-robotics/uno-r3-ch340-with-sensors.jpg" width="750" height="350" alt="Arduino UNO R3 CH340 Sensors Module" /%}

## Microcontroller

> One must ask before taking actions

I had not idea about any microcontroller in my life before until my friends from _Robotics Club_ introduced them to me in a project we started a month ago. It was then I started researching about differences about Arduino boards and Microcontrollers, and **oh boy should I have done my research before I bought an Arduino board.**

### ESP32

{% image src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2022/10/espressif-logo.png?resize=300%2C60&quality=100&strip=all&ssl=1" width="500" height="500" alt="Espressif Logo" /%}

`ESP32` is a series of microcontroller developed by Espressif. I bought myself the `NodeMCU-32S` or `ESP32` DevKit V1 model, and when I received it, it was already soldered and also came with a USB-A to microUSB cable, so I am able to `flash` my code to the microcontroller via connection to my laptop. It only costed me around **RM32** to buy which is cheaper than the Arduino, but the Arduino kit came with a bunch of other stuffs.

{% image src="/posts/chaotic-encounter-with-robotics/esp32-nodemcu-32s.jpg" width="750" height="600" alt="ESP32 NodeMCU V2 Model" /%}

> There is nothing such as a mistake

After sneaking a peak at what the UMPBot friends has been doing, I decided to copy what they have been doing in order to look more professional. Nothing had been more professional when I founded out that my Arduino Sensor Kit came in clutch as the mini experiment that I want to do literally needs a **sensor** to work, damn, did I felt smart (TODO: make a tutorial post).

### STM32

{% image src="https://static.seekingalpha.com/uploads/2020/4/13/49636850-15867747393039126.jpg" width="500" height="500" alt="STMicroElectronics Logo" /%}

`STM32` is a family of 32-bit microcontroller developed by [STMicroelectronics](https://www.st.com/content/st_com/en.html). Other club members and I like this microcontroller personally, and made jokes about `STM32` being our devoted companionship. 

_Whoops, sorry got distracted there_. Even though performance is considered very important to all of our club members, I sometimes wonder if we did made a mistake in choosing the right microcontroller for our projects. Same with the `ESP32`, `STM32` is a microcontroller that uses a USB cable connection and with a laptop we can flash code to write into the chip. 

{% image src="/posts/chaotic-encounter-with-robotics/stm32f411ceu.jpg" width="750" height="600" alt="STM32F411CEU" /%}

> If it ain't broke, don't fix it

The `STM32` does not have functions found in the `ESP32` like WiFi and Bluetooth which are perfect for IoT applications. Anyhow, `STM32` definitely emphasizes on performance rather than functionalities. Though it still feels like I'm cheating with `STM32` behind a _true angel_ like a `ESP32` (lol). 

I have checked market price for `STM32` in Shopee and it can bought for around **RM17** each, **without the USB-C cable**. Our club senior member has a bunch of them, so I borrowed his `STM32` within his permission. Later, I found out that `STM32` is a lot complex and interesting than the `ESP32`, basically like playing _Devil's Advocate_.

## Final Thoughts

To be honest, I don't know if robotics is very for me, but I like the freshness of hanging out with bunch of robotics nerds. UMPBot has very helped me in finding a place to belong to, and I very like the chill vibe going on in UMPSA Pekan. 

> Thank you viewer for reading the first ever post on this blog!

Also, it made curious about when can I learn about electronic wiring and other sutffs. If you know what I can do next, please let me know what to start with as I feel overwhelmed with a bunch of choices. I have always thought that there were not that many people who are truly invested in technology as I am, but meeting them has very much _humbled_ the little me.
