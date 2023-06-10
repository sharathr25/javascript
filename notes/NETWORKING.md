
## How we send data across internet?
When we need to send data across internet we send and recieve them as **packets**.

```
        Sender                                              Receiver
    +---------------+                                     +---------------+ 
    |               |                                     |               |
    |   +``````\    |                                     |   +``````\    |                 
    |   | ---- |    |                                     |   | ---- |    |
    |   | ---- |    | ------*------*-----*-----*--------> |   | ---- |    |
    |   | ---- |    |                                     |   | ---- |    |
    |   +......+    |                                     |   +......+    |
    |     file      |                                     |    file       |
    +---------------+                                     +---------------+
```
And this packet generation should follow a standard protocol which is **TCP/IP**. we were following **OSI model** but it is outdated. but we need it for refrencing it later.

|  OSI Model Layers  |   
|--------------------|
| Application Layer  |
| Presentation Layer |
| Session layer      |
| Transport Layer    |
| Network Layer      |
| Data link Layer    |
| Physical Layer     |

### TCP/IP model
| TCP/IP model Layers|   protocols and Devices         |
|--------------------|:--------------------------------|
| Application Layer  | SMTP, FTP, HTTP...              |
| Transport Layer    | TCP, UDP                        |
| Network Layer      | IP, Routers                     | 
| Data link Layer    | Ethernet, Switches              | 
| Physical Layer     | Cables, Network interface cards |

> the diffrence between OSI and TCP/IP is the **Application layer** of **TCP/IP** model is the **combination of Application, Presentation and session layers** of **OSI model**

> **Application Layer** of TCP/IP == **Application + Presesntation + Session Layers** of OSI

As we send data each layer will add its own information, this is called **Encpsulataion**

```
                      +------+
                      | data |             Application Layer
                      +------+ 

                +-----+------+             Transport Layer(here data is called SEGMENT)
                | TCP | data |             we will add TCP header
                +-----+------+             we can use UDP as well

           +----+-----+------+             Network Layer(here data is called PACKET)
           | IP | TCP | data |             we will add IP header
           +----+-----+------+             IP header will have source and destication IPs

+----------+----+-----+------+----------+  Data link Layer(here data is called FRAME)
| Ethernet | IP | TCP | data | Ethernet |  we will add header and trailer both.
+----------+----+-----+------+----------+  header will contain source and destication mac adresses
                                           trailer will contain checksum to check errors

       This will be transmitted(Sender)    Physical Layer
       This will be recived(Receiver)
```
The same process in reverse order will be applied on the recieving computer, to get data.

whether we can tolerate packet loss or not depends on what protocol we use in transaport layer.
#### TCP protocol
If we need each and every pocket should be sent to the receiver without loosing order, then we need to use this protocol. If pockets gets lost or corrupted TCP will send these pockets again. This will be used for file transfer, web browsing etc, Where each and every pocket is required to re-create the data using packets.

Using this we get a stable connection with a tradeoff of latency.

##### TCP header
```
    +---------------------+-----------------------+
    | Source port         |    Destination port   |
    +-------------+-------------------------------+
    |                Sequence number              |
    +---------------------------------------------+
    |           Acknowledgement number            |
    +------+--------+-----+-----------------------+
    |data  |reserved|Flags|        window         |                
    |offset|        |     |                       |
    +------+--------+-----+-----------------------+
    | Checksum            |     Urgent            |
    +-------------------------------+-------------+
    |               options         |   padding   |
    +-------------------------------+-------------+     
```
##### Connection oriented
This is a **connection oriented** protocol means *a connection is established and maintained untill all the packets are sent and received by both the computers*.

To establish a connection TCP will use a **3 way handshake**

```
        Sender                                              Receiver
    +---------------+         SYN(1)                      +---------------+ 
    |               |------------------------------------>|               |
    |               |                                     |               |               
    |               |         SYN-ACK(2)                  |               |
    |               |<------------------------------------|               |
    |               |                                     |               |
    |               |            ACK(3)                   |               |
    |               |------------------------------------>|               |
    +---------------+                                     +---------------+
```
##### How TCP ensures pockets are not getting lost?
If packets gets lost in the transmission, then the reciever cannot create file because of the  missing packets. 
But TCP will ensure each and every packet will be sent to reciever without loosing order.
For this TCP will use 3 things:
1. Acknowledge numbers
2. Sequence numbers
3. checksum

TCP protocol will assign a sequence number to each data packet, so that the reciever can sort it out and check whether some packets are missing or not.
The reciever will send acknowledgement number to the sender
```
        Sender                                              Receiver
    +---------------+                                     +---------------+ 
    |               |                                     |    1 2 3 4    |
    |   +``````\    |                                     |   +``````\    |                 
    |   | ---- |    |      sequence numbers               |   | ---- |    |
    |   | ---- |    |-------3------1-----2-----4--------->|   | ---- |    |
    |   | ---- |    |                                     |   | ---- |    |
    |   +......+    |<------4------2----3------1----------|   +......+    |
    |     file      |      acknowledgement numbers        |    file       |
    +---------------+                                     +---------------+
```

#### UDP
If we don't care about pocket loss or curruption we can use UDP. This can be used where we need real time communication like video call, multiplayer games, voice call etc. In these kind of situations we dont want latency, but we are ok with loss of data. becuase no one care little bit of jitter in voice or video in voice or video calls.

```
        Sender                                              Receiver
    +---------------+                                     +---------------+ 
    |               |                     2               |               |
    |               |                                     |               |               
    |               |                                     |               |
    |    voice      |-----------4------3-----------1----->|    voice      |
    |    call       |                                     |      call     |
    |               |                                     |               |
    |               |       5                             |               |
    +---------------+                                     +---------------+
```
In the above example 2nd and 5th pockets are getting last but that is fine, we are ok with loss of small data.
##### UDP header
```
    +-------------------+---------------------+
    | Source port       |  Destination port   |
    +-------------------+---------------------+
    | length            |  checksum           |
    +-------------------+---------------------+
```
#### TCP vs UDP

|                  TCP                            |                     UDP                      |
|-------------------------------------------------|:---------------------------------------------|
|We get reliability but with latency              |There won't be latency, but data is not reliable, there maybe loss of packets    |
|connection oriented protocol                     | Datagram oriented protocol |
| this have extnesive error checking mechanism which will identify loss of pockets using sequence number, anknowledgement numer and checksum| only have basic error checking mechanism
| slow, because there should be connection establishment, error check, resending of packets| fast, simpler, and more efficient becasue no need of connetion, will not send lost packets|
| 20-60 bytes variable length header              | 8 bytes fixed length header|
| ideal for file transfer, webservers             | ideal for real time communication |
| used by HTTP, HTTPS, FTP, SMTP                  | Used by DNS, DHCP, SNMP etc |

#### A short example to understand the differences clearly:
Suppose there are two houses, H1 and H2 and a letter has to be sent from H1 to H2. But there is a river in between those two houses. Now how can we send the letter? 
Solution 1: Make a bridge over the river and then it can be delivered. 
Solution 2: Get it delivered through a pigeon. 

Consider the first solution as TCP. A connection has to made ( bridge ) to get the data (letter) delivered. 
The data is reliable because it will directly reach another end without loss in data or error. 
And the second solution is UDP. No connection is required for sending the data. 
The process is fast as compare to TCP, where we need to set up a connection(bridge). But the data is not reliable: we don’t know whether the pigeon will go in the right direction, or it will drop the letter on the way, or some issue is encountered in mid-travel. types