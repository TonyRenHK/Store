---
layout: post
title:  "How to log issue in SFDC by sending email?"
categories: Salesforce
tags:  Salesforce Apex SFDC
---
* content
{:toc}

## Question

How to log issue in SFDC by sending email?






## Solution


How to log issue in SFDC by sending email?

Sometimes, we may want to perform some data patch/execute  some batch job in salesforce Developer Console instead of Data loader. we may write some apex code in Developer Console 'Anonymous Window'. To log the record, we may use 'System.debug('somethings');' to print the information,but we can also use following method to save the log .

Debug-->Open Execute Anonymous Window ( Ctrl+E)  

![alt tag](https://raw.githubusercontent.com/TonyRenHK/Demo/master/Blog/2016-11-10%2013_50_48-Force.com%20Developer%20Console.png)


and then

![alt tag](https://raw.githubusercontent.com/TonyRenHK/Demo/master/Blog/2016-11-10%2013_51_15-Force.com%20Developer%20Console.png)


**Sending Email Method**
{% include GistCode.html id="67721ffcf9d7ed806d3fb521e3c62a15" %}

**Insert Record Method**

If we want to insert the log into one object, we can insert our log into Attachment also:


{% include GistCode.html id="fcec1bb7cdd4d2e1b23d929e683be81e" %}

Please note that we need to create object name 'Log__c' to save the record.

Any code samples provided here are purely for experimental purposes and comes with no warranty or support.  The primary purpose of this article is just to share the knowledge and my own experience. Nothing more, nothing less. Use this code and approach at your own risk.Please feel free to contact me (yamshingkwan@gmail.com) if you have any inquiry or the code have any problem. Thank you.

