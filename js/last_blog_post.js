var MYBLOG_LIMIT = 3;
var MYWRAPPER_CLASS = 'homeblog';
 
var WP={open:function(b){var a={posts:function(){var d=MYBLOG_LIMIT;var e=0;var c={all:function(g){var f=b+"/api/get_recent_posts/";f+="?count="+d+"&page="+e+"&callback=?";jQuery.getJSON(f,function(l){var k=l.posts;for(var j=0;j<k.length;j++){var h=k[j];h.createComment=function(i,m){i.postId=h.id;a.comments().create(i,m)}}g(k)})},findBySlug:function(f,h){var g=b+"/api/get_post/";g+="?slug="+f+"&callback=?";jQuery.getJSON(g,function(i){h(i.post)})},limit:function(f){d=f;return c},page:function(f){e=f;return c}};return c},pages:function(){var c={findBySlug:function(d,f){var e=b+"/api/get_page/";e+="?slug="+d+"&callback=?";jQuery.getJSON(e,function(g){f(g.page)})}};return c},categories:function(){var c={all:function(e){var d=b+"/api/get_category_index/";d+="?callback=?";jQuery.getJSON(d,function(f){e(f.categories)})}};return c},tags:function(){var c={all:function(e){var d=b+"/api/get_tag_index/";d+="?callback=?";jQuery.getJSON(d,function(f){e(f.tags)})}};return c},comments:function(){var c={create:function(f,e){var d=b+"/api/submit_comment/";d+="?post_id="+f.postId+"&name="+f.name+"&email="+f.email+"&content="+f.content+"&callback=?";jQuery.getJSON(d,function(g){e(g)})}};return c}};return a}};
 
var blog = WP.open('http://stories.expand-business.co.uk/');
blog.posts().all(function(posts){
  for(var i = 0; i < posts.length; i++){
    jQuery('.last_blog_post').append(function(){
      return '<article><div class="avatar_holder"></div><h3><a class="lastpost_title" href="'+posts[i].url+'">'+posts[i].title+'</a></h3><span class="date"></span><p>'+posts[i].excerpt+'</p>';
 
    });
  }
});
/*
<article id="post-1" class="post-1 post type-post status-publish format-standard hentry category-uncategorized">

		<!-- post title -->
		<h2>
			<a href="http://stories.expand-business.co.uk/2016/02/18/hello-world/" title="Hello world!">Hello world!</a>
		</h2>
		<!-- /post title -->

		<!-- post details -->
		<span class="date">Feb' 18, 2016</span>
		<!--<span class="author"><a href="http://stories.expand-business.co.uk/author/admin/" title="Posts by Mladen Gorchev" rel="author">Mladen Gorchev</a></span>-->
		<!--<span class="comments"><a href="http://stories.expand-business.co.uk/2016/02/18/hello-world/#comments"><span class="dsq-postid" data-dsqidentifier="1 http://localhost:8888/expand-blog/?p=1">1 Comment</span></a></span>-->
		<!-- /post details -->

		<!-- post thumbnail -->
				<!-- /post thumbnail -->

		<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
		<a class="post-edit-link" href="http://stories.expand-business.co.uk/wp-admin/post.php?post=1&amp;action=edit">Edit This</a>
	</article>
	*/