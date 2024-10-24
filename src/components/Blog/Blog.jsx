import { IoBookmarkOutline } from 'react-icons/io5';

const Blog = ({blog, handleAddToBookMark,handleMarkAsRead}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtags,id} =blog;
    return (
        <div className='mb-20 space-y-5'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`cover picture of the title${title}`} />
            <div className='flex justify-between mt-2'>
                <div className='flex gap-4'>
                    <img className='w-12 rounded-full' src={author_img} alt="" />
                    <div className=''>
                        <h3 className=''>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={()=>handleAddToBookMark(blog)}
                    className='text-2xl font-bold text-red-600'><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) =><span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-purple-500 font-bold underline'>Mark As Read</button>
        </div>
    );
};
import PropTypes from 'prop-types';
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookMark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;