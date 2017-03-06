---
layout: post
title:  "How to add 'Loading' Action Status when Searching in Salesforce?"
categories: Salesforce
tags:  Salesforce Apex SFDC visualforce-page
---
* content
{:toc}

## Question

How to add 'Loading' Action Status when Searching in Salesforce?






## Solution


How to add'Loading' when searching?
The following code can be added in Visualforce page.
Firstly, we can write javascript code:

```
$(document).on('mousemove', function(e){
            $('#loadtext').css({
               left:  e.pageX,
               top:   e.pageY
            });
        });
```

Apex Code in salesforce:

```
<apex:actionstatus id="ActionStatus">
        <apex:facet name="start">
            <div class="waitingSearchDiv" id="el_loading" style="background-color: #fbfbfb;
               height: 1000%; width:1000%; opacity:0.65;"> 
                <div class="waitingHolder" id="loadtext" style="position: absolute;" align="left" valign="top">
                    &nbsp;&nbsp;&nbsp;
                    <img class="waitingImage" src="/img/loading.gif" title="Please Wait..." />
                    <span class="waitingDescription">Please Wait...</span>
                </div>
            </div>
        </apex:facet>
    </apex:actionstatus> 
```

And then we can write Searching Button:

```
<apex:commandButton value="<<" action="{!firstPage}" reRender="results,debug,error,pagination" status="ActionStatus" />
```

The Final result like this:

![alt tag](https://raw.githubusercontent.com/TonyRenHK/Demo/master/Blog/2015-07-17%2016_33_53-salesforce.com%20-%20loading.png)


Any code samples provided here are purely for experimental purposes and comes with no warranty or support.  The primary purpose of this article is just to share the knowledge and my own experience. Nothing more, nothing less. Use this code and approach at your own risk.Please feel free to contact me (yamshingkwan@gmail.com) if you have any inquiry or the code have any problem. Thank you.

