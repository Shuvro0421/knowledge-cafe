import PropTypes from 'prop-types';
import { BsBookmarkFill } from 'react-icons/bs';

const Blog = ({ blog , handleAddToBookMark , handleMarkAsRead }) => {
    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
    console.log(blog);
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full rounded-lg mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex gap-3'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-medium'>{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookMark(blog)} className='text-red-400'><BsBookmarkFill></BsBookmarkFill></button>
                </div>

            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash , idx) => <span key={idx} className='m-1'><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-blue-700 font-medium underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark : PropTypes.func.isRequired,
    handleMarkAsRead : PropTypes.func.isRequired

}
export default Blog;