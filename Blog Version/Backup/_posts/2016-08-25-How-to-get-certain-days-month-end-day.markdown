---
layout: post
title:  "[SFDC]How to get certain days month end day?"
categories: SFDC
tags:  SFDC Apex Salesforce
---
* content
{:toc}


## Question

How to get certain days month end day in Apex?





## Follow below Code


```
Date selectedDate = Date.today().addDays(4);
Date firstDate = selectedDate.toStartOfMonth();
p.Date__c =firstDate.addDays(date.daysInMonth(selectedDate.year() , selectedDate.month())  - 1);

```

