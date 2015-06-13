---
layout: default
title: News
displaytitle: news
extracss: /css/pages/news.css
---
{% for post in site.categories.news %}
<article class="post">
	<div class="date">
		{{ post.date | date: '%Y.%m.%d'}}
	</div>
	<div class="text">
		<div class="title">
			<a href="{{ base }}{{ post.url }}">{{ post.title }}</a>
				<i class="fa fa-arrow-circle-right fa-lg"></i></a>
		</div>
		<div class="content">
			{{ post.content }}
		</div>
	</div>
</article>
{% endfor %}