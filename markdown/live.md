---
layout: default
title: Live
displaytitle: live schedule
extracss: /css/pages/news.css
---
<ul class="live-category"></ul>
{% for post in site.categories.live %}
<article class="post">
	<div class="date">
		{{ post.date | date: '%Y.%m.%d' }}
	</div>
	<div class="text">
		<div class="title">
			<a href="{{ base }}{{ post.url }}">{{ post.title }}
				<i class="fa fa-arrow-circle-right fa-lg"></i></a>
		</div>
		<div class="content">
			{{ content }}
		</div>
	</div>
</article>
{% endfor %}