---
layout: default
extracss: /css/pages/index.css
---
{% capture nowunix %}{{ site.time | date: "%s" }}{% endcapture %}
<div class="top-picture" 
	style="
		background-image: url('image/index-large/00.jpg');
		background-size: cover;
		background-position: 35%;
	">
	<div class="extra-link">
		
	</div>
	<div class="update-info-picture"
		style="
			background-image: url('image/id.jpg');
		">
	</div>
	<div class="update-info-text">
		{% assign post = site.categories.news[0] %}
		<div class="date">
			2016.02.21
		</div>
		<div class="text">
			ライブ情報を更新しました!
		</div>
	</div>
</div>
<div class="bottom-contents">
	<section class="live">
		<header>Live schedule</header>
		{% assign start = site.categories.live | size | minus:3 %}
		{% assign counter = 0 %}
		{% for post in site.categories.live reversed %}
		{% capture publishtime %}{{post.date | date: "%s"}}{% endcapture %}
		{% if publishtime >= nowunix %}
		<div class="post-thumb">
			<div class="date">
				{{ post.date | date: '%Y.%m.%d' }}
			</div>
			<div class="title">
				<a href="{{ page.url | ptr }}{{ post.url }}">{{ post.title }} <i class="fa fa-arrow-circle-right fa-lg"></i></a>
			</div>
		</div>
		{% endif %}
		{% endfor %}
	</section>
	<section class="news">
		<header>News</header>
		{% for post in site.categories.news limit:3 %}
		<div class="post-thumb">
			<div class="date">
				{{ post.date | date: '%Y.%m.%d' }}
			</div>
			<div class="title">
				<a href="{{ page.url | ptr }}{{ post.url }}">{{ post.title }} <i class="fa fa-arrow-circle-right fa-lg"></i></a>
			</div>
		</div>
		{% endfor %}
	</section>
	<section class="twitter">
		<a class="twitter-timeline" href="https://twitter.com/remiriya27" data-widget-id="607049707467120641" data-link-color="#d55" data-chrome="nofooter" data-border-color="#ffc6d1" data-tweet-limit="3">Tweets from @remiriya27</a>
	</section>
</div>