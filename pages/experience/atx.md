---
company: ATX Technologies
location: Lisbon
title: Senior Developer
date: 2002-01-01
period: Jun 2002 - Mar 2012 · 9 yrs 10 mos
tags: experience
---
At ATX Technologies, I have started to create a product  that specified how an application interacts with the user and server. That product consisted of an Agnostic Language and Tools that could then compile to the target device (Web Browser, Adobe Flex, Silverlight / XAML, and later to mobile Android and iOS). - startedby the names of PLX, XPL and later branded to Morphis Frames.

By the name of XPL, this product was used at the following:
- **BPN - Banco Português de Negócios** - Portuguese Bank
- **DGRHE** - National teacher placement contest
By the name of PLX, this product was used at the following:
- **CGD - Caixa Geral de Depósitos** - Portuguese Bank

This product was started because we were at CGD doing a technical auditing on the entire the platforms and technologies they were using on their balcony. Because of network bandwidth their applications were slow to render. I have started a PoC, on top of a Microsoft technology used at the bank to achieve better performance for the applications. And so PLX was born, a way to render the UI in the browser instead of the server achieving much less data sent from the server to the browser and an upgrade of performance. All UI templates, in XSLT, and UI specifications, in XML, and logic (in JavaScript) were cached in the browser. At this time, AJAX (asynchronous JavaScript calls to the server to get, data) term did not exist yet, but I have also  started using this features to achieve better performance and real-time refreshes of data. This PoC, now has PLX, was then fast accepted as a solution and was then later used in the balconies of CGD and maintained and evolved for a couple of years.

With that success, I have started a new version named XPL, to be used in the balconies of **BPN**. With this  project, we needed a way to integrate with real devices like cheque readers, and at this time we did not have technologies like Electron. So, I have used a technology of Microsoft Internet Explorer named **HTA - HTML Application**. With this technology, we could access the operating system and communicate a custom service application made in C# to get data from the reader.

To manage the complexity of the application modules and their several dependencies I have made a tool, integrated with Visual Studio, that could, like Maven, gather and store and in a database a snapshot of the tree of  version dependencies of each module with others. This product was named **Hyve**. And, software release was only by a push of a button, using **CVS** or **Subversion**, checksums of artefacts (DLL, JS, CSS, etc) and packaging the ASP site.