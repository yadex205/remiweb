---
layout: default
title: Live
displaytitle: live schedule
extracss: /css/pages/live.css
---
{% capture nowunix %}{{ site.time | date: "%s" }}{% endcapture %}
<div class="live-list-outer">
	<div class="live-list">
		<header>れーみ&#x2606; ライブ (ソロ・バンド)</header>
		{% for post in site.categories.live reversed %}
		{% if post.tags contains "solo" %}
		{% capture publishtime %}{{post.date | date: "%s"}}{% endcapture %}
		{% if publishtime >= nowunix %}
		<article class="post-thumb">
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
		<header>サポートライブ</header>
		{% for post in site.categories.live reversed %}
		{% if post.tags contains "support" %}
		{% capture publishtime %}{{post.date | date: "%s"}}{% endcapture %}
		{% if publishtime >= nowunix %}
		<article class="post-thumb">
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