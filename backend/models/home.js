const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subLinkSchema = new Schema({
    linksHeader: { type: String, required: true },
    links: { type: String, required: true }
});

const subNavSchema = new Schema({
    subHeader: { type: String, required: true },
    subIcon: { type: String, required: true },
    subLinksHeader: [subLinkSchema],
    subPara: { type: String, required: true },
    subImgUrl: { type: String, required: true }
});

const slidesDataSchema = new Schema({
    imagePath: { type: String, required: true },
    link: { type: String, required: true },
    contentImagePath: { type: String, required: true }
});

const tabLinkSchema = new Schema({
    header: { type: String, required: true },
    link: { type: String, required: true }
});

const ntaLatestSchema = new Schema({
    header: { type: String, required: true },
    link: { type: String, required: true }
});

const ntaGallerySchema = new Schema({
    imgPath: { type: String, required: true }
});

const ntaExamDataSchema = new Schema({
    id: { type: Number, required: true },
    sortHeader: { type: String, required: true },
    imagePath: { type: String, required: true },
    fieldHeader: { type: String, required: true },
    header: { type: String, required: true },
    link: { type: String, required: true }
});

const fieldDetailSchema = new Schema({
    icon: { type: String, required: true },
    header: { type: String, required: true },
    para: { type: String, required: true }
});

const homeSchema = new Schema({
    slideData: [slidesDataSchema],
    tabLinks: [tabLinkSchema],
    mainTabLinks: [tabLinkSchema], 
    ntaLatest: [ntaLatestSchema],
    ntaGallery: [ntaGallerySchema],
    ntaExamData: [ntaExamDataSchema],
    fieldDetail: [fieldDetailSchema]
});

module.exports = mongoose.model('Home', homeSchema);
