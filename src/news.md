---
layout: default
title: News
displaytitle: news
---
{% for post in site.categories.news %}
{% include _post_thumb.html post=post %}
{% endfor %}