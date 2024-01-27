const Page = require('../models/page');
const Home = require('../models/home');
const HttpError = require('../models/http-error');

const { slideData, tabLinks, mainTabLinks, ntaLatest, ntaGallery, ntaExamData, fieldDetail } = require('../data');

const getHomeData = async (req, res, next) => {

    let pageData;

    try {
        pageData = await Page.find().populate('home');
    } catch (err) {
        const error = new HttpError('Fetching homepage failed, please try again later.', 500);
        return next(error);
    }

    const homeObject = pageData.length > 0 ? pageData[0].home : null;
    res.status(200).json(homeObject);
}

exports.getHomeData = getHomeData;