---
company: ATX Technologies
location: Lisbon
title: Senior Developer
date: 2014-01-01
period: JUN 2019 - PRESENT
tags: experience
---
At ATX, I’ve started to create a product  that specified how an application interacts with the user and the server. That product consisted in an Agnostic Language and Tools that could then compile to the target device (Web Browser, Adobe Flex, Silverlight / XAML, and later to mobile Android and iOS). - startedby the names of PLX, XPL and later branded to Morphis Frames. 

By the name of XPL, this product was used at:
- **BPN - Banco Porguês de Negócios** - Portuguese Bank
- **DGRHE** - National teacher placement contest

By the name of PLX, this product was used at:
- **CGD - Caixa Geral de Depósitos** - Portuguese Bank

This product was started because we were at CGD doing an technical auditing on the all the platforms and technologies they were using on their balcony. Because of network bandwidth their applications were slow to render. I've started a PoC, on top of a Microsoft technology used at the bank to achieve better performance for the applications. And so PLX was born, a way to render the UI in the browser instead of the server achieving much less data sent from the server to the browser and an upgrade of performance. All the Ui templates, in XSLT, and UI specifications, in XML, and logic (in JavaScript) were cached in the browser. At this time AJAX (asynchronous JavaScript calls to the server to get, data) term didn't existed yet, but I've also  started using this features to achieve better performance and real-time refreshes of data. This PoC, now has PLX, was then fast accepted as a solution and was then later used in the balconies of CGD and maintained and evolved for a couple of years.

With that success, I've started a new version named XPL, to be used in the balconies of **BPN**. With this we needed a way to integrate with real devices like cheque readers, and at this time we did not have technologies like Electron. So, I've used a technology of Microsoft Internet Explorer named **HTA - HTML Application**. With this, we could access the operation system and communicate a custom service application made in C# to get data from the reader.

To manage the complexity of the application modules and their several dependencies I've made a tool, integrated with Visual Studio, that could, almost like Maven, gather and store and in a database a snapshot of the tree of  version dependencies of each module with others. This product was named **Hyve**. And, a realease was made by a pusn of a button, using **CVS** or **Subversion**, checksums of the artefacts (DLL, JS, CSS, etc) and packaging a ASP site.
