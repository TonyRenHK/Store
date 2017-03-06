---
layout: post
title:  "[Essbase]Understanding How to Optimize Essbase Caches"
categories: Essbase
tags:  Oracle Essbase
---
* content
{:toc}


## Topic

Understanding How to Optimize Essbase Caches. (Doc ID 853231.1)





## APPLIES TO:


Hyperion Essbase - Version 9.0.0.0.00 and later
Information in this document applies to any platform.(Checked for Relevance 28-May-2014)

## GOAL
Understanding Essbase Caches Settings.

### SOLUTION

**Understanding Cache Settings:**

The sizes of the index cache and the data file cache (when direct I/O is used) are the most critical Essbase cache settings. In general, the larger these caches, the less swapping activity occurs; however, it does not always help performance to set cache sizes larger and larger. Read this entire section to understand cache size considerations.

**Index Cache:**

Whenever the index cache size equals or exceeds the index size (including all index files on all
volumes), performance does not improve. However, to account for future growth of the index, you can set the index cache size larger than the current index size.

Because the index cache is filled with index pages, for optimum use of storage, set the size of the index cache to be a multiple of the size of the index page (8 KB).


**Data File Cache (Direct I/O only):**

If possible, set the data file cache to equal the size of the stored data, which is the combined size of all ess*.pag files.

Otherwise, the data file cache should be as large as possible. If you want to account for future growth of stored data, you can set the data file cache size larger than the current size of stored data.
NOTE:  Direct I/O is deprecated in release 11.1.2.4

**Data Cache:**

The data cache should be about 0.125 times the data file cache. However, certain calculations require a larger data cache size. If many concurrent users are accessing different data blocks, this cache should be larger.

The default setting is 3072K (in version 6.0 and higher).

To find out how many blocks can fit into this cache, take your setting and divide it by your block size:

Data Cache in K

--------------------- = Number of blocks that can be allocated

Block Size in K


Compare this number with your CALCLOCKBLOCKDEFAULT setting. If this setting is 100 and your allocated block number is less than 100, you need to increase your data cache. The recommended size is 100 x 2 x block size (in K) which is enough to hold 100 blocks. Remember to stop and restart your database in order for the new settings to take effect.

If your CALCLOCKBLOCKDEFAULT setting is 100 and your allocated block number is larger than 100, you need to change your CALCLOCKBLOCKDEFAULT setting to a higher number. Start by doubling it to 200. Set this in your essbase.cfg file. Remember, to stop and start the Essbase server agent (essbase.exe) process for those settings to take effect.

Go back and look at your data cache setting. Make sure it is set high enough to hold 200 blocks (to calculate: 200 x 2 x block size in Kilobytes).

**Checking Cache Hit Ratio:**

Every cache has a “hit ratio.” The hit ratio indicates the percentage of time that a requested piece of information is available in the cache. You can check the hit ratio of the index cache, the data cache, and the data file cache to determine whether you need to increase the cache size.

A higher hit ratio indicates that the data is in the cache more often. This improves performance because the requested data does not have to be retrieved from disk for the next process. A hit ratio of 1.0 indicates that every time data is requested, it is found in the cache. This is the maximum performance possible from a cache setting.

The Hit Ratio on Index Cache setting indicates the Essbase Kernel success rate in locating index information in the index cache without having to retrieve another index page from disk.
The Hit Ratio on Data File Cache setting indicates the Essbase Kernel success rate in locating data file pages in the data file cache without having to retrieve the data file from disk.

The Hit Ratio on Data Cache setting indicates the Essbase success rate in locating data blocks in the data cache without having to retrieve the block from the data file cache.


	
 	


