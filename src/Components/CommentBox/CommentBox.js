import './CommentBox.css'

function CommentBox({ profile, creator, date, caption, styleCommnet = '' }) {
    return (
        <div className={`comment ${styleCommnet}`}>
            <div className="comment__profile">
                <img className='comment__img' src={profile} alt="profile" />
            </div>
            <div className="comment__content">
                <span className="comment__name">{creator}</span>
                <div className="comment__date">{date}</div>
                <div className="comment__text">{caption}</div>
            </div>
        </div>
    )
}

export default CommentBox