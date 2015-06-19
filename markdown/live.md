---
layout: default
title: Live
displaytitle: live schedule
extracss: /css/pages/live.css
---
{% capture nowunix %}{{ site.time | date: "%s" }}{% endcapture %}
<div class="live-list-outer">
	<div class="live-list">
		<h5>れーみ&#x2606; ライブ</h5>
		{% for post in site.categories.live reversed %}
		{% if post.tags contains "self" %}
		{% capture publishtime %}{{post.date | date: "%s"}}{% endcapture %}
		{% if publishtime >= nowunix %}
		<article class="live">
			<div class="date">
				{{ post.date | date: '%Y.%m.%d' }}
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
		{% endif %}
		{% endfor %}
	</div>
	<div class="live-list">
		<h5>サポートライブ</h5>
		{% for post in site.categories.live reversed %}
		{% if post.tags contains "support" %}
		{% capture publishtime %}{{post.date | date: "%s"}}{% endcapture %}
		{% if publishtime >= nowunix %}
		<article class="live">
			<div class="date">
				{{ post.date | date: '%Y.%m.%d' }}
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
		{% endif %}
		{% endfor %}
	</div>
</div>

<a href="{{page.url | ptr}}/live/archive/">過去のライブはこちら</a>