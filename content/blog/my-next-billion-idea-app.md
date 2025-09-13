---
external: false
draft: true
title: My Next Billion Ringgit Idea App
description: Introducing my next billion ringgit idea for my capstone project
date: 2025-07-16
---

This [IOT project](https://aws.amazon.com/what-is/iot/) is inspired by my internship period in which I was tasked to take care of keying in stock for length-differing materials.

Same with any other *IOT project*, it's got a physical device or so called **IOT node** with sensors and actuator. It's got a **IOT gateway** which serves as a extra computing and connects with the cloud dashboard.

This will be the shape of my **IOT node** controlled by a [ESP32](https://my.cytron.io/p-nodemcu-esp32). It helps measure any wood piece that has been cut in a certain workshop and tracks it by sending signals to the **IOT gateway** (not in the diagram)

{% image src="/posts/my-next-billion-idea-app/iot-node-front.png" width="750" height="500" alt="My IOT Node's Front" /%}

{% image src="/posts/my-next-billion-idea-app/iot-node-back.png" width="750" height="500" alt="My IOT Node's Back" /%}

## What I started with

First, I begin by figuring out how to integrate everything together, the main components of my project are:

1. **MakeID L1 Label Printer** - This printer is using Bluetooth Low Energy and connects with their proprietary mobile app to print using thermal paper (no ink)

{% image src="https://the-gadgeteer.com/wp-content/uploads/2022/04/makeid-l1-1.jpg" width="750" height="500" alt="MakeID L1 Label Printer" /%}
