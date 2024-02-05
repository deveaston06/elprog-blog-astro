---
external: false
title: Comparing Different Fields of Robotics to ELPROG
description: Comparison between different fields of study related to Robotics
date: 2023-12-17
---

In this post, I'd like to share my overview for robotics and what does each different terms means. For me, viewing robotics as a single topic is pretty important because it allows a common ground for developers of different fields to agree upon. What we specifically talking about are the **different subtopics of Robotics** such as `rtos`, `ros`, and also other engineering topics such as _Mechatronics_.

In my own understanding, _Mechatronics_ is kind of similar to the term Robotics, but it leans more to the physical side of the spectrum. Therefore, I will treat each term with full respect, and at the end of this post, I try my best to explain what are differences in these two different fields of study.

## Robotics in All its Messy Glory

From what I understand, Robotics combines both `programming` and Electronics with some amount of _Mechatronics_ to make **Robots**. At this time and point, I haven't yet have the time and energy to research what are the options for my first robotics experiment/project. But, it is important for me to understand what each terms mean to prevent future mistakes.

{% image src="/posts/comparing-fields-of-robotics-to-elprog/excalidraw-terms.png" width="750" height="900" alt="Excalidraw Terms in Robotics" /%}

At first, I have always thought `programming` and _Mechatronics_ are two different things. But, after being introduced to **Robotics**, I have started to open up my mind to new and fresh ideas/concepts. 

### Pin Outs

Before using a Microcontroller, one have to study what are the Peripherals or Input/Outputs. Usually, these Microcontrollers are made in bulk for enthusiasts/experts to experiment/learn **Robotics**. Also at my college club, UMPBot, being in the `elprog` division means studying about making RTOS programs for Microcontroller application.

I have included an example below showing a `pin out` for the ESP32-WROOM-DEVKIT v1 (30 Pin Version). At first, it might seems like there are so much to learn, but it's important to take one step at a time in your experiment (for reference, click [here](https://linuxhint.com/esp32-pinout-reference/)).

{% image src="https://linuxhint.com/wp-content/uploads/2023/06/image2-49-1024x449.png" width="750" height="250" alt="Linux Hint ESP32 Pinout (30 Pin Version)" /%}

Here is another example showing a `pin out` for the WeAct Studio's Black Pill STM32F41xCx. Also, it is very important that you never use a voltage supply that exceeds the chip's limit and [always double-check online](https://stm32world.com/wiki/Black_Pill). 

{% image src="https://stm32world.com/images/thumb/8/87/Black_pill_pinout.png/1400px-Black_pill_pinout.png" width="750" height="450" alt="STM32World WeAct Studio's Black Pill STM32F41xCx" /%}

### Sensors and Systems

This topic is very much foreign to me but recently been wanting to research and understand. This includes some elements of _Mechatronics_ and also some Robotics. Also importantly, please keep in mind that what I want is to explore connections between different fields of study, and also this blog shares a similar value with [t3.gg](https://create.t3.gg/en/introduction).

> We love our bleeding tech, but it's important to bleed reponsibly

How does Robotics relate to _Mechatronics_? Some say _Mechatronics_ is very old and boring, but I say reliability is key. Though Robotics is new and interesting, the end product will usually be unreliable. And I believe that with common understanding and `design` being central/ crucial part of our `values`, we can make better and unique robots, while improving ourselves as an enthusiast/ expert during the process.

There are couple **examples of great Technology Architects** that I'd like to learn from, but be warned that they can be misleading with a lot irony sometimes:

- **Theo - t3.gg**

t3.gg is a brand created by Theo, analytical and problem-oriented with collaboration in mind.

{% a href="https://twitter.com/t3dotgg" %}{% image src="/posts/comparing-fields-of-robotics-to-elprog/theo_s-X-account.png" width="750" height="750" alt="Theo's X Account" /%}{% /a %}

- **Primeagen**

Primeagen is youtube personality, comical and code master with reliability in mind.

{% a href="https://twitter.com/ThePrimeagen" %}{% image src="/posts/comparing-fields-of-robotics-to-elprog/prime_s-X-account.png" width="750" height="750" alt="Prime's X Account" /%}{% /a %}

> Making sense of the nonsensical

In my opinion, Theo's ability to make easy-to-digest diagrams and **make sense of the chaos** is truly inspiring. But I understand balanced humility is true understanding, so Primeagen's **faith in reliability** is also kinda inspiring in a weird way.

## The Courage to Understand

Robotics is all about living in the _Edge of Technology_, whereas _Mechatronics_ is deeply rooted in very old and also **reliable** ways of running _Technical Systems_. Anytime there is problem to solve, we will have to ask ourselves which ways are more reliable and maybe what are the merits to each choice.

> Sometimes all we need is a little push

Inspiration is like the wave that moves ships and boats in the infinitely complex ocean of solitude. We might crash our watercraft onto a deserted island and blame the wave, but the wave would never cease. Does one build themselves a new boat or do nothing? Maybe sometimes it is okay to **ride and understand** others' ship before trying to ride your own ship in the future.
