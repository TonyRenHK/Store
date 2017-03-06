---
layout: post
title:  "[Essbase]Error 1006023: Data cache is full. Please increase the data cache size for the database"
categories: Essbase
tags:  Oracle Essbase Essbase
---
* content
{:toc}


## Question

Error "1006023: Data cache is full. Please increase the data cache size for the database [databasename]" (Doc ID 597972.1)





## CAUSE


The data cache is full.  The data cache is a buffer in memory that holds uncompressed data blocks. Essbase allocates memory as needed to the data cache during dataloads, calculations, and retrieval operations.

## SOLUTION

**Solutions**:

*Increase the data cache size to hold at least 100 blocks.  For more information on Caches, review "Optimizing Essbase Caches" in the [Essbase Database Administrator's Guide](https://docs.oracle.com/en/applications/?tab=8).

(Note:  Increasing the size of caches can consume more memory.)

*If necessary, decrease the block size.

*Confirm there is enough memory available.

*If running 11.1.2.x EPMA and Planning, there is an issue if Shared Members appear in the outline prior to the Stored member.  This has been verified as Unpublished Bug 16357180: SHARED MEMBERS PRECEEDING THE STORED MEMBERS.  No validations are performed (either as error or as warning) if the shared members appear in the hierarchy/outline prior to the primary member.


**APPLIES TO:**
Hyperion Planning - Version 11.1.2.1.000 and later

Hyperion Essbase - Version 11.1.2.1.000 and later

Information in this document applies to any platform.

Checked for Relevance 11-Aug-2014

Added Additional Information on 20-Feb-2013

