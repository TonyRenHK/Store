---
layout: post
title:  "How to add bootstrap in apex:commandButton?"
categories: bootstrap
tags:  bootstrap apex Salesforce
---
* content
{:toc}


## Question

Sometimes, we need to add css in apex:commandButton with bootstrap style.






## Code

Sometimes, we need to add css in apex:commandButton with bootstrap style, however, there will have some conflictings between Bootstrap and visualforce css.

```
<apex:commandButton style="color: #fff; background-color: #5cb85c; border-color: #4cae4c;user-select: none; background-image: none; border: 1px solid transparent; border-radius: 4px; display: inline-block; padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: normal; line-height: 1.42857143; text-align: center; white-space: nowrap; vertical-align: middle; -ms-touch-action: manipulation; touch-action: manipulation;" 
                        value="Upload" id="theButton" action="{!uploadCSVByBatch}" rendered="{!batchMode}" />  
```
And the result will be:

![alt tag](https://raw.githubusercontent.com/TonyRenHK/TonyRen/master/Image/Blog/2017-03-06-How-to-add-bootstrap-in-apex-commandButton.JPG)

In normal case,


```
<button type="button" style="color: #fff; background-color: #f0ad4e; border-color: #eea236; display: inline-block; padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: 400; line-height: 1.42857143; text-align: center; white-space: nowrap;user-select: none; background-image: none; border: 1px solid transparent; border-radius: 4px;" > 
                Cancel 
            </button> 
```
And the result will be:

![alt tag](https://raw.githubusercontent.com/TonyRenHK/TonyRen/master/Image/Blog/2017-03-06-How-to-add-bootstrap-in-apex-commandButton2.JPG)





Reference:
  *Bootstrap W3C: [W3schools Bootstrap](https://www.w3schools.com/bootstrap/)
  

Thanks for reading this article. Any code samples provided here are purely for experimental purposes. The primary purpose of this article is just to share the knowledge and my own experience. Nothing more, nothing less. Use this code and approach at your own risk.Please feel free to contact me (tonyrenhk@outlook.com) if you have any inquiry or the code have any problem. Thank you.
