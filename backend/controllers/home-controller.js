const { slideData, tabLinks, mainTabLinks, ntaLatest, ntaGallery, ntaExamData, fieldDetail } = require('../data');


const getHomeData = async (req, res, next) => {

    let homeData = [
        { slideData: slideData },
        { tabLinks: tabLinks },
        { ntaLatest: ntaLatest },
        { mainTabLinks: mainTabLinks },
        { ntaExamData: ntaExamData },
        { fieldDetail: fieldDetail },
        { ntaGallery: ntaGallery },
    ];

    try {

    } catch (err) {

    }

    res.status(200).json(homeData);
}

exports.getHomeData = getHomeData;