---
layout: post
title:  "How to send email in TriggerClass in Salesforce?"
categories: Salesforce
tags:  Salesforce Apex TriggerClass sending-email SFDC
---
* content
{:toc}

## Question

How to send email in TriggerClass in Salesforce?






## Solution


The following code is added class to call email template to send email to
certain email address.The code like this：

{% include GistCode.html id="4298a08b0a480996825abb54a3639a76" %}

Generally we send emails from Salesforce using following ways :-

1. Apex Code

2. Email Alerts

3. Outbound messaging etc.


In all of these ways we normally set 'To'/'Cc'/'Bcc' but have you thought how to control 'From address of email'? what to do if we need to send email displaying any other email address in 'from' part instead of sender's email address. Here is one Salesforce feature to get rid of this problem that is "Organization-Wide Email Addresses".

![alt tag](https://raw.githubusercontent.com/TonyRenHK/Demo/master/Blog/2016-11-15-How-to-send-email-in-TriggerClass-in-Salesforce.png)

In above screen shot you just need to
1. Navigate Setup -> Email Administration ->  Organization-Wide Email Addresses
2. Click on Add button.
3. Enter email Id and display name of sender.
4. In order to complete this process you need to get verified email id you are putting here ( in this example it is 'testuser@gmail.com').

Now it is ready for use. Let's see how we can use it in Apex code side:-

example :

{% include GistCode.html id="f271709080b7d10f65ab9688b0abaf90" %}

Here you can notice that we can control 'From address' in sending email.

Any code samples provided here are purely for experimental purposes and comes with no warranty or support.  The primary purpose of this article is just to share the knowledge and my own experience. Nothing more, nothing less. Use this code and approach at your own risk.Please feel free to contact me (yamshingkwan@gmail.com) if you have any inquiry or the code have any problem. Thank you.

