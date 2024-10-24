import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 mt-2 p-4 ml-5">
            <div>
                <h3 className="text-4xl text-center bg-green-200 mb-5 p-5 rounded-lg">Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarks Blogs:{bookmarks.length}</h2>
           {
            bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;