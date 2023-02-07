const slugify = require('slugify');

const handeDataPost = (req, res, next) => {
	req.body.is_cinema = !!parseInt(req.body.is_cinema);
	req.body.is_film_hot = !!parseInt(req.body.is_film_hot);
	req.body.is_film_canonical = !!parseInt(req.body.is_film_canonical);
	req.body.tags = req.body.tags.split(',').reduce((arrTags, currentTag) => {
		arrTags.push(currentTag.toLowerCase());
		return arrTags;
	}, []);
	req.body.tagsascii = req.body.tags.reduce((arrTagsAscii, currentTag) => {
		arrTagsAscii.push(
			slugify(currentTag, {
				lower: true,
				locale: 'vi',
				remove: /[*+~.()'"!:@]/g,
			}),
		);
		return arrTagsAscii;
	}, []);

	next();
};

module.exports = {
	handeDataPost,
};
