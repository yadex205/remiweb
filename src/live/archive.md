---
title: live archives
layout: default
displaytitle: live archives
extracss: /css/pages/news.css
---
{% capture nowunix %}{{ site.time | date: "%s" }}{% endcapture %}
{% for post in site.categories.live %}
{% capture publishtime %}{{post.date | date: "%s"}}{% endcapture %}
{% if publishtime < nowunix %}
{% include _post_thumb.html post=post %}
{% endif %}
{% endfor %}