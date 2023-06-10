# Languages

### React-Native
React Native offers a way to build mobile applications using React and JavaScript.

React Native offers the Text primitive. If we are building an iOS app, React Native will make sure that the Text results with a native iOS UIView containing the text. If we are building an Android application, it will result with a native TextView.

* **IOS** `Text` -> `UIView` which contains a text
* **Android** `Text` -> `TextView` 

There will be 2 threads **Main Thread** and **JS Thread**
* **Main Thread** -> which runs in each standard app is responsible for displaying elements to the user interface and processes user gestures.
* **JS Thread** -> The other one is specific to React Native. Its task is to execute the JavaScript code in a separate JavaScript engine(Hermes). Deals with the business logic. It also defines the structure and the functionalities of the user interface.

```
+-------------+                    +-----------+
|    Main     |---------X--------->|    JS     |
|   Thread    |<--------X----------|  Thread   |
+-------------+                    +-----------+
```

The **JS thread** and **main thread** *will never communicate* with each other directly.

**How do threads interact?**
Between these two threads is the so-called bridge, which is the core of React Native. The bridge has three important characteristics.

```
                        +--------+
+-------------+         |        |          +-----------+
|    Main     |-------->|   RN   |--------->|    JS     |
|   Thread    |<--------| Bridge |<---------|  Thread   |
+-------------+         |        |          +-----------+
                        +--------+
```

* ***Asynchronous.*** It enables asynchronous communication between the threads. This ensures that they never block each other.
* ***Batched.*** It transfers messages from one thread to the other in an optimised way.
* ***Serializable.*** The two threads never share or operate with the same data. Instead, they exchange serialized messages.

***Note:*** To see the bridge messages on the console, just put the following snippet onto the index.<platform>.js file

import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';
MessageQueue.spy(true);