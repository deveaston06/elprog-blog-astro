---
external: false
title: ROBOCON 2024 November Update
description: Exploring next year's ROBOCON rules and the start of a new Project
date: 2023-12-06
---

[**ABU Asia-Pacific Robot Contest** or (ABU ROBOCON)](https://en.wikipedia.org/wiki/ABU_Robocon) is an annually held competition with different topic and rules each year. The contest's main goal is to create friendship among young people with similar interests by putting two different groups from different country on a one-on-one match.


A match typically lasts around 3 minutes each, and each team wins by achieving the K.O. condition either through getting higher score or something criteria-based. Common rules are usually one side can control the robot, while the other is automatic, meaning that the side that has a robot with higher `stability` and `techniques` win the match. 

{% image src="https://news.ump.edu.my/sites/default/files/gallery-article/robot2.jpg" width="750" height="500" alt="Robocon 2018" /%}

[ROBOCON 2018 Malaysia](https://news.ump.edu.my/awards/umpbot-competed-robocon-2018) was actually held at Seri Sarjana Hall, UNITEN, Bangi, which was when UMPBot started to joined every year since 2018 as seen above. ROBOCON is also held at international level which venue changes to different country each year. This year's international ROBOCON is held at **Vietnam**, which brings us to this year's rules and theme.

## Our Strategy

For November, I only want to briefly what our strategies are winning in this year's competition. I am fully aware that robotics isn't just about `ELPROG` or `SOFTWARE`, and other aspects such as mechanical and fabrication are just as important. But I'd like to focus solely on only `ELPROG` on this blog. 

> Am just a Human, am not a Perfecto

### PCB Architecture

Thus, this brings us to the architecture of the current model in our senior PCB designer's mind. 

{% image src="/posts/rbc2024-nov/pcb-architecture.png" width="750" height="600" alt="Robocon PCB Architecture" /%}

Our senior PCB designers are truly something when it comes to being able to see how to tackle ROBOCON rules. According to the oversimplified diagram above and in my understanding, I think that the choice to use not only ESP32 but also STM32 is pretty good for optimal performance (you can know how I got introduced to microcontrollers [here](/posts/chaotic-encounter-with-robotics))

My understanding of microcontrollers and robotics as seen in my previous post isn't perfectly clear yet. But I'm just glad that there is something that I quite familiar and could get started off, which is **C Programming**.

### RTOS and Programming

My first task from my seniors for now is to learn as much as I can about microcontrollers and differences about `RTOS` and `ROS`. My area of working leans on the `RTOS` (stands for _Real-Time Operating System_) rather than `ROS` (stands for _Robot Operating System_, **not** Real Operating System).

The main concerns surrounding robotics system seems like there are mostly about fixing **compatibility issues** around different microcontrollers which is related with `UART` (stands for _Universal Asynchronous Receiver/ Transmitter_). Below I will include an example from [Electronics Hub](https://www.electronicshub.org/basics-uart-communication/) for UART. 

{% image src="https://www.electronicshub.org/wp-content/uploads/2017/06/UART-Working.jpg" width="750" height="600" alt="UART Working from Electronics Hub" /%}

It may sound simple but wait till we compare it with other communication protocols like CAN (`Controller Area Network`) from [Maruthi Yaramati's LinkedIn Post](https://www.linkedin.com/pulse/controller-area-networkcan-vs-other-communication-maruthi-yaramati), but I'm still waiting for my analysis surrounding communication protocols to click.

Programming at this point is just a way to fix any problem on the way to making a complete working system with the microcontrollers housing the `RTOS` code. On the other hand, Robot Operating System or `ROS` with plenty of problem surrounding making analogue components and digital components work together in Harmony.

### ROS and Electronics

> The part which I struggle the most

ROS would probably be an eternal thorn under my feet and a concept I can't really fully understand. Even though I know that balancing Programming and Electronics is a good thing, but I say that _ignorance is truly a bliss_ (JKJK).

ROS is the true core of robotics and involves the inner working of a fully functional robot. First, it requires one to research about a electronic component needed in your robot, then find a way for microcontrollers to control the component like a _Motor_.

{% image src="https://docs.arduino.cc/54ef6da144b4531dd9ada686a7e67c56/pwm.gif" width="750" height="500" alt="PWM Graph" /%}

Above is a PWM (Pulse Width Modulation) graph I got from [Arduino](https://docs.arduino.cc/learn/microcontrollers/analog-output). The main idea behind PWM is most likely microcontrollers' way to read and send analogue signals to electronics components such as _Motor_.

### ROS2 and Wizardry

We all heard good things about `ROS2`, and also that it basically changes `ROS` completely. `ROS2` is not a topic I myself yet to understand, but it is something my pals from UMPBot introduced to me with his task about solving _object detection_ issues. This article from [model-prime](https://www.model-prime.com/blog/ros-1-vs-ros-2-what-are-the-biggest-differences) summarizes the differences between ROS and ROS2 pretty well, but beware as it could still be oversimplified.

`ROS2` will probably be the pioneer to the robotic sensors technology. Even though `ROS2`'s code _(Holy Grail Language C)_ is not backwards compatible with `ROS`'s code, but _C Language_ means having more flexibility with external libraries.

> Programming is always the salvation

`LIDAR` and `IMU Sensors` are something we are currently trying to do research on in hopes that we can use the finest technology for our robot. But in the end, I will still need to learn how to do my own research about the [Robosense Lidar SDK](https://github.com/RoboSense-LiDAR/rslidar_sdk) and ROS libraries such as [hdl_graph_slam](https://github.com/koide3/hdl_graph_slam) as well as these electronic devices too. Hopefully, I will be able to understand these graphs below too before I turn into a Madman.

{% image src="https://github.com/koide3/hdl_graph_slam/raw/master/imgs/hdl_graph_slam.png" width="750" height="550" alt="HDL Graph Slam Sensor Testing" /%}

## My Progress is Zero

During all this time, my one and only true goal is to understand what is the meaning with all these different technologies. In a nutshell, I swear that one  of these days I will be able to proudly choose one of these _Areas of Robotics Programming_ to take a deep dive into. 

> Wish me Luck

Welp, I won't deny the fact that the challenges that comes with understanding these technologies are infact going to very daunting, but I won't let it stop me either.