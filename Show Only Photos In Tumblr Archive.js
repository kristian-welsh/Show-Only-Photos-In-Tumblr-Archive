function assert(condition, message) {
	if(!condition)
		alert("Assertion Failed: " + message);
}

function removeNonPhotoPostsFromArchive() {
	assert(posts().length, "length is undefined on the return value of posts()");
	assert(posts().item, "item is undefined on the return value of posts()");
	for(var i = posts().length - 1; i >= 0; i--)
		removeIfNotPhoto(posts().item(i));
}

function posts() {
	assert(document, "document is null");
	return document.getElementsByClassName("post");
}

function removeIfNotPhoto(post) {
	assert(post.remove, "remove is undefined on post");
	if(!isPhoto(post))
		post.remove();
}

function isPhoto(post) {
	assert(photos().length, "length is undefined on the return value of photos()");
	assert(photos().item, "item is undefined on the return value of photos()");
	for(var i = 0; i < photos().length; i++)
		if(post == photos().item(i))
			return true;
	return false;
}

function photos() {
	assert(document, "document is null");
	return document.getElementsByClassName("is_photo");
}
removeNonPhotoPostsFromArchive();