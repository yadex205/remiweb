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
<article class="post">
	<div class="date">
		{{ post.date | date: "%Y.%m.%d" }}
	</div>
	<div class="text">
		<div class="title">
			<a href="{{ page.url | ptr }}{{ post.url }}">{{ post.title }}
				<i class="fa fa-arrow-circle-right fa-lg"></i></a>
		</div>
		<div class="content">
			@{{post.place}}
		</div>
	</div>
</article>
{% endif %}
{% endfor %}