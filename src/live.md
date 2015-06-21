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
		{% include _post_thumb.html post=post %}
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
		{% include _post_thumb.html post=post %}
		{% endif %}	
		{% endif %}
		{% endfor %}
	</div>
</div>

<a href="{{page.url | ptr}}/live/archive/">過去のライブはこちら</a>