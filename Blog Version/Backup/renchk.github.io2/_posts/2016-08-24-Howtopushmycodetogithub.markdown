---
layout: post
title:  "How to push my code to github?"
categories: GitHub
tags:  Git GitHub
---
* content
{:toc}


## Question

I have some codes in Cloud 9. How to push my code to github?





## How to push my code to github?

It applied in cloud 9.


## Follow below Code


```
$ cd workspace
$ cd renchk.github.io
$ git add -A
$ git commit -m "20160721" 
$ git remote add b1 https://github.com/Renchk/renchk.github.io.git 
$ git push -u origin9 master  
```
## How to preview my Blog in Cloud9?

```
tonyrenhk:~/workspace (master) $ gem install jekyll gem install jekyll-sitemap gem install github-pages

cd renchk.github.io

jekyll serve --host 0.0.0.0 --port 8080

```

and I can preview here: https://demo-project-tonyrenhk.c9users.io/
