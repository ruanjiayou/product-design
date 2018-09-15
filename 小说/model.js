/**
 * @api {get} /model/user 用户
 * @apiGroup model
 * 
 * @apiParam {int} id
 */
/**
 * @api {get} /model/book 书籍
 * @apiGroup model
 * 
 * @apiParam {int} id
 * @apiParam {string} name 书籍名称
 * @apiParam {string=''} poster 书籍封面
 * @apiParam {string='[]'} tags 书籍标签
 * @apiParam {string='loading','finished'} status 书籍状态,loading:连载中,finished:已完结
 * @apiParam {string} description 书籍描述
 * @apiParam {int=0,1} isApproved 是否审核通过
 * 
 * @apiParam {int} words 字数统计
 * @apiParam {int} comments 评论统计
 * @apiParam {int} collections 收藏统计
 * @apiParam {int} recommends 推荐统计
 * @apiParam {float} scores 评分统计
 * 
 * @apiParam {int} authorId 作者ID
 * @apiParam {string=''} authorName 作者名字
 * @apiParam {string=''} authorAvatar 作者头像
 * 
 * @apiParam {int} cId 分类ID
 * @apiParam {string} cName 分类名称
 * 
 * @apiParam {string='[]'} catalogs 卷数组
 */
/**
 * @api {get} /model/classify 分类
 * @apiGroup model
 * 
 * @apiParam {int} id 分类id
 * @apiParam {string} name 分类名称
 * @apiParam {int=0} pid 父id
 */
/**
 * @api {get} /model/catalog 目录
 * @apiGroup model
 * 
 * @apiParam {int} id
 * @apiParam {int} bookId 书籍id
 * @apiParam {int} cataSort 卷序号
 * @apiParam {string} cataName 卷名称
 * @apiParam {int} chapterId 章节id
 * @apiParam {string} chapterTitle 章节标题
 */
/**
 * @api {get} /model/chapter 章节
 * @apiGroup model
 * 
 * @apiParam {int} id
 * @apiParam {int} bookId 书籍id
 * @apiParam {int} cataSort 卷序号
 * @apiParam {string} cataName 卷名称
 * @apiParam {string} title 章节标题
 * @apiParam {string} content 章节内容
 * @apiParam {int} words 字数统计
 * @apiParam {datetime} createdAt 创建时间
 */
/**
 * @api {get} /model/test
 * @apiGroup model
 * 
 * @apiParam {int} id
 * @apiParam {string} name
 */